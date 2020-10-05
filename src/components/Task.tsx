import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ITask {
  task:object;
  setTask:React.Dispatch<React.SetStateAction<object>>
}
interface Props {
  task:ITask[];
  setTask?:ITask;
  handleClickTrash:any;
  handleCheck:any
}

const Task: React.FC<Props> = ({task,handleClickTrash,handleCheck}) => {
  
  
  
  return (
    <section >
      {
        task.map((elem:any, index:number) => {
        
         
          return (
            <div key={index} className="task-line">
             <input className="checkbox" type="checkbox" onClick={()=>handleCheck(index)}/>
           <span className={elem.done===false?"":"task-underline"} key={index}>{elem.title}</span>
             
              <button className="trash-button"><FontAwesomeIcon
                onClick={() => handleClickTrash(index)}
                  
                  icon="trash"
                  size="lg"
                  color="#ef680e"
                  
                /></button>
               
              
            
            </div>
          )
        })}
    </section>
  )
}

export default Task;
