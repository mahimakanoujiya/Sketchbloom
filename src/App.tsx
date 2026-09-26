import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { PracticeView } from './views/PracticeView';
import { MyArtView } from './views/MyArtView';
import { LessonView } from './views/LessonView';
import { DrawingCanvas } from './components/DrawingCanvas';
import { CelebrationModal } from './components/CelebrationModal';
import { WelcomeModal } from './components/WelcomeModal';
import { StatsModal } from './components/StatsModal';
import { LESSONS } from './data/lessons';
import {
  ActiveTab,
  Lesson,
  Category,
  SavedArtwork,
  UserStats,
} from './types';
import {
  getSavedArtworks,
  saveArtwork,
  deleteArtwork,
  renameArtwork,
  getUserStats,
  recordLessonCompleted,
  recordPracticeSession,
  isFirstLaunch,
  markFirstLaunchComplete,
} from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [editingArtwork, setEditingArtwork] = useState<SavedArtwork | null>(null);
  const [exploreCategory, setExploreCategory] = useState<Category | 'All'>('All');

  // Modals
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  const [showStats, setShowStats] = useState<boolean>(false);
  const [celebrationLesson, setCelebrationLesson] = useState<Lesson | null>(null);
  const [lastSavedArtworkId, setLastSavedArtworkId] = useState<string | null>(null);

  // Local storage state
  const [artworks, setArtworks] = useState<SavedArtwork[]>([]);
  const [stats, setStats] = useState<UserStats>({
    lessonsCompleted: [],
    drawingsCount: 0,
    practiceSessions: 0,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
  });

  // Initial load
  useEffect(() => {
    setArtworks(getSavedArtworks());
    setStats(getUserStats());

    if (isFirstLaunch()) {
      setShowWelcome(true);
    }
  }, []);

  const handleStartDrawingFromWelcome = () => {
    markFirstLaunchComplete();
    setShowWelcome(false);
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setEditingArtwork(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: Category) => {
    setExploreCategory(category);
    setActiveTab('explore');
    setSelectedLesson(null);
    setEditingArtwork(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewAllLessons = () => {
    setExploreCategory('All');
    setActiveTab('explore');
    setSelectedLesson(null);
    setEditingArtwork(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveArtwork = (dataUrl: string, title: string) => {
    const artId = editingArtwork ? editingArtwork.id : `art_${Date.now()}`;
    const newArt: SavedArtwork = {
      id: artId,
      title,
      createdAt: Date.now(),
      dataUrl,
      lessonId: selectedLesson?.id,
      lessonTitle: selectedLesson?.title,
      category: selectedLesson?.category,
    };

    saveArtwork(newArt);
    setLastSavedArtworkId(artId);
    setArtworks(getSavedArtworks());
    setStats(getUserStats());
  };

  const handleDeleteArtwork = (id: string) => {
    deleteArtwork(id);
    setArtworks(getSavedArtworks());
  };

  const handleRenameArtwork = (id: string, newTitle: string) => {
    renameArtwork(id, newTitle);
    setArtworks(getSavedArtworks());
  };

  const handleContinueEditing = (art: SavedArtwork) => {
    setEditingArtwork(art);
    setSelectedLesson(null);
    setActiveTab('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteLesson = () => {
    if (selectedLesson) {
      recordLessonCompleted(selectedLesson.id);
      setStats(getUserStats());
      setCelebrationLesson(selectedLesson);
    }
  };

  const handleCloseCelebration = (rewardData?: {
    reward: string;
    chooser: string;
    comment: string;
  }) => {
    if (rewardData && celebrationLesson) {
      // Find the most recent artwork for this lesson or create a completion record with the reward
      const currentArts = getSavedArtworks();
      let targetArt = lastSavedArtworkId ? currentArts.find((a) => a.id === lastSavedArtworkId) : null;
      if (!targetArt && currentArts.length > 0) {
        targetArt = currentArts[0];
      }

      if (targetArt) {
        const updatedArt: SavedArtwork = {
          ...targetArt,
          reward: rewardData.reward,
          rewardChooser: rewardData.chooser,
          comment: rewardData.comment,
        };
        saveArtwork(updatedArt);
        setArtworks(getSavedArtworks());
      } else {
        // If user didn't hit "Save Art" manually yet, auto-save the completed artwork with thumbnail
        const autoSaved: SavedArtwork = {
          id: `art_${Date.now()}`,
          title: `${celebrationLesson.title} Drawing`,
          createdAt: Date.now(),
          dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300" style="background:#ffffff">${celebrationLesson.thumbnailSvg}</svg>`
          )}`,
          lessonId: celebrationLesson.id,
          lessonTitle: celebrationLesson.title,
          category: celebrationLesson.category,
          reward: rewardData.reward,
          rewardChooser: rewardData.chooser,
          comment: rewardData.comment,
        };
        saveArtwork(autoSaved);
        setArtworks(getSavedArtworks());
      }
    }
    setCelebrationLesson(null);
  };

  const handlePracticeRecorded = () => {
    recordPracticeSession();
    setStats(getUserStats());
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setSelectedLesson(null);
    setEditingArtwork(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] text-slate-800 flex flex-col antialiased selection:bg-sky-200">
      {/* Top Application Header */}
      <Header stats={stats} onOpenStats={() => setShowStats(true)} />

      {/* Main View Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto">
        {selectedLesson ? (
          <LessonView
            lesson={selectedLesson}
            onBack={() => setSelectedLesson(null)}
            onSaveArtwork={handleSaveArtwork}
            onCompleteLesson={handleCompleteLesson}
          />
        ) : editingArtwork ? (
          <div className="pt-2 px-4 pb-24 max-w-xl mx-auto">
            <DrawingCanvas
              initialTitle={editingArtwork.title}
              initialImageData={editingArtwork.dataUrl}
              onSave={handleSaveArtwork}
              onBack={() => setEditingArtwork(null)}
            />
          </div>
        ) : (
          <>
            {activeTab === 'home' && (
              <HomeView
                lessons={LESSONS}
                stats={stats}
                onSelectLesson={handleSelectLesson}
                onQuickPractice={() => setActiveTab('practice')}
                onSelectCategory={handleSelectCategory}
                onViewAllLessons={handleViewAllLessons}
              />
            )}

            {activeTab === 'explore' && (
              <ExploreView
                lessons={LESSONS}
                completedLessonIds={stats.lessonsCompleted}
                onSelectLesson={handleSelectLesson}
                initialCategory={exploreCategory}
              />
            )}

            {activeTab === 'practice' && (
              <PracticeView
                onSaveArtwork={handleSaveArtwork}
                onPracticeRecorded={handlePracticeRecorded}
              />
            )}

            {activeTab === 'myart' && (
              <MyArtView
                artworks={artworks}
                onDeleteArtwork={handleDeleteArtwork}
                onRenameArtwork={handleRenameArtwork}
                onContinueEditing={handleContinueEditing}
                onStartDrawing={() => setActiveTab('practice')}
              />
            )}
          </>
        )}
      </main>

      {/* Fixed Ergonomic Bottom Tab Bar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* First-Launch Welcome Modal */}
      {showWelcome && (
        <WelcomeModal onStartDrawing={handleStartDrawingFromWelcome} />
      )}

      {/* Stats and Milestones Modal */}
      {showStats && (
        <StatsModal stats={stats} onClose={() => setShowStats(false)} />
      )}

      {/* Lesson Completed Celebration Modal with Voice, Reward Picker, and Auto-Suggestion Comments */}
      {celebrationLesson && (
        <CelebrationModal
          lesson={celebrationLesson}
          onClose={handleCloseCelebration}
          onExploreMore={() => {
            setCelebrationLesson(null);
            setSelectedLesson(null);
            setActiveTab('explore');
          }}
        />
      )}
    </div>
  );
}
