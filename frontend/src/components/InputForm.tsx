import { useState } from "react";

export default function InputForm() {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		alert(`Submitted: ${inputValue}`);
	};

	return (
		<div className="flex items-center justify-center">
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
				<div className="mb-4">
					<label htmlFor="inputText" className="block text-gray-700 mb-2">
						Write a description of what you ate:
					</label>
					<textarea
						id="inputText"
						placeholder="Example: burger with 2 beef patties, 1 slice of cheese, and 2 slices of bacon, lettuce and tomato on a sesame seed bun"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="min-w-96 min-h-48 px-3 py-2 border rounded"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white px-3 py-2 rounded"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
