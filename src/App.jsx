import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputFild from "./component/InputFild";
import { useState } from "react";
import DataContenar from "./component/DataContenar";
import Header from "./component/Header";
import Update from "./component/Update";
import { Outlet } from "react-router-dom";

function App() {
  let [item, setitem] = useState([]);

  const handelAdditem = (itemName, itemEmail, itemPhone) => {
    const NewAdditem = [
      ...item,
      { name: itemName, email: itemEmail, phone: itemPhone },
    ];
    setitem(NewAdditem);
  };

  const handelDelete = async (remove) => {
    await fetch(`http://localhost:4000/data/${remove._id}`, {
      method: "DELETE",
    });

    const Newitem = item.filter((removeitem) => removeitem._id !== remove._id);
    setitem(Newitem);
  };

  return (
    <>
      <Header></Header>
      <InputFild setitem={setitem} handelAdditem={handelAdditem}></InputFild>
      <DataContenar handelDelete={handelDelete} item={item}></DataContenar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
