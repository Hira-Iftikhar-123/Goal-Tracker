import {useState} from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";
import Quote from "./Quote";
import "../src/App.css";

const App = () => {
  const [goals,setGoals] = useState([]);

  const addGoal = (text) => {
    if(text.trim() === "") 
    {
      return;
    }
    setGoals([{id: Date.now(), text, completed: false},...goals]);
  };

  const GoalComplete = (id) => {
    setGoals(goals.map(goal => goal.id === id ? {...goal, completed: !goal.completed}:goal));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  }
  
  return (
    <div className="app">
      <h1>Daily Goals Tracker</h1>
      <Quote/>
      <GoalInput onAddGoal = {addGoal}/>
      <GoalList goals = {goals} onComplete={GoalComplete} onDelete={deleteGoal}/>
    </div>
  );
}

export default App;
