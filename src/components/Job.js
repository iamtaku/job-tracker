import Step from "./Step";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { EditButton, NextButton, AcceptRejectButton } from "./Buttons";
import { device } from "../device";

const JobWrapper = styled.div`
  display: grid;
  width: 100%;
  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr;
  }
`;

const JobCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  position: relative;
  margin-right: 8px;
`;

const JobCardRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  p {
    font-style: italic;
  }
`;

const StepContainer = styled.div`
  display: grid;
  overflow-x: auto;
  height: 150px;

  ::-webkit-scrollbar {
    display: none;
  }

  // * {
  //   width: 100px;
  // }

  @media ${device.laptop} {
    grid-template-columns: 2fr 1fr;
    overflow-x: visible;
    height: 88px;
  }
`;

const AcceptRejectButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StepLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Job = ({ company, position, status, steps, id }) => {
  const { openModal, handleJob } = useGlobalContext();
  return (
    <JobWrapper>
      <JobCard>
        <h2>{company}</h2>
        <JobCardRightSide>
          <p>{status}</p>
          <h3>{position}</h3>
        </JobCardRightSide>
        <EditButton id={id} onClick={openModal} dataid="PATCH_JOB" />
      </JobCard>
      <StepContainer>
        <StepLeft>
          {steps.map((step) => (
            <Step key={step.id} {...step} />
          ))}
          <NextButton id={id} onClick={openModal}>
            Next Step
          </NextButton>
        </StepLeft>
        <AcceptRejectButtonsContainer>
          <AcceptRejectButton onClick={handleJob} id={id} datajob="accept">
            accepted
          </AcceptRejectButton>
          <AcceptRejectButton onClick={handleJob} id={id} datajob="reject">
            rejected
          </AcceptRejectButton>
        </AcceptRejectButtonsContainer>
      </StepContainer>
    </JobWrapper>
  );
};

export default Job;
