import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const LinkWrapper = styled.div`
    margin-right: 8px;
  `;

  return (
    <div>
      <Links>
        <LinkWrapper>
          <Link to="/dashboard">Dashboard</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/">Home</Link>
        </LinkWrapper>
      </Links>
    </div>
  );
};

export default Navbar;
