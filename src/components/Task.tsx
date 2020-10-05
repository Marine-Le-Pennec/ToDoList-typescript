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
}

const Task: React.FC<Props> = ({task,handleClickTrash}) => {
  
  
  
  return (
    <section >
      {
        task.map((elem:any, index:number) => {
        
          console.log("elem=",elem.title);
          return (
            <div key={index}>
             <span key={index}>{elem.title}</span>
             <FontAwesomeIcon
              onClick={() => handleClickTrash(index)}
                className="trash"
                icon="trash"
                size="2x"
              />
            </div>
          )
        })}
    </section>
  )
}

export default Task;
