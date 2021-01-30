import axios from "axios";

export const HandleFormSubmit = ({
  url,
  formData,
  formType,
  method,
  data,
  setData,
}) => {
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
    })
    .catch((error) => {
      console.log(error);
    });
};
