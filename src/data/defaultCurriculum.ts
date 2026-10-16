import { ClassItem, SubjectItem } from '../types';

export const DEFAULT_CLASSES: ClassItem[] = [
  { id: 'class-pri-1', name: 'Primary 1', is_custom: false },
  { id: 'class-pri-2', name: 'Primary 2', is_custom: false },
  { id: 'class-pri-3', name: 'Primary 3', is_custom: false },
  { id: 'class-pri-4', name: 'Primary 4', is_custom: false },
  { id: 'class-pri-5', name: 'Primary 5', is_custom: false },
  { id: 'class-pri-6', name: 'Primary 6', is_custom: false },
  { id: 'class-jss-1', name: 'JSS 1', is_custom: false },
  { id: 'class-jss-2', name: 'JSS 2', is_custom: false },
  { id: 'class-jss-3', name: 'JSS 3', is_custom: false },
  { id: 'class-sss-1', name: 'SSS 1', is_custom: false },
  { id: 'class-sss-2', name: 'SSS 2', is_custom: false },
  { id: 'class-sss-3', name: 'SSS 3', is_custom: false },
];

/**
 * Junior Secondary Subjects strictly defined by NERDC 9-Year Basic Education Curriculum.
 * Allowed ONLY for JSS 1, JSS 2, JSS 3 (Basic 7 - 9).
 */
export const JUNIOR_SECONDARY_SUBJECT_NAMES = [
  'Basic Science',
  'Basic Technology',
  'Business Studies',
  'National Values Education (Social Studies, Civic Education, Security Education)',
  'Cultural & Creative Arts (CCA)',
  'Agricultural Science',
  'Home Economics',
  'Mathematics',
  'English Language',
] as const;

export const JUNIOR_SECONDARY_SUBJECTS: SubjectItem[] = [
  { id: 'subj-jss-bsc', name: 'Basic Science', is_custom: false },
  { id: 'subj-jss-btech', name: 'Basic Technology', is_custom: false },
  { id: 'subj-jss-bus', name: 'Business Studies', is_custom: false },
  { id: 'subj-jss-nve', name: 'National Values Education (Social Studies, Civic Education, Security Education)', is_custom: false },
  { id: 'subj-jss-cca', name: 'Cultural & Creative Arts (CCA)', is_custom: false },
  { id: 'subj-jss-agric', name: 'Agricultural Science', is_custom: false },
  { id: 'subj-jss-hecon', name: 'Home Economics', is_custom: false },
  { id: 'subj-jss-math', name: 'Mathematics', is_custom: false },
  { id: 'subj-jss-eng', name: 'English Language', is_custom: false },
];

/**
 * Senior Secondary Subjects strictly defined by NERDC Senior Secondary Curriculum.
 * Displayed for SSS 1, SSS 2, SSS 3.
 */
export const SENIOR_SECONDARY_SUBJECT_NAMES = [
  'Physics',
  'Chemistry',
  'Biology',
  'Agricultural Science',
  'Economics',
  'Financial Accounting',
  'Commerce',
  'Government',
  'Further Mathematics',
  'Mathematics',
  'English Language',
] as const;

export const SENIOR_SECONDARY_SUBJECTS: SubjectItem[] = [
  { id: 'subj-sss-phys', name: 'Physics', is_custom: false },
  { id: 'subj-sss-chem', name: 'Chemistry', is_custom: false },
  { id: 'subj-sss-bio', name: 'Biology', is_custom: false },
  { id: 'subj-sss-agric', name: 'Agricultural Science', is_custom: false },
  { id: 'subj-sss-econ', name: 'Economics', is_custom: false },
  { id: 'subj-sss-facc', name: 'Financial Accounting', is_custom: false },
  { id: 'subj-sss-comm', name: 'Commerce', is_custom: false },
  { id: 'subj-sss-gov', name: 'Government', is_custom: false },
  { id: 'subj-sss-fmath', name: 'Further Mathematics', is_custom: false },
  { id: 'subj-sss-math', name: 'Mathematics', is_custom: false },
  { id: 'subj-sss-eng', name: 'English Language', is_custom: false },
];

/**
 * Primary School Subjects
 */
export const PRIMARY_SUBJECTS: SubjectItem[] = [
  { id: 'subj-pri-eng', name: 'English Studies', is_custom: false },
  { id: 'subj-pri-math', name: 'Mathematics', is_custom: false },
  { id: 'subj-pri-bsc', name: 'Basic Science & Technology', is_custom: false },
  { id: 'subj-pri-social', name: 'Social Studies', is_custom: false },
  { id: 'subj-pri-civic', name: 'Civic Education', is_custom: false },
  { id: 'subj-pri-cca', name: 'Cultural & Creative Arts (CCA)', is_custom: false },
  { id: 'subj-pri-agric', name: 'Agricultural Science', is_custom: false },
  { id: 'subj-pri-hecon', name: 'Home Economics', is_custom: false },
  { id: 'subj-pri-phe', name: 'Physical & Health Education', is_custom: false },
  { id: 'subj-pri-ict', name: 'Computer Studies / ICT', is_custom: false },
];

/**
 * Global combined default subjects list (uniquely merged by name)
 */
export const DEFAULT_SUBJECTS: SubjectItem[] = [
  ...SENIOR_SECONDARY_SUBJECTS,
  ...JUNIOR_SECONDARY_SUBJECTS.filter(js => !SENIOR_SECONDARY_SUBJECTS.some(ss => ss.name.toLowerCase() === js.name.toLowerCase())),
];

/**
 * Detects if a class name belongs to Junior Secondary level (JSS 1 - 3 / Basic 7 - 9).
 */
