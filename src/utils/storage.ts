import { SavedArtwork, UserStats } from '../types';

const STORAGE_KEYS = {
  ARTWORKS: 'pinksketch_artworks',
  STATS: 'pinksketch_stats',
  FIRST_LAUNCH: 'pinksketch_first_launch_done',
  LAST_LESSON: 'pinksketch_last_lesson',
};

const DEFAULT_STATS: UserStats = {
  lessonsCompleted: [],
  drawingsCount: 0,
  practiceSessions: 0,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
};

export const getSavedArtworks = (): SavedArtwork[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ARTWORKS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveArtwork = (artwork: SavedArtwork): boolean => {
  try {
    const existing = getSavedArtworks();
    const updated = [artwork, ...existing.filter((a) => a.id !== artwork.id)];
    localStorage.setItem(STORAGE_KEYS.ARTWORKS, JSON.stringify(updated));

    // Update user stats
    updateDrawingCount();
    return true;
  } catch (err) {
    console.error('Failed to save artwork', err);
    return false;
  }
};

export const deleteArtwork = (id: string): boolean => {
  try {
    const existing = getSavedArtworks();
    const filtered = existing.filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEYS.ARTWORKS, JSON.stringify(filtered));
    return true;
  } catch {
    return false;
  }
};

export const renameArtwork = (id: string, newTitle: string): boolean => {
  try {
    const existing = getSavedArtworks();
    const updated = existing.map((a) => (a.id === id ? { ...a, title: newTitle.trim() } : a));
    localStorage.setItem(STORAGE_KEYS.ARTWORKS, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
};

export const getUserStats = (): UserStats => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) return DEFAULT_STATS;
    const stats = JSON.parse(raw) as UserStats;

    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActiveDate !== today) {
      const last = new Date(stats.lastActiveDate).getTime();
      const now = new Date(today).getTime();
      const diffDays = Math.round((now - last) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        stats.streak += 1;
      } else if (diffDays > 1) {
        stats.streak = 1;
      }
      stats.lastActiveDate = today;
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    }

    return stats;
  } catch {
    return DEFAULT_STATS;
  }
};

export const recordLessonCompleted = (lessonId: string) => {
  try {
    const stats = getUserStats();
    if (!stats.lessonsCompleted.includes(lessonId)) {
      stats.lessonsCompleted.push(lessonId);
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateDrawingCount = () => {
  try {
    const stats = getUserStats();
    stats.drawingsCount += 1;
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (err) {
    console.error(err);
  }
};

export const recordPracticeSession = () => {
  try {
    const stats = getUserStats();
    stats.practiceSessions += 1;
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (err) {
    console.error(err);
  }
};

export const isFirstLaunch = (): boolean => {
  return localStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH) !== 'true';
};

export const markFirstLaunchComplete = () => {
  localStorage.setItem(STORAGE_KEYS.FIRST_LAUNCH, 'true');
};
