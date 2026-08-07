import React from "react";
import { Link } from "react-router-dom";

function DataFild({ item, handelDelete }) {
  return (
    <>
      <div className="container text-center datafild">
        <div className="row">
          <div className="col">{item.name}</div>
          <div className="col">{item.email}</div>
          <div className="col">{item.phone}</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handelDelete(item)}
            >
              DELETE
            </button>
            <button type="button" class="btn btn-info updatebutton">
              <Link className="updatebutton1" to={`/update/${item._id}`}>
                UPDATE{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataFild;
