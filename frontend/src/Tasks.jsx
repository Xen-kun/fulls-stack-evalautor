import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5215/api/tasks") //backedn url
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Tasks</h1>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} — {t.isDone ? "✅ Done" : "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
