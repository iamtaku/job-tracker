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
const Navbar = () => {
  return (
    <div>
      <Links>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
      </Links>
    </div>
  );
};

export default Navbar;
