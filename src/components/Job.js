import Step from "./Step";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { AiFillEdit } from "react-icons/ai";

const JobWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

const JobCard = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  position: relative;
  margin-right: 8px;
  svg {
    position: absolute;
    right: 8px;
    top: 8px;
  }
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

const NewStepBtn = styled.button`
  width: 100px;
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
  // width: 100%;
`;

const StepGrid = styled.div`
  display: flex;
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
        <AiFillEdit id={id} onClick={openModal} data-id="PATCH_JOB" />
      </JobCard>

      <StepGrid>
        {steps
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((step) => (
            <Step key={step.id} {...step} />
          ))}
      </StepGrid>
      <NewStepBtn id={id} onClick={openModal}>
        Next Step
      </NewStepBtn>
    </JobWrapper>
  );
};

export default Job;
