import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Download,
  Calendar,
  ArrowRight,
  PenTool,
  X,
  Edit2,
  Check,
  MessageSquare,
  Gift,
} from 'lucide-react';
import { SavedArtwork } from '../types';

interface MyArtViewProps {
  artworks: SavedArtwork[];
  onDeleteArtwork: (id: string) => void;
  onRenameArtwork: (id: string, newTitle: string) => void;
  onContinueEditing: (artwork: SavedArtwork) => void;
  onStartDrawing: () => void;
}

const REWARD_ICONS: Record<string, string> = {
  Toffee: '🍬',
  Trophy: '🏆',
  Star: '⭐',
  Cookie: '🍪',
};

export const MyArtView: React.FC<MyArtViewProps> = ({
  artworks,
  onDeleteArtwork,
  onRenameArtwork,
  onContinueEditing,
  onStartDrawing,
}) => {
  const [selectedArtwork, setSelectedArtwork] = useState<SavedArtwork | null>(null);
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [editTitleValue, setEditTitleValue] = useState<string>('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const handleOpenDetail = (art: SavedArtwork) => {
    setSelectedArtwork(art);
    setEditTitleValue(art.title);
    setIsEditingTitle(false);
  };

  const handleSaveRename = () => {
    if (!selectedArtwork || !editTitleValue.trim()) return;
    onRenameArtwork(selectedArtwork.id, editTitleValue.trim());
    setSelectedArtwork({ ...selectedArtwork, title: editTitleValue.trim() });
    setIsEditingTitle(false);
  };

  const handleDownload = (art: SavedArtwork) => {
    const link = document.createElement('a');
    link.download = `${art.title.toLowerCase().replace(/\s+/g, '-')}.png`;
    link.href = art.dataUrl;
    link.click();
  };

  const handleDelete = (id: string) => {
    onDeleteArtwork(id);
    if (selectedArtwork?.id === id) {
      setSelectedArtwork(null);
    }
    setDeleteConfirmId(null);
  };

  return (
    <div className="pb-24 max-w-xl mx-auto px-4 pt-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">My Sketchbook</h2>
          <p className="text-xs text-slate-600">
            {artworks.length} {artworks.length === 1 ? 'drawing' : 'drawings'} saved
          </p>
        </div>

        <button
          onClick={onStartDrawing}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs shadow-xs shadow-sky-200 transition-all cursor-pointer min-h-[44px]"
        >
          <PenTool className="w-3.5 h-3.5" />
          <span>New Art</span>
        </button>
      </div>

      {/* Artworks Grid */}
      {artworks.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {artworks.map((art) => (
            <div
              key={art.id}
              onClick={() => handleOpenDetail(art)}
              className="group bg-white rounded-2xl p-2.5 border border-sky-100 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-square rounded-xl bg-slate-50 border border-slate-100 overflow-hidden mb-2 relative flex items-center justify-center">
                  <img
                    src={art.dataUrl}
                    alt={art.title}
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  {art.reward && (
                    <div className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs border border-sky-100 shadow-2xs flex items-center justify-center text-sm" title={`Award: ${art.reward}`}>
                      {REWARD_ICONS[art.reward] || '🏆'}
                    </div>
                  )}
                </div>
                <h3 className="text-xs font-bold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                  {art.title}
                </h3>
                {art.comment && (
                  <p className="text-[10px] text-slate-500 line-clamp-1 italic mt-0.5">
                    “{art.comment}”
                  </p>
                )}
              </div>

              <div className="pt-2 mt-1 border-t border-sky-50 flex items-center justify-between text-[10px] text-slate-400">
                <span>{new Date(art.createdAt).toLocaleDateString()}</span>
                {art.rewardChooser ? (
                  <span className="text-sky-600 font-medium truncate max-w-[80px]">
                    By {art.rewardChooser}
                  </span>
                ) : art.lessonTitle ? (
                  <span className="truncate max-w-[80px] text-sky-600 font-medium">
                    {art.lessonTitle}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Sketchbook State */
        <div className="bg-white rounded-3xl p-8 border border-sky-100 text-center my-6 shadow-2xs">
          <div className="w-14 h-14 rounded-2xl bg-sky-100/70 text-sky-600 flex items-center justify-center mx-auto mb-3">
            <ImageIcon className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">Your sketchbook is waiting!</h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5 leading-relaxed">
            Every drawing you complete or practice will appear right here. Complete a lesson to have Mom, Dad, or Siblings pick your reward!
          </p>
          <button
            onClick={onStartDrawing}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-200 transition-all active:scale-95 cursor-pointer min-h-[44px]"
          >
            <span>Start Your First Drawing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Artwork Detail & Management Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 border-2 border-sky-200 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => {
                setSelectedArtwork(null);
                setDeleteConfirmId(null);
              }}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Rename */}
            <div className="pr-10 mb-2">
              {isEditingTitle ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={editTitleValue}
                    onChange={(e) => setEditTitleValue(e.target.value)}
                    className="text-sm font-bold text-slate-900 border border-sky-300 rounded-lg px-2 py-1 w-full focus:outline-none focus:border-sky-500"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveRename}
                    aria-label="Save title"
                    className="p-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 truncate">
                    {selectedArtwork.title}
                  </h3>
                  <button
                    onClick={() => setIsEditingTitle(true)}
                    aria-label="Rename artwork"
                    title="Rename"
                    className="p-1 rounded-md text-slate-400 hover:text-sky-600 cursor-pointer"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                <Calendar className="w-3 h-3" />
                <span>{new Date(selectedArtwork.createdAt).toLocaleString()}</span>
              </div>
            </div>

            {/* High-Res Artwork Preview */}
            <div className="w-full aspect-square rounded-2xl bg-slate-50 border border-sky-100 p-2 mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={selectedArtwork.dataUrl}
                alt={selectedArtwork.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Reward & Comment Card if available */}
            {(selectedArtwork.reward || selectedArtwork.comment) && (
              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-3 mb-3 text-left space-y-1">
                {selectedArtwork.reward && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-950">
                    <span className="text-base">{REWARD_ICONS[selectedArtwork.reward] || '🏆'}</span>
                    <span>
                      {selectedArtwork.reward}
                      {selectedArtwork.rewardChooser && ` (Chosen by ${selectedArtwork.rewardChooser})`}
                    </span>
                  </div>
                )}
                {selectedArtwork.comment && (
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-700 italic">
                    <MessageSquare className="w-3 h-3 text-sky-500 shrink-0 mt-0.5" />
                    <span>“{selectedArtwork.comment}”</span>
                  </div>
                )}
              </div>
            )}

            {/* Delete Confirmation Warning */}
            {deleteConfirmId === selectedArtwork.id ? (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-3 mb-3 text-center">
                <p className="text-xs font-semibold text-rose-800 mb-2">
                  Delete this artwork from your sketchbook?
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setDeleteConfirmId(null)}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-white cursor-pointer min-h-[36px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(selectedArtwork.id)}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 cursor-pointer min-h-[36px]"
                  >
                    Confirm Delete
                  </button>
                </div>
              </div>
            ) : null}

            {/* Actions: Continue Drawing, Download, Delete */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onContinueEditing(selectedArtwork);
                  setSelectedArtwork(null);
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer min-h-[44px]"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Continue Drawing</span>
              </button>

              <button
                onClick={() => handleDownload(selectedArtwork)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PNG</span>
              </button>
            </div>

            {/* Delete trigger */}
            {deleteConfirmId !== selectedArtwork.id && (
              <button
                onClick={() => setDeleteConfirmId(selectedArtwork.id)}
                className="w-full mt-2 py-1.5 text-center text-xs font-medium text-rose-500 hover:text-rose-700 hover:underline cursor-pointer"
              >
                Delete Artwork
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
