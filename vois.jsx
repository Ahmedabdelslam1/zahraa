export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen p-4">

      <h1 className="text-3xl text-yellow-400 mb-4">
        👑 لوحة التحكم
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#111] p-4 rounded-xl border border-yellow-500">
          💰 12,500 جنيه
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-yellow-500">
          👥 120 مريض
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-yellow-500">
          🧾 45 فاتورة
        </div>

        <div className="bg-[#111] p-4 rounded-xl border border-yellow-500">
          🏢 3 فروع
        </div>
      </div>

    </div>
  );
}
