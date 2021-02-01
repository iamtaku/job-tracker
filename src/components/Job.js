import Step from "./Step";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { EditButton, NextButton, AcceptRejectButton } from "./Buttons";
import { device } from "../device";
import { GoCheck, GoX } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
const JobWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  background: #d2deef;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 50px;
    box-shadow: 35px 35px 70px #b3bdcb, -35px -35px 70px #f2ffff;
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
  display: flex;
  overflow-x: auto;
  height: 150px;
  border-radius: 50px;
  background: #d2deef;
  box-shadow: inset 5px 5px 10px #b3bdcb, inset -5px -5px 10px #f2ffff;
  padding: 8px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptop} {
    grid-template-columns: 2fr 1fr;
    overflow-x: visible;
    height: 88px;
  }
`;

const AcceptRejectButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
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
            <AiOutlinePlus />
          </NextButton>
        </StepLeft>
        <AcceptRejectButtonsContainer>
          <AcceptRejectButton onClick={handleJob} id={id} datajob="accept">
            <GoCheck />
          </AcceptRejectButton>
          <AcceptRejectButton onClick={handleJob} id={id} datajob="reject">
            <GoX />
          </AcceptRejectButton>
        </AcceptRejectButtonsContainer>
      </StepContainer>
    </JobWrapper>
  );
};

export default Job;
