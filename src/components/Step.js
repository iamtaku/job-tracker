// import Moment from "react-moment";
// import "moment-timezone";
import moment from "moment";
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
border-radius: 35px;
background: #d2deef;
box-shadow:  18px 18px 36px #b3bdcb,
             -18px -18px 36px #f2ffff;
  padding: 8px;
  margin-right: 8px;
  opacity: 0.5;

  time {
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
  }
  p {
    color: black;
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
  console.log("from step component: ", date);
  const dateFormated = moment.parseZone(date).format("MM/DD - hh:mm");
  return (
    <StepContainer>
      {/* <Moment tz=""  format="MM/DD - HH:mm">{date}</Moment> */}
      {dateFormated}
      <p>{status}</p>
      <EditButton onClick={openModal} dataid="PATCH_STEP" id={id} />
    </StepContainer>
  );
};

export default Step;
