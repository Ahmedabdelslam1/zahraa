export default function POS() {
  const [items, setItems] = useState([]);
  const services = ["كشف", "تحليل", "أشعة", "دواء"];

  const addItem = (name) => {
    setItems([...items, { name, price: 50 }]);
  };

  const total = items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="bg-black text-white min-h-screen p-4">

      {/* Top */}
      <div className="flex justify-between mb-4">
        <input placeholder="بحث..."
          className="p-2 bg-gray-800 rounded"/>

        <h1 className="text-yellow-400 text-xl">
          {total} جنيه
        </h1>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {services.map((s, i) => (
          <button key={i}
            onClick={() => addItem(s)}
            className="bg-gray-800 p-4 rounded hover:bg-yellow-500 hover:text-black">
            {s}
          </button>
        ))}
      </div>

      {/* Invoice */}
      <div className="bg-gray-900 p-3 rounded mb-4">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="bg-green-500 w-full p-3 rounded">
          دفع 💳
        </button>

        <button className="bg-red-500 w-full p-3 rounded">
          إلغاء 🗑️
        </button>
      </div>

    </div>
  );
}
