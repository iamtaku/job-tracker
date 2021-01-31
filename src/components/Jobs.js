import Job from "./Job";
import { useGlobalContext } from "../context";

const Jobs = () => {
  const { data } = useGlobalContext();

  if (data.length === 0) {
    return (
      <main>
        <h1>You don't any jobs yet... Create one!</h1>
      </main>
    );
  }
  return (
    <div>
      {data.map((item, index) => {
        return <Job key={item.id} {...item.attributes} id={item.id} />;
      })}
    </div>
  );
};

export default Jobs;
