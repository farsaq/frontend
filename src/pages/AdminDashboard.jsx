import { useEffect, useState } from "react";
import { getCourses, createCourse } from "../Services/api";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleAddCourse = async () => {
    if (!title || !description) {
      setMsg("All fields required");
      return;
    }

    const res = await createCourse({ title, description });
    setMsg(res.message);
    setTitle("");
    setDescription("");
    loadCourses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Add New Course</h3>

        <input
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button onClick={handleAddCourse}>Add Course</button>
        {msg && <p>{msg}</p>}
      </div>

      <hr />

      <h3>All Courses</h3>

      {courses.map((c) => (
        <div key={c._id} style={{ marginBottom: "10px" }}>
          <b>{c.title}</b> — {c.description}
        </div>
      ))}
    </div>
  );
}
