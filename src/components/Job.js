import Step from "./Step";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { EditButton, NextButton, AcceptRejectButton } from "./Buttons";

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

const StepGrid = styled.div`
  display: flex;
`;

const Job = ({ company, position, status, steps, id }) => {
  const { openModal, handleJob } = useGlobalContext();
  return (
    <JobWrapper>
      <JobCard>
        <h2>{company}</h2>
        <RightSide>
          <p>{status}</p>
          <h3>{position}</h3>
        </RightSide>
        <EditButton id={id} onClick={openModal} dataid="PATCH_JOB" />
      </JobCard>
      <StepGrid>
        {steps
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((step) => (
            <Step key={step.id} {...step} />
          ))}
      </StepGrid>
      <NextButton id={id} onClick={openModal}>
        Next Step
      </NextButton>
      <div className="right">
        <AcceptRejectButton onClick={handleJob} id={id} datajob="accept">
          accepted
        </AcceptRejectButton>
        <AcceptRejectButton onClick={handleJob} id={id} datajob="reject">
          rejected
        </AcceptRejectButton>
      </div>
    </JobWrapper>
  );
};

export default Job;
