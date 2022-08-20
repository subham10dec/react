import React, {useState} from 'react'
import "./Tasks.css"
import Collapsible from '../Collapsible/Collapsible'
import actions from "../../actions"
import { useSelector,useDispatch } from 'react-redux'
import { toDisplayDateFormat } from '../../utils'
const Tasks = () => {
    const tasks=useSelector (state => state.tasks);
    const [taskTitle,setTaskTitle]=useState("");
    const [search,setSearch]=useState("");
    const [taskDateTime,setTaskDateTime]=useState("");
    const dispatch=useDispatch();
    const filtertask=tasks.filter(task=>task.taskTitle.toLowerCase().indexOf(search.toLowerCase()) >=0)
    const [isNewTaskOpen,setIsNewTaskOpen]=useState(false);
    const onSaveClick=()=>{
        dispatch(actions.createTask({
            id:Math.floor(Math.random()*1000),
            taskTitle:taskTitle,
            taskDateTime:taskDateTime
        }))
        setIsNewTaskOpen(!isNewTaskOpen);
    }
    const onCancelClick=()=>{
        setIsNewTaskOpen(!isNewTaskOpen);
    }
    const onDeleteClick=(task)=>{
        if(window.confirm("Are u sure want to delete ?"))
        dispatch(actions.deleteTask(task.id))
    }
  return (
    <div className='outer-container'>
        <div className="container">
           <div className="app-title-container">
            <div className='app-title'>
                <h1>Tasks</h1>
            </div>
            <div className='create-button-container'>
                {isNewTaskOpen ===false ?<button className='button create-button' onClick={()=>setIsNewTaskOpen(!isNewTaskOpen)}>
                   <i className='fa fa-calendar-plus'></i>&nbsp;&nbsp; Create
                </button>:null}
                
            </div>
           
           </div>
           <Collapsible isOpen={isNewTaskOpen}>
           <div className='new-task-container'>
                <h4 className='new-task-title'>New Tasks</h4>
            </div>
            <div className='form-group'>
                <label htmlFor="task-title" className='form-label'>Title</label>
                <div className="form-input">
                <input 
                type="text" 
                placeholder='Text Title' 
                className='text-box' 
                id='text-tile' 
                value={taskTitle}
                onChange={(event)=>setTaskTitle(event.target.value)}
                /></div>
            </div>
            <div className='form-group'>
                <label htmlFor="task-date-time" className='form-label'>Title</label>
                <div className="form-input">
                <input type="datetime-local" 
                placeholder='Task Date and Time' 
                className='text-box' 
                id='task-date-time'
                value={taskDateTime}
                onChange={(event)=>setTaskDateTime(event.target.value)}
                />
                </div>
            </div>
            <div className="button-group">
                <button className='button save-button' onClick={()=>{onSaveClick()}}>
                <i className='fa fa-save'></i>&nbsp;&nbsp;  Save Tasks</button>
                <button className='button cancel-button' onClick={()=>{onCancelClick()}}>
                <i className='fa fa-window-close'></i>&nbsp;&nbsp; Cancel</button>
            </div>
            </Collapsible>
            <div className='search-box'>
                <input type="search" placeholder='search' value={search}  onChange={(e)=>setSearch(e.target.value)}/>
                <i className='fa fa-search'></i>
            </div>
            <div className="content-body">
                {filtertask.map(task=>   <div className="task" key={task.id}>
                    <div className="task-body">
                        <div className="title">
                            <i className="fa fa-thumbtack"></i>
                            <span className='task-title-text'>{task.taskTitle}</span>
                        </div>
                        <div className='task-subtitle'>
                            <i className='fa fa-clock'></i>
                            <span className='task-subtitle-text'>{toDisplayDateFormat(task.taskDateTime)}</span>
                        </div>
                    </div>
                    <div className='task-options'>
                        <button 
                        className='icon-button' 
                        title="Delete"
                         onClick={()=>onDeleteClick(task)}>&times;</button>
                    </div>
                </div>)}
             
         
            </div>
        </div>
    </div>
  )
}

export default Tasks