import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

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
  transition: all 500ms ease-in-out;

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
  const { data, setData, closeModal, step } = useGlobalContext();
  const { register, handleSubmit, reset } = useForm();
  const [formDataValue, setFormDataValue] = useState({
    status: "",
    date: "",
    application_link: "",
  });

  useEffect(() => {
    if (step.status === "PATCH_STEP" || step.status === "PATCH_JOB") {
      let newFormData = "";
      if (step.status === "PATCH_STEP") {
        data.forEach((item) => {
          item.attributes.steps.forEach((s) => {
            if (s.id === step.step_id || s.id === step.job_id) {
              newFormData = s;
              let { date } = newFormData;
              date = new Date(date);
              newFormData.date = date.toISOString();
            }
          });
        });
      }
      if (step.status === "PATCH_JOB") {
        newFormData = data.filter((item) => item.id === step.job_id)[0];
        newFormData = newFormData.attributes;
      }
      console.log(newFormData);
      setFormDataValue(newFormData);
    }
  }, [step, data]);

  const onSubmit = (formData) => {
    reset();
    let url = "http://localhost:3000/api/v1/jobs";
    let formType = "job";
    let method = "post";

    if (step.status === "PATCH_JOB") {
      url = `http://localhost:3000/api/v1/jobs/${step.job_id}`;
      method = "patch";
    }
    if (step.status === "CREATE_STEP") {
      url = `http://localhost:3000/api/v1/jobs/${step.step_id}/steps`;
      formType = "step";
    }

    if (step.status === "PATCH_STEP") {
      url = `http://localhost:3000/api/v1/steps/${step.step_id}/`;
      formType = "step";
      method = "patch";
    }

    handleFormSubmit({ url, formData, formType, method });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataValue({ ...formDataValue, [name]: value });
  };

  const handleFormSubmit = ({ url, formData, formType, method }) => {
    axios[method](url, {
      [formType]: { ...formData },
    })
      .then((response) => {
        let newData = [...data, response.data.data];
        if (formType === "step") {
          newData = data.map((item) => {
            if (item.id === response.data.data.relationships.job.data.id) {
              if (method === "post") {
                item.attributes.steps.push({
                  id: parseInt(response.data.data.id),
                  ...response.data.data.attributes,
                });
                return item;
              }
              if (method === "patch") {
                let itemToUpdate = item.attributes.steps.findIndex(
                  (item) => item.id === parseInt(response.data.data.id)
                );
                item.attributes.steps[itemToUpdate] = {
                  id: parseInt(response.data.data.id),
                  ...response.data.data.attributes,
                };
                return item;
              }
              return item;
            }
            return item;
          });
        }
        if (method === "patch") {
          newData = data.map((item) => {
            if (item.id === response.data.data.id) {
              return {
                ...response.data.data,
                id: response.data.data.id,
              };
            }
            return item;
          });
        }
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
          {step.status === "CREATE_STEP" || step.status === "PATCH_STEP" ? (
            <>
              <h2>
                {step.status === "CREATE_STEP" ? (
                  <span>Add the next step</span>
                ) : (
                  <span>Update the step</span>
                )}
              </h2>
              <input
                name="status"
                ref={register({ required: true })}
                placeholder="What's next?"
                value={formDataValue.status || ""}
                onChange={handleChange}
              />
              <input
                type="datetime-local"
                ref={register}
                name="date"
                value={formDataValue.date || ""}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <h2>
                {step.status === "CREATE_JOB" ? (
                  <span>Add a Company</span>
                ) : (
                  <span>Update the Company</span>
                )}
              </h2>
              <input
                name="company"
                ref={register({ required: true })}
                placeholder="Company"
                value={formDataValue.company || ""}
                onChange={handleChange}
              />
              <input
                name="position"
                ref={register({ required: true })}
                placeholder="Position"
                value={formDataValue.position || ""}
                onChange={handleChange}
              />
              <input
                name="application_link"
                ref={register}
                placeholder="Application Link"
                value={formDataValue.application_link || ""}
                onChange={handleChange}
              />
            </>
          )}
          <button type="submit">
            {step.status[0] === "C" ? "Create " : "Update "}
            {step.status.split("").pop() === "B" ? "Job" : "Step"}
          </button>
        </form>
      </FormContainer>
    </FormWrapper>
  );
};

export default Form;
