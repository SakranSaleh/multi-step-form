import React from "react";

import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
  });

  const [count, setCount] = useState(1);

  const handleChaange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      fName: "",
      lName: "",
      email: "",
      pass: "",
    });
  };

  // console.log('Count', count);
  return (
    <div>
      <div
        style={{
          height: "10px",
          width: `${20 * count}vw`,
          backgroundColor: "red",
        }}
      ></div>
      <form className="step-form" onSubmit={handleSubmit}>
        {count === 1 && (
          <div>
            <label htmlFor="fName">First Name</label>
            <input
              id="fName"
              placeholder="First Name"
              type="text"
              value={form.fName}
              onChange={handleChaange}
            />
          </div>
        )}

        {count === 2 && (
          <div>
            <label htmlFor="email">Last Name</label>
            <input
              id="lName"
              placeholder="Last Name"
              type="text"
              value={form.lName}
              onChange={handleChaange}
            />
          </div>
        )}

        {count === 3 && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="email"
              type="text"
              value={form.email}
              onChange={handleChaange}
            />
          </div>
        )}

        {count === 4 && (
          <div>
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              placeholder="pass"
              type="password"
              value={form.pass}
              onChange={handleChaange}
            />
          </div>
        )}

        {count === 5 && (
          <div>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
      <div className="">
        <button
          onClick={() => setCount(count > 0 && count - 1)}
          disabled={!(count - 1)}
        >
          Privious
        </button>
        <button
          onClick={() => setCount(count + 1)}
          disabled={count >= 5 && true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
