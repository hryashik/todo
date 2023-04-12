import { useCallback, useEffect, useState } from 'react';
import TasksList from './components/TasksLists/TasksLists';
import MyInput from './ui/MyInputs/MyInput';
import getAllTasks from './api/getAllTasks';
import TaskEntity from './entities/Task/Task.entity';

function TaskModule() {
  const [tasks, setTasks] = useState<TaskEntity[] | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  // Получаем таски
  useEffect(() => {
    getAllTasks()
      .then(data => setTasks(data))
      .catch(error => setError(error));
  }, []);

  // Измененяем стейт
  function completeTask(id: number) {
    if (tasks) {
      setTasks(
        [...tasks].map(el =>
          el.id === id ? { ...el, active: !el.active } : el
        )
      );
    }
  }
  function createTask(userInput: string) {
    if (tasks && userInput) {
      const newTask = new TaskEntity(userInput);
      setTasks([...tasks, newTask]);
    }
  }
  function deleteTask(id: number) {
    if (tasks) setTasks(tasks.filter(el => el.id !== id));
  }

  // Мемоизирую все функции
  // (в данном случае мемоизировать complete и delete бесполезно, так как меняется стейт в самом тасклисте)
  // Но create спасает от лишних перерисовок инпута
  const memoCreateTask = useCallback(
    (text: string) => createTask(text),
    [tasks]
  );
  const memoCompleteTask = useCallback(
    (id: number) => completeTask(id),
    [tasks]
  );
  const memoDeleteTask = useCallback((id: number) => deleteTask(id), [tasks]);

  // Если получаем ошибку
  if (error) {
    return (
      <>
        <MyInput createTask={memoCreateTask} />
        <h1>Произошла ошибка</h1>
      </>
    );
  }

  return (
    <div>
      <MyInput createTask={memoCreateTask} />
      <TasksList
        tasks={tasks}
        completeTask={memoCompleteTask}
        deleteTask={memoDeleteTask}
      />
    </div>
  );
}

export default TaskModule;
