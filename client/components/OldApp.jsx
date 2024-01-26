import React, { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/gamescore")
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <main>
      {tasks.map((task) => (
        <span className="gamescore" key={task.id}>
          {task.description}
        </span>
      ))}
    </main>
  );
};
