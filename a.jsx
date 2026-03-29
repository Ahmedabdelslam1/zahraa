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
