import React from "react";

function Greeter() {
  const [msg, setMsg] = React.useState("---");
  const [userName, setUserName] = React.useState("");

  const onBtnGreetClick = () => {
    setMsg(`Hi ${userName}, Have a nice day!`);
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <h3>Greeter</h3>
      <label htmlFor="">User Name:</label>
      <input type="text" onChange={onUserNameChange} />
      <button onClick={onBtnGreetClick}>Greet</button>
      <div>{msg}</div>
    </div>
  );
}

export default Greeter;