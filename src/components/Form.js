import { useForm } from "react-hook-form";
import axios from "axios";
import { useGlobalContext } from "../context";

const Form = () => {
  const { data, setData } = useGlobalContext();
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="company">add a company</label>
      <input
        name="company"
        ref={register({ required: true })}
        placeholder="Google..."
      />
      <label htmlFor="position">add a position</label>
      <input
        name="position"
        ref={register({ required: true })}
        placeholder="Full Stack..."
      />
      <label htmlFor="application_link">add an application link</label>
      <input name="application_link" ref={register} placeholder="Google..." />
      <button type="submit"> Submit</button>
    </form>
  );
};

export default Form;
