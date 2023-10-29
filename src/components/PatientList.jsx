import React from "react";
import Patient from "./Patient";

export default function PatientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      <h2 className="text-center text-3xl font-black">Patient list</h2>
      <p className="text-xl text-center mt-5 mb-10">
        Manage your {""}
        <span className="text-indigo-600 font-bold">
          Patient&apos;s and Appointments
        </span>
      </p>
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
}
