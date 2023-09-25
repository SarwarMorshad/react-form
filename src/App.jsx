import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handleSignUpSubmit = (data) => {
    // e.preventDefault();
    console.log("Sign up data", data);
  };
  const handleProfileUpdate = (data) => {
    // e.preventDefault();
    console.log(data, "profile update");
  };

  return (
    <>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign up now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Profile Update"} handleSubmit={handleProfileUpdate} submitBtnTxt={"Update"}>
        <div>
          <h2>Profile Update</h2>
          <p>Always keep your Profile Updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
