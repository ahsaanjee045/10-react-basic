import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<WelcomeAdmin />} />
                    <Route path="add-product" element={<AddProduct />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;

function LandingPage() {
    return <div>Landing page</div>;
}
function Shop() {
    return <div>Shop page</div>;
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
