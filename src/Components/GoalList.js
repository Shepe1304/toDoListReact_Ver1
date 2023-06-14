import React from "react";
import "./GoalList.css";
import { useState } from "react";

const GoalList = () => {
  const [newGoal, setNewGoal] = useState();

  const handleInput = (e) => {
    setNewGoal(e.target.value);
  };

  const goalList = document.querySelector(".goal-list");

  const addGoal = () => {
    if (newGoal !== undefined) {
      const newGoalBlock = document.createElement("div");
      newGoalBlock.textContent = newGoal;
      newGoalBlock.setAttribute("class", "goal");
      newGoalBlock.addEventListener("click", deleteGoal);
      goalList.appendChild(newGoalBlock);
      const tmpToDelete = document.querySelector(".tmp");
      if (tmpToDelete !== undefined) tmpToDelete.remove();
    }
  };

  const deleteGoal = (e) => {
    e.target.remove();
    if (goalList.children.length === 0) {
      const tmp = document.createElement("div");
      tmp.setAttribute("class", "tmp");
      tmp.textContent = "No goals yet. Maybe add one?";
      goalList.appendChild(tmp);
    }
  };

  return (
    <div className="container">
      <div className="add-goal-container">
        <div>Course Goal</div>
        <input
          type="text"
          placeholder="Type in your goal"
          onChange={handleInput}
        />
        <button className="add-goal-button" onClick={addGoal}>
          Add Goal
        </button>
      </div>
      <div className="goal-list">
        <div className="tmp">No goals yet. Maybe add one?</div>
      </div>
    </div>
  );
};

export default GoalList;
