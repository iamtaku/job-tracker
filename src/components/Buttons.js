import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";

const EditBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const NewStepBtn = styled.button`
  width: 100px;
  background: none;
  color: white;
  text-transform: uppercase;
  border: 1px solid grey;
  // margin-top: 20px;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 5px;
  display: block;
  appearance: none;
  // border-radius: 1rem;
  // width: 100%;
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
    <NewStepBtn id={props.id} onClick={props.onClick}>
      {props.children}
    </NewStepBtn>
  );
};

export const AcceptRejectButton = (props) => {
  return (
    <button onClick={props.onClick} id={props.id} data-job={props.datajob}>
      {props.children}
    </button>
  );
};

// export default EditButton;
