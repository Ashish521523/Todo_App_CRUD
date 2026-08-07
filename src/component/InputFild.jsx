import React, { useEffect, useState } from "react";

function InputFild({ handelAdditem, setitem }) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const handelName = (event) => {
    setInputName(event.target.value);
  };

  const handelEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handelPhone = (event) => {
    setInputPhone(event.target.value);
  };

  const handelAdd = () => {
    handelAdditem(inputName, inputEmail, inputPhone);
  };

  const handeldata = async () => {
    let data = await fetch("http://localhost:4000/data", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
      }),
    });
    data = await data.json();
  };

  useEffect(() => {
    handelgetData();
  }, []);
  const handelgetData = async () => {
    const getData = await fetch("http://localhost:4000/data");
    const result = await getData.json();
    setitem(result);
  };
  return (
    <>
      <div className="container text-center inputfild">
        <div className="row">
          <div className="col  ">
            <input
              type="text"
              placeholder="Enten your Name"
              onChange={handelName}
            />
          </div>
          <div className="col  ">
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={handelEmail}
            />
          </div>
          <div className="col  ">
            <input
              type="number"
              placeholder="Enter your PhoneNumber"
              onChange={handelPhone}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                (handelAdd(), handeldata());
              }}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputFild;
