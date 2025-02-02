
import { useRenderCounter } from '../hooks/useReducerCounter';
import { TodosCounter } from './TodosCounter';


export function AppBar() {
  useRenderCounter('AppBar');

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-center border-b border-white/5 bg-lime-500/80 px-6 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* <img src={logo} alt="JStack" width="80" /> */}
          <TodosCounter />
        </div>
      </div>
    </header>
  );
}
