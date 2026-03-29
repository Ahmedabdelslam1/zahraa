export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-3xl mb-4">💰 714.00 EGP</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">المرضى</div>
        <div className="bg-gray-800 p-4 rounded-xl">الدكاترة</div>
        <div className="bg-gray-800 p-4 rounded-xl">الصيدلية</div>
        <div className="bg-gray-800 p-4 rounded-xl">الفواتير</div>
      </div>
    </div>
  );
}

import { useState } from "react";

const addItem = (name, fixedPrice) => {
  const price = prompt("ادخل السعر:", fixedPrice);
  if (!price) return;

  setItems([...items, { name, price: Number(price) }]);
};


export default function Setup() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-[#111] p-8 rounded-2xl w-[400px] shadow-2xl border border-yellow-500">

        <h1 className="text-2xl mb-6 text-yellow-400 text-center">
          إعداد النظام 🏥
        </h1>

        <input placeholder="اسم المركز"
          className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="اسم الفرع الرئيسي"
          className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="رقم الهاتف"
          className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded"/>

        <select className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded">
          <option>جنيه مصري</option>
          <option>دولار</option>
        </select>

        <h2 className="text-yellow-400 mt-4">إعداد SMS</h2>

        <input placeholder="Account SID"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="Auth Token"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="رقم الإرسال"
          className="w-full mb-4 p-2 bg-black border border-yellow-500 rounded"/>

        <h2 className="text-yellow-400">حساب المدير</h2>

        <input placeholder="Username"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input type="password" placeholder="Password"
          className="w-full mb-4 p-2 bg-black border border-yellow-500 rounded"/>

        <button className="w-full bg-yellow-500 text-black py-2 rounded font-bold">
          بدء النظام 🚀
        </button>

      </div>
    </div>
  );
}
import { useState } from "react";

export default function Setup() {
  const [branches, setBranches] = useState([{ name: "", phone: "" }]);
  const [logo, setLogo] = useState(null);

  const addBranch = () => {
    setBranches([...branches, { name: "", phone: "" }]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-[#111] p-8 rounded-2xl w-[500px] shadow-2xl border border-yellow-500">

        <h1 className="text-2xl mb-6 text-yellow-400 text-center">
          إعداد النظام 👑
        </h1>

        {/* Logo Upload */}
        <input type="file"
          onChange={(e) => setLogo(e.target.files[0])}
          className="mb-4 w-full text-yellow-400"/>

        {/* Company Info */}
        <input placeholder="اسم المركز"
          className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded"/>

        {/* Color */}
        <select className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded">
          <option>Gold</option>
          <option>Blue</option>
          <option>Green</option>
        </select>

        {/* Branches */}
        <h2 className="text-yellow-400 mt-4">الفروع</h2>

        {branches.map((b, i) => (
          <div key={i} className="mb-3">
            <input placeholder="اسم الفرع"
              className="w-full mb-1 p-2 bg-black border border-yellow-500 rounded"/>

            <input placeholder="رقم الهاتف"
              className="w-full p-2 bg-black border border-yellow-500 rounded"/>
          </div>
        ))}

        <button onClick={addBranch}
          className="bg-yellow-500 text-black px-3 py-1 rounded mb-3">
          + إضافة فرع
        </button>

        {/* SMS */}
        <h2 className="text-yellow-400">إعداد SMS</h2>

        <input placeholder="Account SID"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="Auth Token"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input placeholder="رقم الإرسال"
          className="w-full mb-4 p-2 bg-black border border-yellow-500 rounded"/>

        {/* Admin */}
        <h2 className="text-yellow-400">حساب المدير</h2>

        <input placeholder="Username"
          className="w-full mb-2 p-2 bg-black border border-yellow-500 rounded"/>

        <input type="password" placeholder="Password"
          className="w-full mb-4 p-2 bg-black border border-yellow-500 rounded"/>

        <button className="w-full bg-yellow-500 text-black py-2 rounded font-bold">
          بدء النظام 🚀
        </button>

      </div>
    </div>
  );
}

