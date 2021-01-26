import Step from "./Step";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const JobWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

const JobCard = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  p {
    font-style: italic;
  }
`;

const NewStepBtn = styled.div`
  width: 100px;
  button {
    background: none;
    color: white;
    text-transform: uppercase;
    border: 1px solid grey;
    // margin-top: 20px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 5px;
    display: block;
    appearance: none;
    // border-radius: 1rem;
    width: 100%;
  }
`;

const Job = ({ company, position, status, steps, id }) => {
  const { openModal } = useGlobalContext();
  return (
    <JobWrapper>
      <JobCard>
        <h2>{company}</h2>
        <RightSide>
          <p>{status}</p>
          <h3>{position}</h3>
        </RightSide>
      </JobCard>
      <NewStepBtn>
        <button id={id} onClick={openModal}>
          Next Step
        </button>
      </NewStepBtn>
    </JobWrapper>
  );
};

export default Job;
