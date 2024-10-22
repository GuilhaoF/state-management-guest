import { useRef } from 'react';

import { useRenderCounter } from '../hooks/useReducerCounter';
import { useGuestList } from '../store/useGuestList';



export function TodoForm() {
  useRenderCounter('TodoForm');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addGuest } = useGuestList();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputRef.current?.value) {
      addGuest(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="h-12 w-full rounded-lg border-2 border-white/2 bg-white/5 px-4 outline-none transition-all focus:ring-1 focus:ring-white"
        placeholder="Nome do convidado"
        ref={inputRef}
      />

      <button
        type="submit"
        className="rounded-lg bg-white px-6 font-semibold border-2 border-green-600 text-zinc-950 transition-opacity hover:opacity-90"
      >
        Adicionar
      </button>
    </form>
  );
}
