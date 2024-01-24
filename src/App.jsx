import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    let person = { name: "John Doe" };
    return (
        <div>
            <Button />
            <Button />
            <Button />
            <Button />
            <Counter />
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
