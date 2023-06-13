import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  //! Hacemos destructuring de las prpiedades del estado

  const { username, email } = formData;
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <h1> SIMPLE FORM</h1>
      <hr />
      <input
        value={username}
        type="text"
        name="username"
        id="username"
        className="form-control"
        onChange={onInputChange}
      />
      <input
        value={email}
        type="email"
        name="email"
        id="email"
        className="form-control"
        onChange={onInputChange}
      />

      {username == "pedro" && <Message />}
    </>
  );
};

export default SimpleForm;
