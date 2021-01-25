import Job from "./Job";
import { useGlobalContext } from "../context";

const Jobs = () => {
  const { data } = useGlobalContext();

  // console.log(data);
  return (
    <div>
      {data.map((item) => {
        return <Job key={item.id} {...item.attributes} />;
      })}
    </div>
  );
};

export default Jobs;
