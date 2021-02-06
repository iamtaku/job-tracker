import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setToken, setLoggedIn } = useGlobalContext();

  const history = useHistory();

  const onSubmit = (formData) => {
    console.log(formData);
    login(formData);
  };

  const login = async (formData) => {
    let url = "https://blooming-depths-62038.herokuapp.com/api/v1/authenticate";
    try {
      const response = await axios.post(url, {
        ...formData,
      });
      if (response.status === 201) {
        setJWT(response.data.token);
        setToken(response.data.token);
        setLoggedIn(true);
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setJWT = (token) => {
    console.log(token);
    window.localStorage.setItem("jwt", token);
  };
  return (
    <div className="form-container">
      <h1>this is the login page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" ref={register({ required: true })} name="username" />
        <input
          type="password"
          ref={register({ required: true })}
          name="password"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
