import useInputState from "../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("Name");
  const emailState = useInputState("Enter your mail");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default HookForm;
