import { useState } from "react";

export default function Home() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    let bmiCategory = "";
    if (bmiValue < 18.5) bmiCategory = "Underweight";
    else if (bmiValue < 24.9) bmiCategory = "Normal";
    else if (bmiValue < 29.9) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    setCategory(bmiCategory);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">BMI Calculator</h1>
        
        <form onSubmit={calculateBMI} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter height in cm"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter weight in kg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Your BMI: {bmi}</p>
            <p
              className={\`mt-2 text-xl font-bold ${
                category === "Underweight"
                  ? "text-yellow-500"
                  : category === "Normal"
                  ? "text-green-600"
                  : category === "Overweight"
                  ? "text-orange-500"
                  : "text-red-600"
              }\`}
            >
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
