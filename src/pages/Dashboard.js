import Form from ".././components/Form";
import Jobs from ".././components/Jobs";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { isModalOpen, openModal } = useGlobalContext();
  return (
    <div>
      <h2>this is the dashboard page</h2>
      <button onClick={openModal}>Create Job</button>
      {/* <Form /> */}
      {isModalOpen && <Form />}
      <Jobs />
    </div>
  );
};

export default Dashboard;
