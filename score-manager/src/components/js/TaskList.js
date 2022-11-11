import React from 'react'
import Task from './Task'

export default function TaskList() {
    const teamData = [
        { id:1, tasks: [{taskId:1,taskName:"task 1"}], score: 10 },
        { id:2, tasks: [{taskId:2,taskName:"task 2"}], score: 5 },
        { id:3, tasks: [{taskId:3,taskName:"task 3"}], score: 15 },
        { id:4, tasks: [{taskId:4,taskName:"task 4"}], score: 0 },
        { id:5, tasks: [{taskId:5,taskName:"task 5"}], score: 8 },
        { id:6, tasks: [{taskId:6,taskName:"task 6"}], score: 10 },
        { id:7, tasks: [{taskId:7,taskName:"task 7"}], score: 5 },
        { id:8, tasks: [{taskId:8,taskName:"task 8"}], score: 2 },
        { id:9, tasks: [{taskId:9,taskName:"task 9"}], score: 20 },
        { id:10, tasks: [{taskId:10,taskName:"task 10"}], score: 5 }
      ];

  return (
    <div className="">
      {teamData.map(({ id,tasks,score }) => (
        <Task key={id} tasks={tasks} score={score}></Task>
      ))}
    </div>
  );
}
