import "./update.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const params = useParams();

  useEffect(() => {
    handleUpdateData();
  }, []);

  const handleUpdateData = async () => {
    let result = await fetch(`http://localhost:4000/data/${params.id}`);
    result = await result.json();
    setInputName(result.name);
    setInputEmail(result.email);
    setInputPhone(result.phone);
  };

  const handelName = (event) => {
    setInputName(event.target.value);
  };

  const handelEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handelPhone = (event) => {
    setInputPhone(event.target.value);
  };

  const handleUpdate = async () => {
    console.log(inputName, inputEmail, inputPhone);
    alert("Update Successful");
    let result = await fetch(`http://localhost:4000/data/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
      }),
    });

    result = await result.json();
    console.log(result);
  };

  return (
    <div className="container1">
      <div className="form-box">
        <h2>Update Profile</h2>

        <div>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={inputName}
              onChange={handelName}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={inputEmail}
              onChange={handelEmail}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={inputPhone}
              onChange={handelPhone}
              placeholder="Enter phone number"
            />
          </div>

          <button className="buttonup" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
