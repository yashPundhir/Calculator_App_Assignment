import { useState } from "react";

const Calculator = () => {
	const [result, setResult] = useState("");

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (error) {
			setResult("Error");
		}
	};

	const clear = () => {
		setResult("");
	};

	return (
		<div className="calculator flex flex-col justify-center items-center gap-6 border-4 border-rose-400 p-5 rounded-2xl">
			<input
				className=" w-[290px] max-w-7xl h-[80px] font-semibold text-black border-2 border-gray-400 rounded-2xl bg-transparent px-7 text-6xl cursor-not-allowed"
				type="text"
				value={result}
				disabled
			/>
			<div className="keypad flex flex-col gap-3 border-4 border-blue-400 p-3 rounded-2xl">
				<div className="flex gap-3">
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="7"
						onClick={handleClick}
					>
						7
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="8"
						onClick={handleClick}
					>
						8
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="9"
						onClick={handleClick}
					>
						9
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="+"
						onClick={handleClick}
					>
						+
					</button>
				</div>
				<div className="flex gap-3">
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="4"
						onClick={handleClick}
					>
						4
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="5"
						onClick={handleClick}
					>
						5
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="6"
						onClick={handleClick}
					>
						6
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14"
						name="-"
						onClick={handleClick}
					>
						-
					</button>
				</div>
				<div className="flex gap-3">
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="1"
						onClick={handleClick}
					>
						1
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="2"
						onClick={handleClick}
					>
						2
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="3"
						onClick={handleClick}
					>
						3
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="*"
						onClick={handleClick}
					>
						*
					</button>
				</div>
				<div className="flex gap-3">
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="0"
						onClick={handleClick}
					>
						0
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="."
						onClick={handleClick}
					>
						.
					</button>
					<button
						className="btn btn-outline border-[2.5px] text-xl font-bold h-14 w-14 "
						name="/"
						onClick={handleClick}
					>
						/
					</button>
					<button
						className="equal btn btn-outline btn-success border-[2.5px] text-xl font-bold h-14 w-14"
						onClick={calculate}
					>
						=
					</button>
				</div>
				<button
					className="clear btn btn-outline btn-error border-[2.5px] text-xl font-bold h-16"
					onClick={clear}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

export default Calculator;
