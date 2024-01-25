import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import products from "./data.js";


// Props 


function App() {
   
    return (
        <div className="container" title="this is a div">
           <ProductCard product={products[0]}/>
           <ProductCard product={products[1]}/>
           <ProductCard product={products[2]}/>
           <ProductCard product={products[3]}/>
        </div>
    );
}

export default App;







// CSs in js

// Why React
// Virtual DOM

// JSX Rules

// Close every tag
// function can return only one jsx parent element
// jsx can only contain expressions and not statements -> if, switch, for loop, {objects}
