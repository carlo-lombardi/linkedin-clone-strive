import React from "react";

export default function Acomplishments() {
  return (
    <div className=" d-flex flex-column align-items-start border bg-white px-3 pt-3 my-2 round-border">
      <h4 className="m-3">Accomplishments</h4>
      <div className="d-inline-flex m-3">
        <h5 className="mx-2 text-primary">3</h5>
        <div>
          <p className="text-primary">Languages</p>
          <p>Chinese - English - Swedish</p>
        </div>
      </div>
    </div>
  );
}
