import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { EditButton } from "./Buttons";
const StepContainer = styled.div`
  margin: 0 8px;
  text-align: center;
  position: relative;

  time {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }
  p {
    color: #426696;
  }
`;

const Step = ({ id, date, status, job_id }) => {
  const { openModal } = useGlobalContext();

  return (
    <StepContainer>
      <Moment tz="Europe/London" format="MM/DD - HH:mm">
        {date}
      </Moment>
      <p>{status}</p>
      <EditButton onClick={openModal} dataid="PATCH_STEP" id={id} />
    </StepContainer>
  );
};

export default Step;
