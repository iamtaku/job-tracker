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
`;
const EditBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const Step = ({ id, date, status, job_id }) => {
  const { openModal } = useGlobalContext();

  return (
    <StepContainer>
      <Moment tz="Europe/London" format="MM/DD - HH:mm">
        {date}
      </Moment>
      <h3>{status}</h3>
      <EditBtn onClick={openModal} data-id="PATCH_STEP" id={id}>
        <AiFillEdit />
      </EditBtn>
    </StepContainer>
  );
};

export default Step;
