import { useState } from "react";

import InputForm from "./components/InputForm";
import ListTask from "./components/ListTask";
import SingleTask from "./components/SingleTask";

const App = () => {
  const [currentList, setCurrentList] = useState([])
  const [editRequest, setEditRequest] = useState(false)
  const [editItem, setEditItem] = useState(null)


  console.log(currentList)
  const onNewTaskSubmit = (task) =>{
    if(task.title===''){
      return
    }
    if(task.title in currentList){
      return 
    }
    
    console.log(task)
    setCurrentList([...currentList, task])
  }

  const onDeleleItem = (id) => {
    setCurrentList(currentList.filter((item)=>item.id !== id))
  }

  const onEditItem = (id) => {
    const itemToEdit = currentList.find((item)=>item.id===id)
    setEditRequest(true)
    if(setEditRequest){
      return setEditItem(itemToEdit)
    }
  }


  return (
    <div className="App">
        <InputForm onNewTaskSubmit={onNewTaskSubmit} editItem={editItem} editRequest={editRequest}/>
        {currentList.length > 0 && (
          <button className="ui negative basic button" onClick={() => setCurrentList([])}>Clear List</button>
        )}
        
        <ListTask tasks={currentList} onDeleleItem={onDeleleItem}  onEditItem={onEditItem}/>
    </div>
  );
}

export default App;
