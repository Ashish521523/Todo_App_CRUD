import React from "react";
import DataFild from "./DataFild";

function DataContenar({ item, handelDelete }) {
  return (
    <>
      {item.map((items, index) => (
        <DataFild
          key={index}
          handelDelete={handelDelete}
          item={items}
        >
          {items}
        </DataFild>
      ))}
    </>
  );
}

export default DataContenar;
