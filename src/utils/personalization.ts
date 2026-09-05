import type {
  StudentProfile,
  CareerRole,
  CareerRecommendation,
  SkillLevel,
  SkillStatus,
  Priority,
  RoadmapPhase,
  RoadmapStatus,
  LearningResource,
  Certification,
} from '@/types';
import { CAREER_ROLES, getCareerRole } from '@/data/careers';
import { getRoadmap } from '@/data/roadmaps';
import { RESOURCES, CERTIFICATIONS } from '@/data/resources';
import { calculateOverallProgress } from './progress';

const LEVEL_ORDER: Record<SkillLevel, number> = {
  'Not Started': 0,
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export function getSkillLevel(
  profile: StudentProfile,
  skill: string
): SkillLevel {
  const found = profile.skills.find((s) => s.name === skill);
  return found ? found.level : 'Not Started';
}

/**
 * Calculates how well a student's profile matches a career.
 *
 * Personalization factors:
 * - Required skills: 50%
 * - Interests: 30%
 * - Preferred technologies: 15%
 * - Explicitly selected career: 5%
 *
 * This prevents one career from being recommended simply because
 * it appears first in the CAREER_ROLES array.
 */
export function calculateMatch(
  profile: StudentProfile,
  role: CareerRole
): CareerRecommendation {
  let totalWeight = 0;
  let matchedWeight = 0;

  const matchReasons: string[] = [];
  const hasSkills: string[] = [];
  const needsSkills: string[] = [];

  // ─────────────────────────────────────────────
  // 1. SKILL MATCH
  // Skills are the strongest signal.
  // ─────────────────────────────────────────────

  for (const req of role.coreSkills) {
    const weight =
      req.priority === 'High'
        ? 3
        : req.priority === 'Medium'
        ? 2
        : 1;

    totalWeight += weight;

    const studentLevel = getSkillLevel(profile, req.skill);
    const studentVal = LEVEL_ORDER[studentLevel];
    const reqVal = LEVEL_ORDER[req.requiredLevel];

    if (studentVal >= reqVal) {
      matchedWeight += weight;
      hasSkills.push(req.skill);
    } else if (studentVal > 0 && reqVal > 0) {
      matchedWeight += (studentVal / reqVal) * weight;
      needsSkills.push(req.skill);
    } else {
      needsSkills.push(req.skill);
    }
  }

  const skillScore =
    totalWeight > 0
      ? (matchedWeight / totalWeight) * 100
      : 0;

  // ─────────────────────────────────────────────
  // 2. INTEREST MATCH
  // Interests are an important personalization signal.
  // ─────────────────────────────────────────────

  const roleTagsLower = role.tags.map((tag) =>
    tag.toLowerCase().trim()
  );

  const interestMatch = profile.interests.filter((interest) => {
    const interestLower = interest.toLowerCase().trim();

    return roleTagsLower.some(
      (tag) =>
        tag === interestLower ||
        tag.includes(interestLower) ||
        interestLower.includes(tag)
    );
  });

  const interestScore =
    profile.interests.length > 0
      ? Math.min(
          100,
          (interestMatch.length / profile.interests.length) * 100
        )
      : 0;

  // ─────────────────────────────────────────────
  // 3. PREFERRED TECHNOLOGY MATCH
  // ─────────────────────────────────────────────

  const techMatch = profile.preferredTechnologies.filter(
    (technology) => {
      const technologyLower = technology.toLowerCase().trim();

      return roleTagsLower.some(
        (tag) =>
          tag === technologyLower ||
          tag.includes(technologyLower) ||
          technologyLower.includes(tag)
      );
    }
  );

  const technologyScore =
    profile.preferredTechnologies.length > 0
      ? Math.min(
          100,
          (techMatch.length /
            profile.preferredTechnologies.length) *
            100
        )
      : 0;

  // ─────────────────────────────────────────────
  // 4. EXPLICIT CAREER INTEREST
  // ─────────────────────────────────────────────

  const interestedRoleMatch = profile.interestedRoles.some(
    (interestedRole) =>
      interestedRole.toLowerCase().trim() ===
      role.title.toLowerCase().trim()
  );

  // ─────────────────────────────────────────────
  // 5. PERSONALIZED SCORE
  //
  // Skills        = 50%
  // Interests     = 30%
  // Technologies  = 15%
  // Selected role = 5%
  // ─────────────────────────────────────────────

  let matchPercentage = Math.round(
    skillScore * 0.5 +
      interestScore * 0.3 +
      technologyScore * 0.15 +
      (interestedRoleMatch ? 5 : 0)
  );

  // ─────────────────────────────────────────────
  // 6. PERSONALIZED REASONS
  // ─────────────────────────────────────────────

  if (interestMatch.length > 0) {
    matchReasons.push(
      `Your interests in ${interestMatch
        .slice(0, 3)
        .join(', ')} align with this career path.`
    );
  }

  if (techMatch.length > 0) {
    matchReasons.push(
      `Your preferred technologies include ${techMatch
        .slice(0, 3)
        .join(', ')}, which are relevant to this role.`
    );
  }

  if (interestedRoleMatch) {
    matchReasons.push(
      `You explicitly selected ${role.title} as one of your career interests.`
    );
  }

  if (hasSkills.length > 0) {
    matchReasons.push(
      `You already have experience with ${hasSkills
        .slice(0, 3)
        .join(', ')}, which supports this career path.`
    );
  }

  if (needsSkills.length > 0) {
    matchReasons.push(
      `To become job-ready for this role, you should develop ${needsSkills
        .slice(0, 3)
        .join(', ')}.`
    );
  }

  // ─────────────────────────────────────────────
  // 7. YEAR CONTEXT
  // This affects the explanation only.
  // It does NOT artificially increase the score.
  // ─────────────────────────────────────────────

  if (
    profile.year === '1st Year' ||
    profile.year === '2nd Year'
  ) {
    matchReasons.push(
      `As a ${profile.year.toLowerCase()} student, you have time to build the skills required for this career path.`
    );
  } else if (
    profile.year === '3rd Year' ||
    profile.year === '4th Year'
  ) {
    matchReasons.push(
      `As a ${profile.year.toLowerCase()} student, focusing on this path can help you prepare for upcoming placements.`
    );
  }

  // ─────────────────────────────────────────────
  // 8. FINAL SCORE
  //
  // There is NO artificial 35% minimum anymore.
  // A poor match can receive a genuinely low score.
  // ─────────────────────────────────────────────

  matchPercentage = Math.max(
    0,
    Math.min(99, matchPercentage)
  );

  return {
    role,
    matchPercentage,
    matchReasons,
    hasSkills,
    needsSkills,
  };
}

/**
 * Returns career recommendations ordered by
 * personalized match score.
 *
 * If two careers have the same score:
 * 1. Explicitly selected career wins.
 * 2. Alphabetical order is used as the final tie-breaker.
 *
 * This means CAREER_ROLES array order does not decide
 * which career appears first.
 */
export function getRecommendations(
  profile: StudentProfile
): CareerRecommendation[] {
  const recs = CAREER_ROLES.map((role) =>
    calculateMatch(profile, role)
  );

  return recs.sort((a, b) => {
    // Highest personalized score first.
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }

    // If scores are tied, prefer the career the
    // student explicitly selected.
    const aInterested = profile.interestedRoles.some(
      (r) =>
        r.toLowerCase().trim() ===
        a.role.title.toLowerCase().trim()
    );

    const bInterested = profile.interestedRoles.some(
      (r) =>
        r.toLowerCase().trim() ===
        b.role.title.toLowerCase().trim()
    );

    if (aInterested !== bInterested) {
      return aInterested ? -1 : 1;
    }

    // Final tie-breaker.
    return a.role.title.localeCompare(b.role.title);
  });
}

