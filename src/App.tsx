import React, {useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Header from "./components/Header";
import Task from "./components/Task";

// Icones

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faTrash);

const App: React.FC = () => {

  // States Interfaces
  interface Iinput {
    input: string;
  }

  interface ITask {
    title: string;
    done: boolean; 
  }



  // States

  // State permettant de stocker texte input
  const [input, setInput] = useState("");

  // State permettant de stocker les tâches
  const [task, setTask] = useState<any>([]);

  // Fonction de submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) {
      alert("Veuillez entrer une nouvelle tâche");
    } else {
      let newTask: Array<ITask> = [...task];
      let taskObj = {} as ITask;
      taskObj.title = input;
      taskObj.done = false;
      newTask.push(taskObj);
      setTask(newTask);
    }
  };

   // fonction appelée lorsque l'on clique sur la poubelle
   const handleClickTrash = (index:number):any => {
    // il faut supprimer l'élément cliqué du tableau "tasks"
    let tasksCopy : Array<ITask>=[...task];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTask(tasksCopy);
  };

  // fonction appelé lorsque l'on clique sur la checkbox
  const handleCheck = (index:number):any=>{
    let tasksCopy : Array<ITask>=[...task];
    tasksCopy[index].done=!tasksCopy[index].done
    setTask(tasksCopy);
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main-container">
        <div   className="task-container">
          <h2>TO DO</h2>
          <div className="task-section">
            
          <Task task={task} handleClickTrash={handleClickTrash} handleCheck={handleCheck}/>
          
          </div>
        </div>
        <form className="input-container" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="input-task"
            placeholder="Ajouter une nouvelle tâche..."
            className="input"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
          <button type="submit">
            <FontAwesomeIcon
              icon={"plus"}
              size={"3x"}
              color={"#2D7B8D"}
              className="plus"
            />
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
