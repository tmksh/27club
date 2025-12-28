import React, { useState, useEffect } from 'react';
import { castsAPI, storageAPI } from '../../../lib/supabase';
import { CastForm } from './CastForm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const CastsManager = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCast, setEditingCast] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCasts();
  }, []);

  const loadCasts = async () => {
    try {
      setLoading(true);
      const data = await castsAPI.getAll();
      setCasts(data.sort((a, b) => a.display_order - b.display_order));
    } catch (err) {
      setError('キャストの読み込みに失敗しました: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingCast(null);
    setShowForm(true);
  };

  const handleEdit = (cast) => {
    setEditingCast(cast);
    setShowForm(true);
  };

  const handleDelete = async (castId) => {
    if (!window.confirm('このキャストを削除してもよろしいですか?')) {
      return;
    }

    try {
      await castsAPI.delete(castId);
      await loadCasts();
    } catch (err) {
      setError('削除に失敗しました: ' + err.message);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingCast(null);
    loadCasts();
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(casts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // 表示順を更新
    const updates = items.map((item, index) => ({
      id: item.id,
      display_order: index,
    }));

    setCasts(items);

    try {
      await castsAPI.updateOrder(updates);
    } catch (err) {
      setError('順序の更新に失敗しました: ' + err.message);
      await loadCasts();
    }
  };

  if (loading) {
    return <div className="text-white text-center py-10">読み込み中...</div>;
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">キャスト一覧</h2>
        <button
          onClick={handleCreate}
          className="bg-[#00d6bd] hover:bg-[#00b89f] text-white px-6 py-2 rounded transition"
        >
          ＋ 新規キャスト追加
        </button>
      </div>

      {showForm && (
        <CastForm
          cast={editingCast}
          onClose={handleFormClose}
        />
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="casts">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {casts.map((cast, index) => (
                <Draggable key={cast.id} draggableId={cast.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-[#1a2a2880] backdrop-blur-sm rounded-lg border border-[#00d6bd20] p-4 hover:border-[#00d6bd40] transition"
                    >
                      {cast.profile_image_url && (
                        <img
                          src={cast.profile_image_url}
                          alt={cast.name}
                          className="w-full h-48 object-cover object-top rounded mb-4"
                        />
                      )}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {cast.name}
                        {cast.name_en && (
                          <span className="ml-2 text-sm text-[#00d6bd]">
                            ({cast.name_en})
                          </span>
                        )}
                      </h3>
                      <div className="text-white/70 text-sm space-y-1 mb-4">
                        {cast.description && <p className="line-clamp-2">{cast.description}</p>}
                        {cast.features && <p>特徴: {cast.features}</p>}
                        {cast.favorite_drink && <p>好きなお酒: {cast.favorite_drink}</p>}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(cast)}
                          className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded transition text-sm"
                        >
                          編集
                        </button>
                        <button
                          onClick={() => handleDelete(cast.id)}
                          className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded transition text-sm"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {casts.length === 0 && (
        <div className="text-white/50 text-center py-10">
          キャストがいません。新規作成してください。
        </div>
      )}
    </div>
  );
};