export interface SkillGap {
  skill: string;
  currentLevel: SkillLevel;
  requiredLevel: SkillLevel;
  status: SkillStatus;
  priority: Priority;
  importance: string;
  gap: number;
}

export function analyzeSkillGap(
  profile: StudentProfile
): SkillGap[] {
  const role = getCareerRole(profile.targetRoleId);

  if (!role) return [];

  return role.coreSkills.map((req) => {
    const currentLevel = getSkillLevel(profile, req.skill);
    const currentVal = LEVEL_ORDER[currentLevel];
    const reqVal = LEVEL_ORDER[req.requiredLevel];
    const gap = Math.max(0, reqVal - currentVal);

    let status: SkillStatus;

    if (currentVal >= reqVal) {
      status = 'Strong';
    } else if (currentVal === 0) {
      status = 'Missing';
    } else if (gap >= 2) {
      status = 'Needs Improvement';
    } else {
      status = 'Developing';
    }

    return {
      skill: req.skill,
      currentLevel,
      requiredLevel: req.requiredLevel,
      status,
      priority: req.priority,
      importance: req.importance,
      gap,
    };
  });
}

export function getSkillGapSummary(
  profile: StudentProfile
): {
  strong: SkillGap[];
  developing: SkillGap[];
  needsImprovement: SkillGap[];
  missing: SkillGap[];
  coverage: number;
  missingCount: number;
  highPriority: SkillGap[];
  nextSkill: SkillGap | null;
  summary: string;
} {
  const gaps = analyzeSkillGap(profile);

  const strong = gaps.filter(
    (g) => g.status === 'Strong'
  );

  const developing = gaps.filter(
    (g) => g.status === 'Developing'
  );

  const needsImprovement = gaps.filter(
    (g) => g.status === 'Needs Improvement'
  );

  const missing = gaps.filter(
    (g) => g.status === 'Missing'
  );

  const highPriority = gaps.filter(
    (g) =>
      g.priority === 'High' &&
      g.status !== 'Strong'
  );

  const coverage =
    gaps.length > 0
      ? Math.round((strong.length / gaps.length) * 100)
      : 0;

  const missingCount = missing.length;

  const nextSkill =
    [
      ...missing,
      ...needsImprovement,
      ...developing,
    ].sort((a, b) => {
      const priorityOrder: Record<Priority, number> = {
        High: 0,
        Medium: 1,
        Low: 2,
      };

      return (
        priorityOrder[a.priority] -
        priorityOrder[b.priority]
      );
    })[0] || null;

  const role = getCareerRole(profile.targetRoleId);
  const roleName = role?.title || 'your target role';

  let summary = '';

  if (strong.length > 0) {
    summary += `Your strongest foundation for becoming a ${roleName} is ${strong[0].skill}. `;
  }

  if (
    missing.length > 0 ||
    needsImprovement.length > 0
  ) {
    const gaps = [
      ...missing,
      ...needsImprovement,
    ]
      .slice(0, 3)
      .map((g) => g.skill);

    summary += `Your biggest skill gaps are ${gaps.join(
      ' and '
    )}. `;
  }

  if (nextSkill) {
    summary += `Based on your current profile, focus on ${nextSkill.skill} before moving to more advanced topics.`;
  }

  return {
    strong,
    developing,
    needsImprovement,
    missing,
    coverage,
    missingCount,
    highPriority,
    nextSkill,
    summary,
  };
}

