export function TaskList() {
    const tasks = [
        { title: 'ללמוד React', done: true },
        { title: 'לסיים שיעורי בית', done: false },
        { title: 'ללכת למכולת', done: true },
        { title: 'להכין מצגת', done: false },
    ];
    
    return (
        <div>
            <h2>משימות</h2>
            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>
                        {task.done ? '✅' : '❌'} {task.title}
                    </li>
                })}
            </ul>
        </div>
    )

}