import { device } from "../device";
import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";

const BTN_SIZE = 64;

const EditBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const NewStepBtn = styled.button`
  height: ${BTN_SIZE}px;
  width: ${BTN_SIZE}px;
  background: none;
  color: white;
  padding: 10px 15px;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 5px;
  display: block;
  appearance: none;
  border-radius: 50px;
  background: #d2deef;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  border: none;
`;
const AcceptRejectBtn = styled.button`
  width: ${BTN_SIZE}px;
  appearance: none;
  background: none;
  border: none;
  font-size: 24px;
  border-radius: 50px;
  background: #d2deef;
  box-shadow: 18px 18px 36px #b3bdcb, -18px -18px 36px #f2ffff;
  margin-left: 8px;

  @media ${device.laptop} {
    height: ${BTN_SIZE}px;
  }
`;
export const EditButton = (props) => {
  return (
    <EditBtn onClick={props.onClick} data-id={props.dataid} id={props.id}>
      <AiFillEdit />
    </EditBtn>
  );
};

export const NextButton = (props) => {
  return (
    <NewStepBtn id={props.id} onClick={props.onClick} data-id={props.dataid}>
      {props.children}
    </NewStepBtn>
  );
};

export const AcceptRejectButton = (props) => {
  return (
    <AcceptRejectBtn
      onClick={props.onClick}
      id={props.id}
      data-job={props.datajob}
      style={props.datajob === "accept" ? { color: "green" } : { color: "red" }}
    >
      {props.children}
    </AcceptRejectBtn>
  );
};

// export default EditButton;
