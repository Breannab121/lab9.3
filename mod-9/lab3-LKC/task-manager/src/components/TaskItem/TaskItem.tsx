import React from 'react';
import type { TaskItemProps } from "../../types"

export function TaskItem ( { task, onStatusChange, onDelete }: TaskItemProps) {
        return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority} | Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => onStatusChange(task.id, 'completed')}>Mark as Completed</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );


}