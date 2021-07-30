import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <span
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {task.text}
                <FaTimes
                    style={{
                        color: 'red',
                        cursor: 'pointer'
                    }}
                    onClick={() => onDelete(task.id)}
                />
            </span>
            <p>{task.day}</p>
        </div>
    )
}

export default Task