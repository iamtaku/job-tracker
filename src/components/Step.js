import Moment from "react-moment";
import "moment-timezone";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { EditButton } from "./Buttons";
import { device } from "../device";
const StepContainer = styled.div`
  width: 88px;
  height: 40px
  margin: 0 8px;
  text-align: center;
  position: relative;
border-radius: 50px;
background: #d2deef;
box-shadow:  18px 18px 36px #b3bdcb,
             -18px -18px 36px #f2ffff;
  padding: 8px;
  margin-right: 8px;

  time {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }
  p {
    color: #426696;
  }
  @media ${device.laptop} {
    height: 64px;
    width: auto;
    padding: 10px;
    margin-right: 12px;
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
