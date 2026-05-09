import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {

    try {

      const res = await API.get(
        "/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  const createTask = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks",
        {
          title,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTitle("");

      setDescription("");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteTask = async (id) => {

    try {

      await API.delete(
        `/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard">

      <div className="top-bar">

        <div>

          <h1 className="logo">
            🚀 TaskFlow
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "8px"
            }}
          >
            Organize your productivity efficiently
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={() => {

            localStorage.removeItem("token");

            window.location.reload();

          }}
        >
          Logout
        </button>

      </div>

      <div className="stats">

        <div className="stat-card">

          <h2>{tasks.length}</h2>

          <p>Total Tasks</p>

        </div>

        <div className="stat-card">

          <h2>
            {
              tasks.length > 0
              ? "Active"
              : "0"
            }
          </h2>

          <p>Task Status</p>

        </div>

        <div className="stat-card">

          <h2>⚡</h2>

          <p>Stay Productive</p>

        </div>

      </div>

      <form
        className="task-form"
        onSubmit={createTask}
      >

        <input
          type="text"
          placeholder="📌 Enter task title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="📝 Enter task description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <button type="submit">
          + Add New Task
        </button>

      </form>

      <h2 className="task-heading">
        📋 Your Tasks
      </h2>

      <div className="task-list">

        {
          tasks.length === 0 ? (

            <div className="task-card">

              <h3>No Tasks Yet</h3>

              <p>
                Start by adding your first task.
              </p>

            </div>

          ) : (

            tasks.map((task) => (

              <div
                className="task-card"
                key={task._id}
              >

                <h3>
                  📌 {task.title}
                </h3>

                <p>
                  {task.description}
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete Task
                </button>

              </div>

            ))

          )
        }

      </div>

    </div>

  );

}

export default Dashboard;