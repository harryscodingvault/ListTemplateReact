import SingleTask from "./SingleTask"

const ListTask = ({tasks, onDeleleItem, onEditItem}) => {
    return (
        <div>
           { tasks.map((task) => {
               const {id, title} = task
                return (
                    <div key={id}>
                        <SingleTask>{title}</SingleTask>
                        <div>
                            <button className="positive ui button" onClick={()=>onEditItem(id)}>Edit</button>
                            <button className="negative ui button" onClick={()=>onDeleleItem(id)}>Delete</button>
                        </div>
                    </div> 
               )
            })}
        </div>
    )
}

export default ListTask