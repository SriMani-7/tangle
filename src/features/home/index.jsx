import { Link } from "react-router-dom";

export const HomePage = () => (
  <>
    <h3>Welcome to Tangle</h3>
    <p>A new solution to learn from youtube videos</p>
    <Link to="/editor">Open editor</Link>
  </>
);
