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

    <div>

      <h2>Dashboard</h2>

      <form onSubmit={createTask}>

        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Add Task
        </button>

      </form>

      <hr />

      <h3>Your Tasks</h3>

      {
        tasks.map((task) => (

          <div
            key={task._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <h4>{task.title}</h4>

            <p>{task.description}</p>

            <button
              onClick={() =>
                deleteTask(task._id)
              }
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>

  );
}

export default Dashboard;