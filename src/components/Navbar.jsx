export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <div style={styles.nav}>
      <h2 style={{ margin: 0 }}>LMS</h2>

      {isLoggedIn ? (
        <button onClick={onLogout} style={styles.btn}>
          Logout
        </button>
      ) : (
        <span style={{ fontSize: "14px" }}>Guest</span>
      )}
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#1e40af",
    color: "white",
  },
  btn: {
    padding: "8px 16px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
