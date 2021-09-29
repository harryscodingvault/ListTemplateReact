import { useState} from "react";

const InputForm = ({onNewTaskSubmit, editRequest, editItem}) => {
    const [name, setName] = useState('insert Task')
    const [newTask, setNewTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const newItem  = { id: new Date().getTime().toString(), title:newTask}
        if(editRequest===true){
            console.log('TRUE')
            console.log(editItem.title)
            setNewTask('lolol')
        }
        
        onNewTaskSubmit(newItem)
        setNewTask('')
       
        
       
       
    }
   

    


    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <input type="text" 
                            placeholder='insert new Task'
                            value={newTask} 
                            onChange={event=>setNewTask(event.target.value)}

                            />
                </div>
            </form>
            
        </div>
    )
}

export default InputForm