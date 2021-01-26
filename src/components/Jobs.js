import Job from "./Job";
import { useGlobalContext } from "../context";

const Jobs = () => {
  const { data } = useGlobalContext();

  return (
    <div>
      {data.map((item) => {
        return <Job key={item.id} {...item.attributes} id={item.id} />;
      })}
    </div>
  );
};

export default Jobs;
