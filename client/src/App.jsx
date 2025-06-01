import React from 'react';
import OrderForm from './components/OrderForm.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">Restaurant Orders</h1>
      <OrderForm />
      <hr className="my-4" />
      <AdminDashboard />
    </div>
  );
}

export default App;