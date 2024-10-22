import {
  CheckCircleIcon,
  CircleIcon,
  CircleOffIcon,
  Trash2Icon,
} from 'lucide-react';

import { useRenderCounter } from '../hooks/useReducerCounter';
import { useGuestList } from '../store/useGuestList';
import { cn } from '../utils/cn';
import { TodoForm } from './TodoForm';

export function TodosList() {
  useRenderCounter('TodosList');

  const { guest, removeGuestList, toggleGuestConfirmed } = useGuestList();

  return (
    <div className="container mx-auto my-10 rounded-lg border border-white/5 p-6">
      <TodoForm />

      <div className="my-10 h-[1px] w-full bg-white/5" />

      {guest.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/10 bg-white/5 p-10">
          <div className="flex items-end">
            <CircleOffIcon className="h-10 w-10" />
          </div>
          <span className="opacity-70">Nenhuma convidado ainda</span>
        </div>
      )}

      {guest.length > 0 && (
        <ul className="space-y-4">
          {guest.map((guestItem) => (
            <li
              key={guestItem.id}
              className={cn(
                'flex items-center justify-between rounded-lg border border-white/5 p-4',
                guestItem.done &&
                'border-green-400/10 bg-green-400/5 transition-colors',
              )}
            >
              <div
                className={cn(
                  'flex items-center gap-2 text-lg transition-colors animate-pulse text-red-500',
                  guestItem.done && 'italic text-gray-500 line-through animate-none',
                )}
              >
                {guestItem.name}
              </div>

              <div className="space-x-4">
                <button
                  onClick={() => toggleGuestConfirmed(guestItem.id)}
                  type="button"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {guestItem.done && (
                    <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  )}
                  {!guestItem.done && <CircleIcon className="h-5 w-5 " />}
                </button>

                <button type="button" onClick={() => removeGuestList(guestItem.id)}>
                  <Trash2Icon className="h-5 w-5 text-red-500 transition-colors hover:text-red-400" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
