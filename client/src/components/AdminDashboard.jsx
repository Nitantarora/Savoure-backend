import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get('/api/orders');
    setOrders(res.data);
  };

  useEffect(() => { fetchOrders(); }, []);

  const markDelivered = async (id) => {
    await axios.patch(`/api/orders/${id}`, { status: 'Delivered' });
    fetchOrders();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      {orders.map(order => (
        <div key={order._id} className="border p-2 my-2">
          <p><strong>{order.customerName}</strong> ({order.flatAddress})</p>
          <p>Status: {order.status}</p>
          <button onClick={() => markDelivered(order._id)} className="bg-blue-500 text-white px-2">Mark Delivered</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;