const API = "http://localhost:5000/api";

/* =======================
   AUTH
======================= */

// LOGIN
export async function loginUser(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

// REGISTER
export async function registerUser(name, email, password) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return res.json();
}

/* =======================
   COURSES
======================= */

// GET ALL COURSES (public)
export async function getCourses() {
  const res = await fetch(`${API}/courses`);
  return res.json();
}

// ENROLL COURSE (user)
export async function enrollCourse(courseId) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/courses/${courseId}/enroll`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

// CREATE COURSE (admin)
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
