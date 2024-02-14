import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
    const [user, setUser] = useState(null);
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<SingleProduct />} />

                <Route
                    path="/admin"
                    element={
                        user ? (
                            <AdminLayout user={user} />
                        ) : (
                            <Navigate to={"/"} />
                        )
                    }
                >
                    <Route index element={<WelcomeAdmin />} />
                    <Route path="add-product" element={<AddProduct />} />
                </Route>
                <Route
                    path="/login"
                    element={<Login user={user} setUser={setUser} />}
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;

function LandingPage() {
    return <div>Landing page</div>;
}

function WelcomeAdmin() {
    return <div>Welcome Admin</div>;
}
function AddProduct() {
    return <div>Add Products Page</div>;
}

// Ecommerce ->
// end-user-side
//   |-> / route -> landing page
//   |-> /shop route -> product shop page
// admin-side
//   |-> /admin layout-route
//   |-> /admin/addproduct Add Product