export function computeRoadmapStatuses(
  profile: StudentProfile
): Record<string, RoadmapStatus> {
  const phases = getRoadmap(
    profile.targetRoleId || ''
  );

  if (phases.length === 0) return {};

  const statuses: Record<string, RoadmapStatus> = {};
  let foundNext = false;

  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const existing =
      profile.roadmapProgress[phase.id];

    if (existing === 'Completed') {
      statuses[phase.id] = 'Completed';
      continue;
    }

    // Check if all prerequisites are completed.
    const prereqsMet = phase.prerequisites.every(
      (p) => statuses[p] === 'Completed'
    );

    if (!foundNext && prereqsMet) {
      // Check if the student already has this
      // skill at the required level.
      const role = getCareerRole(
        profile.targetRoleId
      );

      const req = role?.coreSkills.find(
        (r) => r.skill === phase.skill
      );

      const studentLevel = getSkillLevel(
        profile,
        phase.skill
      );

      if (
        req &&
        LEVEL_ORDER[studentLevel] >=
          LEVEL_ORDER[req.requiredLevel]
      ) {
        // Already has the skill, auto-complete.
        statuses[phase.id] = 'Completed';
        continue;
      }

      if (existing === 'In Progress') {
        statuses[phase.id] = 'In Progress';
      } else {
        statuses[phase.id] = 'Next';
      }

      foundNext = true;
    } else if (
      prereqsMet &&
      existing === 'In Progress'
    ) {
      statuses[phase.id] = 'In Progress';
      foundNext = true;
    } else {
      statuses[phase.id] = 'Locked';
    }
  }

  return statuses;
}

