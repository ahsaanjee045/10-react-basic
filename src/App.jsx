import React, { useState } from "react";

import { Toaster } from "react-hot-toast";
import Products from "./components/LifeCycle/Products";

const App = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div  className="h-[1500px] App">
            <Toaster />
            {visible ? <Products /> : null}
            <button onClick={() => setVisible(!visible)}>
                Change Visibility
            </button>
        </div>
    );
};

export default App;
