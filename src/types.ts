export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type Category =
  | 'Animals'
  | 'Flowers'
  | 'Nature'
  | 'Cute'
  | 'Food'
  | 'Objects'
  | 'Characters'
  | 'Landscapes';

export interface LessonStep {
  stepNumber: number;
  title: string;
  instruction: string;
  tip?: string;
  // SVG paths string or elements specifically for this step cumulative view
  // New lines added in this step are marked with high-contrast rose color
  cumulativeSvg: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  estimatedTime: string;
  description: string;
  steps: LessonStep[];
  thumbnailSvg: string;
  tags: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
}

export interface SavedArtwork {
  id: string;
  title: string;
  createdAt: number;
  dataUrl: string;
  lessonId?: string;
  lessonTitle?: string;
  category?: string;
  reward?: string;
  rewardChooser?: string;
  comment?: string;
}

export interface UserStats {
  lessonsCompleted: string[];
  drawingsCount: number;
  practiceSessions: number;
  streak: number;
  lastActiveDate: string;
}

export type ActiveTab = 'home' | 'explore' | 'practice' | 'myart';