export function getRoadmapProgress(
  profile: StudentProfile
): {
  phases: (RoadmapPhase & {
    status: RoadmapStatus;
    progress: number;
    learningProgress: number;
    knowledgeMastery: number;
    topicsCompleted: number;
    totalTopics: number;
    weakTopics: number;
  })[];
  overallProgress: number;
  learningProgress: number;
  knowledgeMastery: number;
  currentPhase: (RoadmapPhase & {
    status: RoadmapStatus;
    progress: number;
    learningProgress: number;
    knowledgeMastery: number;
    topicsCompleted: number;
    totalTopics: number;
    weakTopics: number;
  }) | null;
  nextPhase: (RoadmapPhase & {
    status: RoadmapStatus;
    progress: number;
    learningProgress: number;
    knowledgeMastery: number;
    topicsCompleted: number;
    totalTopics: number;
    weakTopics: number;
  }) | null;
  completedCount: number;
  totalCount: number;
} {
  const phases = getRoadmap(
    profile.targetRoleId || ''
  );

  if (phases.length === 0) {
    return {
      phases: [],
      overallProgress: 0,
      learningProgress: 0,
      knowledgeMastery: 0,
      currentPhase: null,
      nextPhase: null,
      completedCount: 0,
      totalCount: 0,
    };
  }

  const {
    phaseBreakdown,
    overallProgress,
    learningProgress,
    knowledgeMastery,
    completedPhases,
  } = calculateOverallProgress(profile);

  const enrichedPhases = phases.map((phase) => {
    const breakdown = phaseBreakdown.find(
      (pb) => pb.phase.id === phase.id
    );

    const status =
      breakdown?.status || 'Locked';

    const lp =
      breakdown?.learningProgress || 0;

    const km =
      breakdown?.knowledgeMastery || 0;

    const tc =
      breakdown?.topicsCompleted || 0;

    const tt =
      breakdown?.totalTopics || 0;

    const wt =
      breakdown?.weakTopics || 0;

    return {
      ...phase,
      status,
      progress: lp,
      learningProgress: lp,
      knowledgeMastery: km,
      topicsCompleted: tc,
      totalTopics: tt,
      weakTopics: wt,
    };
  });

  const currentPhase =
    enrichedPhases.find(
      (p) => p.status === 'In Progress'
    ) ||
    enrichedPhases.find(
      (p) => p.status === 'Next'
    ) ||
    enrichedPhases.find(
      (p) =>
        p.learningProgress > 0 &&
        p.status !== 'Completed'
    ) ||
    null;

  const nextPhase =
    enrichedPhases.find(
      (p) =>
        p.status === 'Next' ||
        (
          p.learningProgress === 0 &&
          p.status !== 'Completed' &&
          p.status !== 'Locked'
        )
    ) || null;

  return {
    phases: enrichedPhases,
    overallProgress,
    learningProgress,
    knowledgeMastery,
    currentPhase,
    nextPhase,
    completedCount: completedPhases,
    totalCount: phases.length,
  };
}

