import React, { useState } from "react";

export default function Form() {
  const [names, setName] = useState('');

  const handleSubmit = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient follow-up</h2>
      <p className="my-5 text-center">
        Add patients and{" "}
        <span className="text-indigo-600 font-bold">manage them</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="my-2">
          <label
            className="font-bold text-gray-700 uppercase block"
            htmlFor="pet"
          >
            Pet's name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={names}
            onChange={handleSubmit}
          />
        </div>
        <div className="my-2">
          <label
            className="font-bold text-gray-700 uppercase block"
            htmlFor="owner"
          >
            Owner's name name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="my-2">
          <label
            className="font-bold text-gray-700 uppercase block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="my-2">
          <label
            className="font-bold text-gray-700 uppercase block"
            htmlFor="discharge"
          >
            Discharge
          </label>
          <input
            id="discharge"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="my-2">
          <label
            className="font-bold text-gray-700 uppercase block"
            htmlFor="symptoms"
          >
            Symptoms
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2"
            name="discharge"
            id="symptoms"
            cols="50"
            rows="5"
          ></textarea>
        </div>
        <div className="my-2 flex items-center justify-center w-full h-12">
          <button className="bg-indigo-600 text-white shadow-md w-1/2 h-4/5 rounded-md">
            Add patient
          </button>
        </div>
      </form>
    </div>
  );
}
