import type { TaskTimportProps } from "../..'types"
import type { TaskItemProps } from "../../types"

function TaskItem ( { task, onStatusChange, onDelete }: TaskItemProps) {
    return (
        <div>
            <h2>{task.title}</h2>
            <h2>{task.description}</h2>
            <p>Priority: {task.priority} Due: {task.dueDate}</p>
        </div>
    )
}