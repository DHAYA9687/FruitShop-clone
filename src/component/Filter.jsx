import React, { useState } from "react";

function Filter() {
  const [selection, setSelection] = useState(1);
  return (
    <section className="my-10  py-3 w-md:3/5 w-4/6 mx-auto flex flex-col md:flex-row  justify-around">
      <button
        onClick={() => {
          setSelection(1);
        }}
        className="filter"
      >
        Latest
      </button>
      <button
        onClick={() => {
          setSelection(2);
        }}
        className="filter"
      >
        Best Seller
      </button>
      <button
        onClick={() => {
          setSelection(3);
        }}
        className="filter"
      >
        Special
      </button>
    </section>
  );
}

export default Filter;
