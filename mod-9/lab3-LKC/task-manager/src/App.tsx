import React, { useState } from 'react';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskList from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Design landing page',
    description: 'Create wireframes',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-06-20',
  },
  {
    id: '2',
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-06-18',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const filteredTasks = tasks.filter(task => {
    const matchStatus = !filters.status || task.status === filters.status;
    const matchPriority = !filters.priority || task.priority === filters.priority;
    return matchStatus && matchPriority;
  });

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onDelete={(id) =>
          setTasks((prev) => prev.filter((task) => task.id !== id))
        }
        onStatusChange={(id, newStatus) =>
          setTasks((prev) =>
            prev.map((task) =>
              task.id === id ? { ...task, status: newStatus } : task
            )
          )
        }
      />
    </div>
  );
}

export default App;