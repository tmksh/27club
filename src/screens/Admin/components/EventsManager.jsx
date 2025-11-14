import React, { useState, useEffect } from 'react';
import { eventsAPI, storageAPI } from '../../../lib/supabase';
import { EventForm } from './EventForm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const EventsManager = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const data = await eventsAPI.getAll();
      setEvents(data.sort((a, b) => a.display_order - b.display_order));
    } catch (err) {
      setError('イベントの読み込みに失敗しました: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingEvent(null);
    setShowForm(true);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleDelete = async (eventId) => {
    if (!window.confirm('このイベントを削除してもよろしいですか?')) {
      return;
    }

    try {
      await eventsAPI.delete(eventId);
      await loadEvents();
    } catch (err) {
      setError('削除に失敗しました: ' + err.message);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingEvent(null);
    loadEvents();
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(events);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // 表示順を更新
    const updates = items.map((item, index) => ({
      id: item.id,
      display_order: index,
    }));

    setEvents(items);

    try {
      await eventsAPI.updateOrder(updates);
    } catch (err) {
      setError('順序の更新に失敗しました: ' + err.message);
      await loadEvents();
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
        <h2 className="text-2xl font-bold text-white">イベント一覧</h2>
        <button
          onClick={handleCreate}
          className="bg-[#00d6bd] hover:bg-[#00b89f] text-white px-6 py-2 rounded transition"
        >
          ＋ 新規イベント追加
        </button>
      </div>

      {showForm && (
        <EventForm
          event={editingEvent}
          onClose={handleFormClose}
        />
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="events">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {events.map((event, index) => (
                <Draggable key={event.id} draggableId={event.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-[#1a2a2880] backdrop-blur-sm rounded-lg border border-[#00d6bd20] p-6 hover:border-[#00d6bd40] transition"
                    >
                      <div className="flex gap-6">
                        {event.image_url && (
                          <img
                            src={event.image_url}
                            alt={event.title}
                            className="w-32 h-32 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {event.title}
                            {event.title_en && (
                              <span className="ml-2 text-sm text-[#00d6bd]">
                                ({event.title_en})
                              </span>
                            )}
                          </h3>
                          <div className="text-white/70 text-sm space-y-1">
                            <p>日時: {new Date(event.date_time_start).toLocaleString('ja-JP')} 〜 {new Date(event.date_time_end).toLocaleString('ja-JP')}</p>
                            {event.catchphrase && <p>キャッチフレーズ: {event.catchphrase}</p>}
                            {event.description && <p>説明: {event.description}</p>}
                            {event.price && <p>料金: ¥{event.price.toLocaleString()}{event.price_note && ` (${event.price_note})`}</p>}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => handleEdit(event)}
                            className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded transition"
                          >
                            編集
                          </button>
                          <button
                            onClick={() => handleDelete(event.id)}
                            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded transition"
                          >
                            削除
                          </button>
                        </div>
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

      {events.length === 0 && (
        <div className="text-white/50 text-center py-10">
          イベントがありません。新規作成してください。
        </div>
      )}
    </div>
  );
};

