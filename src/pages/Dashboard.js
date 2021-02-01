import Form from ".././components/Form";
import Jobs from ".././components/Jobs";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { device } from "../device";

const DashboardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
  }
`;

const Btn = styled.button`
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
`;
const Dashboard = () => {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <DashboardWrapper>
      <h2>this is the dashboard page</h2>
      <Btn onClick={openModal} data-id="CREATE_JOB">
        Create Job
      </Btn>
      {isModalOpen && <Form />}
      <Jobs />
    </DashboardWrapper>
  );
};

export default Dashboard;
