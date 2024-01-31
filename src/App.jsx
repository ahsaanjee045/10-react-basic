import Form from "./components/Form";
import { Toaster } from "react-hot-toast";

function App() {
    console.log();
    return (
        <div>
            <Toaster />
            <div className="container" id="my-container">
                <Form />
            </div>
        </div>
    );
}

export default App;
