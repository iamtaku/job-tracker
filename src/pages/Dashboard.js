import Job from ".././components/Job";
import { useGlobalContext } from "../context";
const Dashboard = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <h2>this is the dashboard page</h2>
      {data.map((item) => {
        return <Job key={item.id} {...item.attributes}></Job>;
      })}
    </div>
  );
};

export default Dashboard;
