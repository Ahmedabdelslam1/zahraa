export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-[#111] p-8 rounded-2xl border border-yellow-500 shadow-2xl w-[350px]">

        <h1 className="text-2xl text-center text-yellow-400 mb-6">
          👑 تسجيل الدخول
        </h1>

        <input placeholder="اسم المستخدم"
          className="w-full mb-3 p-2 bg-black border border-yellow-500 rounded"/>

        <input type="password" placeholder="كلمة المرور"
          className="w-full mb-4 p-2 bg-black border border-yellow-500 rounded"/>

        <button className="w-full bg-yellow-500 text-black py-2 rounded font-bold">
          دخول 🚀
        </button>

      </div>
    </div>
  );
}
