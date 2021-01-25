import Form from ".././components/Form";
import Jobs from ".././components/Jobs";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Btn = styled.div`
  button {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    // margin-top: 20px;
    padding: 16px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 5px;
    display: block;
    appearance: none;
    border-radius: 1rem;
    width: 100%;
  }
`;
const Dashboard = () => {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <DashboardWrapper>
      <h2>this is the dashboard page</h2>
      <Btn>
        <button onClick={openModal}>Create Job</button>
      </Btn>
      {/* <Form /> */}
      {isModalOpen && <Form />}
      <Jobs />
    </DashboardWrapper>
  );
};

export default Dashboard;
