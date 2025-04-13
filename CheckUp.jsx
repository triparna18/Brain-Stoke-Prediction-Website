import './CheckUp.css';
import React, { useState } from "react";

export default function CheckUp() {

    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "0",
        heart_disease: "0",
        avg_glucose_level: "",
        bmi: "",
        smoking_status: "0"
    });

    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Analyzing...");
    setResultType("");

    try {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.result) {
            setResult(data.result);
            setResultType(data.type);
        } else {
            setResult("Something went wrong!");
            setResultType("negative");
        }
    } catch (error) {
        console.error("Error:", error);
        setResult("Server error. Please try again later.");
        setResultType("negative");
    }
};


    return (
        <div className="checkup-page">
            <div className="form-container">
                <h1>Brain Stroke Risk Predictor</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Gender:</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                               
                         </select>
                        </div>

                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Hypertension:</label>
                            <select name="hypertension" value={formData.hypertension} onChange={handleChange}>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Heart Disease:</label>
                            <select name="heart_disease" value={formData.heart_disease} onChange={handleChange}>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Avg Glucose Level:</label>
                            <input type="number" step="any" name="avg_glucose_level" value={formData.avg_glucose_level} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>BMI:</label>
                            <input type="number" step="any" name="bmi" value={formData.bmi} onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full-width">
                            <label>Do You Smoke?</label>
                            <select name="smoking_status" value={formData.smoking_status} onChange={handleChange}>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className='button'>Predict</button>
                </form>

                {result && (
                    <div className={`result-box ${resultType}`}>
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}