export function getRecommendedResources(
  profile: StudentProfile,
  limit = 6
): LearningResource[] {
  const { currentPhase } =
    getRoadmapProgress(profile);

  if (!currentPhase) {
    // Fallback: recommend based on skill gaps.
    const gaps = analyzeSkillGap(profile);

    const topGaps = gaps
      .filter((g) => g.status !== 'Strong')
      .slice(0, 3);

    const recs: LearningResource[] = [];

    for (const gap of topGaps) {
      const resources = RESOURCES.filter(
        (r) =>
          r.skill === gap.skill &&
          r.difficulty === 'Beginner'
      );

      recs.push(...resources.slice(0, 2));
    }

    return recs.slice(0, limit);
  }

  const phaseResources = RESOURCES.filter(
    (r) => currentPhase.resourceIds.includes(r.id)
  );

  return phaseResources.slice(0, limit);
}

export function getRecommendedCertifications(
  profile: StudentProfile,
  limit = 4
): Certification[] {
  const { currentPhase } =
    getRoadmapProgress(profile);

  if (!currentPhase) {
    return CERTIFICATIONS.filter(
      (c) => c.free
    ).slice(0, limit);
  }

  const phaseCerts = CERTIFICATIONS.filter(
    (c) =>
      currentPhase.certificationIds.includes(c.id)
  );

  if (phaseCerts.length < limit) {
    const role = getCareerRole(
      profile.targetRoleId
    );

    if (role) {
      const roleSkills = role.coreSkills.map(
        (s) => s.skill
      );

      const extra = CERTIFICATIONS.filter(
        (c) =>
          roleSkills.includes(c.skill) &&
          !phaseCerts.includes(c) &&
          c.free
      );

      return [
        ...phaseCerts,
        ...extra,
      ].slice(0, limit);
    }
  }

  return phaseCerts.slice(0, limit);
}

export function getResourceRecommendationReason(
  resource: LearningResource,
  profile: StudentProfile
): string {
  const { currentPhase } =
    getRoadmapProgress(profile);

  const skillLevel = getSkillLevel(
    profile,
    resource.skill
  );

  if (
    currentPhase &&
    currentPhase.resourceIds.includes(resource.id)
  ) {
    return `Recommended because you are currently on the "${currentPhase.title}" phase of your roadmap and this resource covers the exact concepts required to complete it.`;
  }

  if (
    skillLevel === 'Not Started' &&
    resource.difficulty === 'Beginner'
  ) {
    return `Recommended because you haven't started ${resource.skill} yet and this beginner resource will give you the right foundation.`;
  }

  if (
    skillLevel === 'Beginner' &&
    resource.difficulty === 'Intermediate'
  ) {
    return `Recommended because you have basic ${resource.skill} knowledge and this resource will help you level up to intermediate.`;
  }

  const gaps = analyzeSkillGap(profile);

  const gap = gaps.find(
    (g) => g.skill === resource.skill
  );

  if (gap && gap.status !== 'Strong') {
    return `Recommended because ${resource.skill} is a ${gap.priority.toLowerCase()} priority skill gap for your target role, and this ${resource.difficulty.toLowerCase()} resource matches your current level.`;
  }

  return `Recommended based on your target career path and current learning progress.`;
}

export function getOverallProgress(
  profile: StudentProfile
): number {
  return getRoadmapProgress(profile).overallProgress;
}

export function getCareerReadiness(
  profile: StudentProfile
): number {
  const summary = getSkillGapSummary(profile);
  return summary.coverage;
}

export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Good morning';
  }

  if (hour < 17) {
    return 'Good afternoon';
  }

  return 'Good evening';
}

export function getWeeklyActivity(): {
  day: string;
  minutes: number;
}[] {
  const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];

  return days.map((day) => ({
    day,
    minutes: Math.floor(Math.random() * 120) + 15,
  }));
}
