import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [form, setForm] = useState({ customerName: '', phone: '', flatAddress: '', items: [{ name: '', quantity: 1 }] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/orders', form);
    alert('Order placed!');
    setForm({ customerName: '', phone: '', flatAddress: '', items: [{ name: '', quantity: 1 }] });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })} placeholder="Name" className="border p-2" required />
      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="border p-2" required />
      <input value={form.flatAddress} onChange={e => setForm({ ...form, flatAddress: e.target.value })} placeholder="Flat Address" className="border p-2" required />
      <input value={form.items[0].name} onChange={e => setForm({ ...form, items: [{ ...form.items[0], name: e.target.value }] })} placeholder="Item name" className="border p-2" required />
      <input type="number" value={form.items[0].quantity} onChange={e => setForm({ ...form, items: [{ ...form.items[0], quantity: parseInt(e.target.value) }] })} className="border p-2" />
      <button type="submit" className="bg-green-500 text-white p-2">Place Order</button>
    </form>
  );
}

export default OrderForm;