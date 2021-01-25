import { useForm } from "react-hook-form";
import axios from "axios";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const FormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: visible;
  z-index: 10;

  background: white;
  min-height: 80vh;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  z-index: 2;
  backdrop-filter: blur(0.7rem);
`;

const FormContainer = styled.div`
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  text-align: center;
  border-radius: 2rem;
  padding: 40px;
  position: relative;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);

  h2 {
    margin-bottom: 15px;
  }
  .form {
    max-width: 800px;
    margin: 0 auto;
  }
  select,
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .label,
  section > label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }

  button[type="submit"],
  .button {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    // margin-top: 20px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 5px;
    display: block;
    appearance: none;
    border-radius: 1rem;
    width: 100%;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 1.5rem;
  }
`;

const Form = () => {
  const { data, setData, closeModal } = useGlobalContext();
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (formData) => {
    reset();
    axios
      .post("http://localhost:3000/api/v1/jobs", {
        job: { ...formData },
      })
      .then((response) => {
        const newData = [...data, response.data.data];
        setData(newData);
        register.value = "";
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <FormWrapper>
      <FormContainer>
        <button onClick={closeModal} className="close">
          <AiOutlineClose />
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add a company</h2>
          <input
            name="company"
            ref={register({ required: true })}
            placeholder="Company"
          />
          <input
            name="position"
            ref={register({ required: true })}
            placeholder="Position"
          />
          <input
            name="application_link"
            ref={register}
            placeholder="Application Link"
          />
          <button type="submit">Create</button>
        </form>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
