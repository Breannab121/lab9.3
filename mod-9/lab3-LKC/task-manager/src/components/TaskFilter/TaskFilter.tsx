import React from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      status: value === 'all' ? undefined : (value as TaskStatus),
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      priority: value === 'all' ? undefined : value as 'low' | 'medium' | 'high',
    });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Status:{' '}
        <select onChange={handleStatusChange}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label style={{ marginLeft: '1rem' }}>
        Priority:{' '}
        <select onChange={handlePriorityChange}>
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </label>
    </div>
  );
};

export default TaskFilter;