import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemView from "./pages/ItemView";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";
import AddPayment from "./pages/AddPayment";
import AddAddress from "./pages/AddAddress";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item-view" element={<ItemView />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-payment" element={<AddPayment />} />
        <Route path="/add-address" element={<AddAddress />} />
      </Routes>
    </Router>
  );
}

export default App;