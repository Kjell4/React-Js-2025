import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "#222",
        padding: "10px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link>
      <Link to="/items" style={{ color: "white" }}>Characters</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
}
