import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import type { TaskListProps } from '../../types';

const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;