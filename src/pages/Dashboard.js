import Form from ".././components/Form";
import Jobs from ".././components/Jobs";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { device } from "../device";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const DashboardWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
  }
`;

const Btn = styled.button`
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #e1eeff, #bdc8d7);
  box-shadow: 18px 18px 36px #b3bdcb, -18px -18px 36px #f2ffff;
  width: 100%;
  padding: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #426696;
`;

const DashboardTop = styled.div`
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    button {
      width: 200px;
    }
  }
`;
const Dashboard = () => {
  const { isModalOpen, openModal, loggedIn } = useGlobalContext();

  if (!loggedIn) {
    return (
      <div className="wrapper">
        <h1>You are not logged in. Please login!</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  return (
    <DashboardWrapper>
      <DashboardTop>
        <h2>this is the dashboard page</h2>
        {/* <h3>this is the current token: {token}</h3> */}
        <Btn onClick={openModal} data-id="CREATE_JOB">
          Create Job
        </Btn>
      </DashboardTop>
      {isModalOpen && <Form />}
      <Jobs />
    </DashboardWrapper>
  );
};

export default Dashboard;
