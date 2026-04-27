import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar programação',
    description: 'Estudar programação para se tornar um desenvolvedor full stack.',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Estudar inglês',
    description: 'Estudar inglês para melhorar minhas habilidades de comunicação.',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Estudar matemática',
    description: 'Estudar matemática para melhorar minhas habilidades de resolução de problemas.',
    isCompleted: false,
  },
]);


  return (
   <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    <div className="w-[500px]">
      <h1 className="text-3xl font-bold text-center  text-white mb-6">
      Gerenciador de Tarefas
      </h1>
      <AddTask />
      <Tasks tasks={tasks} />
      </div> 
   </div>
  );
}

export default App;