import { useEffect, useState } from "react";
import { getCourses, enrollCourse } from "../Services/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const enroll = async (id) => {
    const res = await enrollCourse(id);
    alert(res.message);
  };

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((c) => (
        <div key={c._id}>
          <b>{c.title}</b> — {c.description}
          <button onClick={() => enroll(c._id)}>Enroll</button>
        </div>
      ))}
    </div>
  );
}
