import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import classification_report
from imblearn.over_sampling import RandomOverSampler
import joblib
import numpy as np


df = pd.read_csv("C:\\Users\\Triparna Chakraborty\\Desktop\\file.csv")


df = df.drop(columns=["heart_disease.1", "hypertension.1"])


df.dropna(inplace=True)


df = df[df["smoking_status"] != "Unknown"]


label_encoders = {}
le_gender = LabelEncoder()
df["gender"] = le_gender.fit_transform(df["gender"])
label_encoders["gender"] = le_gender


df["smoking_status"] = df["smoking_status"].apply(lambda x: 1 if x in ["formerly smoked", "smokes"] else 0)


df[["stroke", "hypertension", "heart_disease"]] = df[["stroke", "hypertension", "heart_disease"]].astype(int)


X = df[["gender", "age", "hypertension", "heart_disease", "avg_glucose_level", "bmi", "smoking_status"]]
y = df["stroke"]


scaler = StandardScaler()
X.loc[:, ["age", "avg_glucose_level", "bmi"]] = scaler.fit_transform(X[["age", "avg_glucose_level", "bmi"]])


oversample = RandomOverSampler(sampling_strategy='minority', random_state=42)
X_resampled, y_resampled = oversample.fit_resample(X, y)


X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)


model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))


joblib.dump(model, "stroke_model.pkl")
joblib.dump(label_encoders, "encoders.pkl")
joblib.dump(scaler, "scaler.pkl")



test_input = np.array([[1, 80, 1, 1, 250, 35, 1]])  


scaled_vals = scaler.transform([[80, 250, 35]])
final_input = np.array([1, scaled_vals[0][0], 1, 1, scaled_vals[0][1], scaled_vals[0][2], 1]).reshape(1, -1)

print("Final input to model:", final_input)
print("Probability of stroke:", model.predict_proba(final_input)[0][1])
