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

  function onTaskClick(taskId) {
   const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
  });
  setTasks(newTasks);
  }

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter((task) => task.id !== taskId)
  setTasks(newTasks);
}

function onAddTaskSubmit (title, description) {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false,
  };
  setTasks([...tasks, newTask]);
}

  return (
   <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    <div className="w-[500px] space-y-4">
      <h1 className="text-3xl font-bold text-center  text-white mb-6">
      Gerenciador de Tarefas
      </h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks 
      tasks={tasks} 
      onTaskClick={onTaskClick} 
      onDeleteTaskClick={onDeleteTaskClick} 
      />
      </div> 
   </div>
  );
}

export default App;