import PropTypes from "prop-types";

const ReusableForm = ({ formTitle, handleSubmit, submitBtnTxt = "Submit", children }) => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{children}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />

        <button>{submitBtnTxt}</button>
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  formTitle: PropTypes.string,
  handleSubmit: PropTypes.func,
  submitBtnTxt: PropTypes.string,
  children: PropTypes.element,
};

export default ReusableForm;
