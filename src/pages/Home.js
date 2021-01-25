import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is the home component</h1>
      <Link to="/dashboard">Link to dashboard</Link>
    </div>
  );
};

export default Home;
