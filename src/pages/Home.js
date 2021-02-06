import { Link } from "react-router-dom";

const Home = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submited");
  // };

  return (
    <div>
      <h1>this is the home component</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
