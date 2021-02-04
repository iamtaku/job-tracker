import axios from "axios";
let user = [
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDFjNzlkMjUtYWI0My00Y2FhLThhNmQtMWVhMmJiZWQxNzAxIn0.pXKDUoOJyT70mUo7gXRZj7eexakRLVNGl-QPruCCipQ",
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjc5NDIwYjEtMTEzMS00ZDdlLTllN2MtMWM5OTdiZGM3ODAzIn0.fvoJtcQOpHkg4xOf6knbNl1NLgU0WmRBMJWxJ0BH4iU",
];
export const HandleFormSubmit = ({
  url,
  formData,
  formType,
  method,
  data,
  setData,
}) => {
  console.log(url, formData, formType, method);
  axios[method](
    url,
    {
      [formType]: { ...formData },
    },
    {
      headers: {
        Authorization: `Bearer ${user[1]}`,
      },
    }
  )
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
