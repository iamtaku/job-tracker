import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    margin-right: 8px;
  }
`;

const logout = (e) => {
  console.log("logged out clicked");
  window.localStorage.removeItem("jwt");
};
const Navbar = () => {
  return (
    <div>
      <Links>
        <Link to="/dashboard">Dashboard</Link>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </Links>
    </div>
  );
};

export default Navbar;
