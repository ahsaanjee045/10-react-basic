import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import products from "./data.js";

function App() {
    return (
        <div className="container" id="my-container">
           <Counter/>
           <Counter/>
           <Counter/>

        </div>
    );
}

export default App;
