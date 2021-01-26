import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { useGlobalContext } from "../context";

const StepContainer = styled.div`
  margin: 0 8px;
  text-align: center;
  position: relative;

  time {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }

  button {
    position: absolute;
    top: 4px;
    right: 4px;
    border: none;
    background: none;
  }
`;

const Step = ({ id, date, status, job_id }) => {
  const { openModal } = useGlobalContext();

  return (
    <StepContainer>
      <Moment tz="Europe/London" format="MM/DD - HH:mm">
        {date}
      </Moment>
      <h3>{status}</h3>
      <button onClick={openModal} data-id="PATCH_STEP" id={id}>
        <AiFillEdit data-id="PATCH_STEP" id={id} />
      </button>
    </StepContainer>
  );
};

export default Step;
