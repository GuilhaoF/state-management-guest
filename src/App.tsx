import { AppBar } from "./components/AppBar";
import { TodosList } from "./components/TodosList";
import { useRenderCounter } from "./hooks/useReducerCounter";


function App() {
  useRenderCounter('App');

  return (

    <>
        <AppBar />
        <TodosList />
    </>
  )
}

export default App
