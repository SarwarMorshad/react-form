const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log("Form Submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
