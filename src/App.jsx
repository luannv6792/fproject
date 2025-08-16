import React, { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: "expense", category: "", amount: "", member: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category) return;
    setTransactions([...transactions, { ...form, id: Date.now() }]);
    setForm({ type: "expense", category: "", amount: "", member: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý chi tiêu cá nhân & gia đình</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="border p-2 mr-2">
          <option value="expense">Chi tiêu</option>
          <option value="income">Thu nhập</option>
        </select>
        <input
          type="text"
          placeholder="Danh mục"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Số tiền"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Thành viên"
          value={form.member}
          onChange={(e) => setForm({ ...form, member: e.target.value })}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Thêm
        </button>
      </form>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Loại</th>
            <th className="p-2">Danh mục</th>
            <th className="p-2">Số tiền</th>
            <th className="p-2">Thành viên</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-2">{t.type === "expense" ? "Chi tiêu" : "Thu nhập"}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2">{t.amount}</td>
              <td className="p-2">{t.member}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
