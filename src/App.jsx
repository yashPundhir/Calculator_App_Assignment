import "./App.css";
import Calculator from "./components/Calculator";

function App() {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<h1>Calculator App</h1>
			<Calculator />
		</div>
	);
}

export default App;
