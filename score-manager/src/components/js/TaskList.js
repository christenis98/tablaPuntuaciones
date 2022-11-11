import React from 'react'
import Task from './Task'

export default function TaskList() {
    const teamData = [
        { id:1, task: 1, member: 10 },
        { id:2, task: 2, member: 5 },
        { id:3, task: 3, member: 15 },
        { id:4, task: 4, member: 0 },
        { id:5, task: 5, member: 8 },
        { id:6, task: 6, member: 10 },
        { id:7, task: 7, member: 5 },
        { id:8, task: 8, member: 2 },
        { id:9, task: 9, member: 20 },
        { id:10, task: 10, member: 5 },
      ];

//   return(
//     <div>
//         <ul>
//             <li>task 1</li>
//             <li>task 2</li>
//             <li>task 3</li>
//             <li>task 4</li>
//             <li>task 5</li>
//             <li>task 6</li>
//             <li>task 7</li>
//             <li>task 8</li>
//             <li>task 9</li>
//         </ul>
//     </div>
//   )

  return (
    <div className="">
      {teamData.map(({ id,task,member }) => (
        <Task key={id} team={task} score={member}></Task>
      ))}
    </div>
  );
}
