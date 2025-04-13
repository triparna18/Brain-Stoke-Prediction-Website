from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np


model = joblib.load("stroke_model.pkl")
scaler = joblib.load("scaler.pkl")
encoders = joblib.load("encoders.pkl")

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    required_fields = ["gender", "age", "hypertension", "heart_disease", "avg_glucose_level", "bmi", "smoking_status"]
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        return jsonify({"result": f"❌ Missing input(s): {', '.join(missing_fields)}", "type": "error"}), 400

    try:
        
        gender = encoders["gender"].transform([data["gender"]])[0]
        age = float(data["age"])
        hypertension = int(data["hypertension"])
        heart_disease = int(data["heart_disease"])
        avg_glucose_level = float(data["avg_glucose_level"])
        bmi = float(data["bmi"])
        smoking_status = int(data["smoking_status"])

       
        scaled_vals = scaler.transform([[age, avg_glucose_level, bmi]])

        input_data = np.array([
            gender,
            scaled_vals[0][0], 
            hypertension,
            heart_disease,
            scaled_vals[0][1],  
            scaled_vals[0][2],  
            smoking_status
        ]).reshape(1, -1)

        
        prediction = model.predict(input_data)[0]

        if prediction == 1:
            return jsonify({
                "result": "⚠️ High Risk of Stroke Detected. Please consult a doctor.",
                "type": "negative"
            })
        else:
            return jsonify({
                "result": "✅ Low Risk. Keep up the healthy lifestyle!",
                "type": "positive"
            })

    except Exception as e:
        return jsonify({"result": f"❌ Server error: {str(e)}", "type": "error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
