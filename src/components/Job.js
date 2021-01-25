import Step from "./Step";
import styled from "styled-components";

const JobWrapper = styled.div`
  display: flex;
`;

const Job = ({ company, position, status, steps }) => {
  return (
    <>
      <JobWrapper>
        <h1>{company}</h1>
        <h2>{position}</h2>
        <h3>{status}</h3>
        {/* {steps.map((step) => (
          <Step key={step.id} {...step} />
        ))} */}
      </JobWrapper>
    </>
  );
};

export default Job;
