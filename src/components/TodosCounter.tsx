import { LayoutListIcon } from 'lucide-react';


import { useRenderCounter } from '../hooks/useReducerCounter';
import { useGuestList } from '../store/useGuestList';

export function TodosCounter() {
  useRenderCounter('TodosCounter');

  const { guest  } = useGuestList();
  const totalGuests = guest.length;

  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs">
      {totalGuests === 0 && (
        <>
          <span>{totalGuests} convidados</span>
        </>
      )}

      {totalGuests > 0 && (
        <>
          <LayoutListIcon className="h-4 w-4" />
          <span>Número de convidados : {totalGuests}</span>
        </>
      )}
    </div>
  );
}
