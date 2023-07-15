import "./App.css";
import Calculator from "./components/Calculator";

function App() {
	return (
		<div className="flex flex-col justify-center items-center gap-14 pt-10 pb-16">
			<h1 className="text-white">Calculator App</h1>
			<Calculator />
		</div>
	);
}

export default App;
