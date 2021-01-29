import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";
import { HandleFormSubmit } from "./helpers";

const url = "http://localhost:3000/api/v1/jobs";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState({ status: false, job_id: null });

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const openModal = (e) => {
    // console.log("context :", e.currentTarget.id, e.currentTarget, data);
    e.currentTarget.innerText === "NEXT STEP" &&
      setStep({ status: "CREATE_STEP", step_id: parseInt(e.currentTarget.id) });
    e.currentTarget.dataset.id === "PATCH_STEP" &&
      setStep({ status: "PATCH_STEP", step_id: parseInt(e.currentTarget.id) });
    e.currentTarget.dataset.id === "CREATE_JOB" &&
      setStep({ status: "CREATE_JOB" });
    e.currentTarget.dataset.id === "PATCH_JOB" &&
      setStep({ status: "PATCH_JOB", job_id: e.currentTarget.id });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(false);
  };

  const handleJob = (e) => {
    let formData = data.filter((item) => item.id === e.currentTarget.id)[0];

    if (e.currentTarget.dataset.job === "accept") {
      formData.attributes.status = "accepted";
    }
    if (e.currentTarget.dataset.job === "reject") {
      formData.attributes.status = "rejected";
    }

    HandleFormSubmit({
      url: `http://localhost:3000/api/v1/jobs/${formData.id}`,
      formData: formData.attributes,
      formType: "job",
      method: "patch",
      data,
      setData,
    });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider
      value={{
        setLoading,
        data,
        loading,
        setData,
        isModalOpen,
        openModal,
        closeModal,
        step,
        handleJob,
        HandleFormSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
