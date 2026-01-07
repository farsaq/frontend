const API = "https://farasaqib.onrender.com/api";

/* AUTH */

// LOGIN
export const loginUser = async (email, password) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

// REGISTER
export async function registerUser(name, email, password) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}

/* COURSES */

// GET ALL COURSES
export async function getCourses() {
  const res = await fetch(`${API}/courses`);
  return res.json();
}

// ENROLL COURSE
export async function enrollCourse(courseId) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/courses/${courseId}/enroll`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

// CREATE COURSE
export async function createCourse(courseData) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(courseData),
  });
  return res.json();
}
