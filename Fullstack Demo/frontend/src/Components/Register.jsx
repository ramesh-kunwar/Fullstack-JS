import React, { useState } from "react";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ name, email, password }).unwrap();
console.log(res, 'df');
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-user mt-5">
      <a href="/" className="btn btn-primary">Home</a>
      <h1>Register User</h1>
      <form method="post" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