export function isJuniorSecondaryClass(className?: string | null): boolean {
  if (!className) return false;
  const c = className.trim().toLowerCase();
  if (/\bjss\s*[1-3]\b/i.test(c) || /\bjs\s*[1-3]\b/i.test(c) || /^jss\s*[1-3](\b|\s|\()/i.test(c)) return true;
  if (/\b(basic\s*[7-9])\b/i.test(c) || /^basic\s*[7-9](\b|\s|\()/i.test(c)) return true;
  if (c.includes('junior secondary') || c.includes('junior')) return true;
  return false;
}

/**
 * Detects if a class name belongs to Senior Secondary level (SSS 1 - 3 / SS 1 - 3).
 */
export function isSeniorSecondaryClass(className?: string | null): boolean {
  if (!className) return false;
  // If it matches Junior Secondary, it is NEVER Senior Secondary
  if (isJuniorSecondaryClass(className)) return false;

  const c = className.trim().toLowerCase();
  if (/\bsss\s*[1-3]\b/i.test(c) || /^sss\s*[1-3](\b|\s|\()/i.test(c)) return true;
  if (/\bss\s*[1-3]\b/i.test(c) || /^ss\s*[1-3](\b|\s|\()/i.test(c)) return true;
  if (c.includes('senior secondary') || c.includes('senior')) return true;
  return false;
}

/**
 * Detects if a class belongs to Primary level (Primary 1 - 6).
 */
export function isPrimaryClass(className?: string | null): boolean {
  if (!className) return false;
  const c = className.trim().toLowerCase();
  return c.includes('primary') || /\bbasic\s*[1-6]\b/i.test(c);
}

/**
 * Gets the categorized curriculum tier for any class string.
 */
export function getCurriculumTier(className?: string | null): 'junior_secondary' | 'senior_secondary' | 'primary' | 'other' {
  if (isJuniorSecondaryClass(className)) return 'junior_secondary';
  if (isSeniorSecondaryClass(className)) return 'senior_secondary';
  if (isPrimaryClass(className)) return 'primary';
  return 'other';
}

/**
 * CRITICAL RULE ENFORCEMENT:
 * - When Class belongs to Junior Secondary (JSS 1, JSS 2, JSS 3), ONLY allow and return Junior Secondary subjects.
 * - When Class belongs to Senior Secondary (SSS 1, SSS 2, SSS 3), return Senior Secondary subjects.
 * - Under no circumstances mix or allow Junior Secondary classes to have Senior Secondary subjects.
 */
export function getSubjectsForClass(className?: string | null, customSubjects?: SubjectItem[]): SubjectItem[] {
  if (isJuniorSecondaryClass(className)) {
    // ONLY allow and display the 9 Junior Secondary subjects.
    // Custom subjects are only included if explicitly marked for Junior or created in JSS context.
    const base = [...JUNIOR_SECONDARY_SUBJECTS];
    if (customSubjects && customSubjects.length > 0) {
      // Filter out any senior secondary subjects so they are NEVER leaked into JSS
      const seniorNames = new Set(SENIOR_SECONDARY_SUBJECT_NAMES.map(s => s.toLowerCase()));
      const validCustom = customSubjects.filter(cs => {
        const lower = cs.name.toLowerCase();
        return !seniorNames.has(lower) && !base.some(b => b.name.toLowerCase() === lower);
      });
      return [...base, ...validCustom];
    }
    return base;
  }

  if (isSeniorSecondaryClass(className)) {
    // Display Senior Secondary subjects
    const base = [...SENIOR_SECONDARY_SUBJECTS];
    if (customSubjects && customSubjects.length > 0) {
      const juniorOnlyNames = new Set([
        'basic science',
        'basic technology',
        'business studies',
        'home economics',
        'national values education',
      ]);
      const validCustom = customSubjects.filter(cs => {
        const lower = cs.name.toLowerCase();
        return !juniorOnlyNames.has(lower) && !base.some(b => b.name.toLowerCase() === lower);
      });
      return [...base, ...validCustom];
    }
    return base;
  }

  if (isPrimaryClass(className)) {
    return [...PRIMARY_SUBJECTS];
  }

  // Fallback for custom or unclassified class
  return DEFAULT_SUBJECTS;
}

/**
 * Validates whether a given subject name is permitted for the specified class level.
 */
export function isValidSubjectForClass(className: string, subjectName: string): boolean {
  if (!className || !subjectName) return false;
  const sName = subjectName.trim().toLowerCase();

  if (isJuniorSecondaryClass(className)) {
    return JUNIOR_SECONDARY_SUBJECT_NAMES.some(
      js => js.toLowerCase() === sName || sName.includes(js.toLowerCase()) || js.toLowerCase().includes(sName)
    );
  }

  if (isSeniorSecondaryClass(className)) {
    // Senior classes must not have Junior-only subjects
    const juniorExclusive = ['basic science', 'basic technology', 'business studies', 'home economics'];
    if (juniorExclusive.some(je => sName.includes(je))) {
      return false;
    }
    return SENIOR_SECONDARY_SUBJECT_NAMES.some(
      ss => ss.toLowerCase() === sName || sName.includes(ss.toLowerCase()) || ss.toLowerCase().includes(sName)
    );
  }

  return true;
}

/**
 * Returns a safe default subject for a given class level when resetting or initializing.
 */
export function getDefaultSubjectForClass(className: string): string {
  if (isJuniorSecondaryClass(className)) {
    return 'Basic Science';
  }
  if (isSeniorSecondaryClass(className)) {
    return 'Biology';
  }
  if (isPrimaryClass(className)) {
    return 'Mathematics';
  }
  return 'Mathematics';
}
