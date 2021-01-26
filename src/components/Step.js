import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";

const Step = ({ id, date, status, job_id }) => {
  const StepContainer = styled.div`
    margin: 0 8px;
    text-align: center;

    time {
      color: #658ec6;
      font-weight: 500;
      opacity: 0.8;
    }
  `;
  return (
    <StepContainer>
      <Moment tz="Europe/London" format="MM/DD - HH:mm">
        {date}
      </Moment>
      <h3>{status}</h3>
    </StepContainer>
  );
};

export default Step;
