import { useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const addPatient = () => {
    setPatients([...patients, { name }]);
    setName("");
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">

      <h1 className="text-yellow-400 text-xl mb-4">👤 المرضى</h1>

      <div className="flex gap-2 mb-4">
        <input value={name} onChange={(e) => setName(e.target.value)}
          placeholder="اسم المريض"
          className="p-2 bg-gray-800 rounded"/>

        <button onClick={addPatient}
          className="bg-yellow-500 text-black px-4 rounded">
          إضافة
        </button>
      </div>

      {patients.map((p, i) => (
        <div key={i} className="bg-gray-900 p-2 rounded mb-2">
          {p.name}
        </div>
      ))}

    </div>
  );
}
