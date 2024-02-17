import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'

export const dynamic = 'force-dynamic'

const TasksPage = () => {
    return (
        <div>
            <TaskFormCustom />
            <TaskList />
        </div>
    )
}

export default TasksPage
