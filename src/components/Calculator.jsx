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
		<div className="calculator flex flex-col justify-center items-center gap-10 border-4 border-rose-400 p-10 bg-black  rounded-2xl">
			<div className="flex gap-4">
				<input
					className=" w-[380px] max-w-7xl h-[80px] font-semibold bg-white text-black border-4 border-green-600 rounded-2xl px-7  text-4xl cursor-not-allowed"
					type="text"
					value={result}
					disabled
				/>
				<button
					className="clear btn btn-outline btn-error border-[2.5px] text-xl font-bold h-[78px] w-40 "
					onClick={clear}
				>
					Clear
				</button>
			</div>
			<div className=" keypad flex flex-col items-center gap-3 border-4 border-blue-400 py-10 px-5  rounded-2xl w-[500px]">
				<div className="flex gap-3  w-full  pl-7 pr-10">
					<button
						className="bg-[#EE9815] text-white btn hover:border-[3px] hover:border-[#ee9815]  text-2xl font-bold h-16 w-1/3"
						name="+"
						onClick={handleClick}
					>
						+
					</button>
					<button
						className=" equal btn btn-outline btn-success border-[2.5px] text-2xl font-bold h-16 w-2/3"
						onClick={calculate}
					>
						=
					</button>
				</div>
				<div className="flex gap-3  w-full pl-7 pr-12">
					<button
						className="bg-[#EE9815] text-white btn hover:border-[3px] hover:border-[#ee9815]  text-2xl font-bold h-16 w-1/3"
						name="*"
						onClick={handleClick}
					>
						*
					</button>
					<button
						className="bg-[#EE9815] text-white btn hover:border-[3px] hover:border-[#ee9815]  text-2xl font-bold h-16 w-1/3"
						name="-"
						onClick={handleClick}
					>
						-
					</button>
					<button
						className="bg-[#EE9815] text-white btn hover:border-[3px] hover:border-[#ee9815]  text-2xl font-bold h-16 w-1/3"
						name="/"
						onClick={handleClick}
					>
						/
					</button>
				</div>
				<div className="flex gap-3  w-full pl-7 pr-12">
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="1"
						onClick={handleClick}
					>
						1
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="2"
						onClick={handleClick}
					>
						2
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="3"
						onClick={handleClick}
					>
						3
					</button>
				</div>
				<div className="flex gap-3  w-full pl-7 pr-12">
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="4"
						onClick={handleClick}
					>
						4
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="5"
						onClick={handleClick}
					>
						5
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="6"
						onClick={handleClick}
					>
						6
					</button>
				</div>
				<div className="flex gap-3  w-full pl-7 pr-12">
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="7"
						onClick={handleClick}
					>
						7
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="8"
						onClick={handleClick}
					>
						8
					</button>
					<button
						className="bg-white hover:text-white text-black btn hover:border-[3px] hover:border-white text-2xl font-bold h-16 w-1/3"
						name="9"
						onClick={handleClick}
					>
						9
					</button>
				</div>
				<div className="flex gap-3  w-full pl-7 pr-6">
					<button
						className="bg-white text-black btn hover:border-[3px] hover:border-white hover:text-white text-2xl font-bold h-16 w-full"
						name="0"
						onClick={handleClick}
					>
						0
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
