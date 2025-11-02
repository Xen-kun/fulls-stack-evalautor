import { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null);     // error handling

  useEffect(() => {
    axios
      .get("http://localhost:5215/tasks") // make sure this matches your backend
      .then(res => {
        console.log("Fetched tasks:", res.data);
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching tasks:", err);
        setError("Failed to fetch tasks.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Tasks</h1>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(t => (
            <li key={t.id}>
              {t.title} — {t.isCompleted ? "✅ Done" : "❌ Pending"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}

export default Tasks;
