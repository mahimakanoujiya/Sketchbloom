import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, Clock, X, Sparkles } from 'lucide-react';
import { Lesson, Category, Difficulty } from '../types';

interface ExploreViewProps {
  lessons: Lesson[];
  completedLessonIds: string[];
  onSelectLesson: (lesson: Lesson) => void;
  initialCategory?: Category | 'All';
}

const CATEGORIES: ('All' | Category)[] = [
  'All',
  'Animals',
  'Flowers',
  'Nature',
  'Cute',
  'Food',
  'Objects',
  'Landscapes',
];

const DIFFICULTIES: ('All' | Difficulty)[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const ExploreView: React.FC<ExploreViewProps> = ({
  lessons,
  completedLessonIds,
  onSelectLesson,
  initialCategory = 'All',
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | Category>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | Difficulty>('All');

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      if (selectedCategory !== 'All' && lesson.category !== selectedCategory) {
        return false;
      }
      if (selectedDifficulty !== 'All' && lesson.difficulty !== selectedDifficulty) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = lesson.title.toLowerCase().includes(query);
        const matchesDesc = lesson.description.toLowerCase().includes(query);
        const matchesTags = lesson.tags.some((t) => t.toLowerCase().includes(query));
        const matchesCat = lesson.category.toLowerCase().includes(query);
        return matchesTitle || matchesDesc || matchesTags || matchesCat;
      }
      return true;
    });
  }, [lessons, selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="pb-24 max-w-xl mx-auto px-4 pt-3 space-y-4">
      {/* Title */}
      <div>
        <h2 className="text-xl font-black text-slate-900 tracking-tight">Drawing Library</h2>
        <p className="text-xs text-slate-600">
          Explore step-by-step tutorials from quick sketches to full illustrations.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by drawing, animal, flower..."
          className="w-full bg-white border border-sky-100 rounded-2xl py-2.5 pl-10 pr-10 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200/50 shadow-2xs transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Filter Horizontal Tabs */}
      <div>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[36px] ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-2xs shadow-sky-200'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-sky-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Filter Segmented Control */}
      <div className="flex items-center gap-1 p-1 bg-white border border-sky-100 rounded-2xl">
        {DIFFICULTIES.map((diff) => {
          const isSelected = selectedDifficulty === diff;
          return (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer min-h-[36px] ${
                isSelected
                  ? 'bg-sky-100 text-sky-700 shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {diff}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>{filteredLessons.length} drawing {filteredLessons.length === 1 ? 'lesson' : 'lessons'} available</span>
        {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSearchQuery('');
            }}
            className="text-sky-600 font-semibold hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Lessons Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {filteredLessons.map((lesson) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="group bg-white rounded-2xl p-3 border border-sky-100 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-square rounded-xl bg-[#F0F7FF] border border-sky-100/80 p-2 mb-2.5 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: lesson.thumbnailSvg }}
                    />
                    {isCompleted && (
                      <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-emerald-500 text-white shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {lesson.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                    {lesson.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-50 mt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center gap-1">
                    <span>{lesson.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lesson.steps.length} steps</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.estimatedTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-8 border border-sky-100 text-center my-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 mb-1">No drawings found</h4>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mb-4">
            Try adjusting your search keywords or switching category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
