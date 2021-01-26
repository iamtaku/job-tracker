const Inputs = (props) => {
  console.log(props.props);
  const { register, formDataValue, handleChange } = props.props;
  return (
    <>
      <input
        name="status"
        ref={register({ required: true })}
        placeholder="What's next?"
        value={formDataValue.status}
        onChange={handleChange}
      />
      <input type="datetime-local" ref={register} name="date" />
      <input
        name="application_link"
        ref={register}
        placeholder="Application Link"
        value={formDataValue.status}
        onChange={handleChange}
      />
    </>
  );
};

export default Inputs;
