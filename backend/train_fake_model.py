# train_fake_model.py

import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

# Load dataset
df = pd.read_csv("final_reviews_dataset.csv")

# Combine features
df["combined_text"] = (
    df["product_category"] +
    " " +
    df["overall_rating"].astype(str) +
    " " +
    df["review_text"]
)

# Inputs and labels
X = df["combined_text"]
y = df["fake label"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Pipeline
model = Pipeline([
    ("tfidf", TfidfVectorizer(
        stop_words="english",
        max_features=10000
    )),
    ("clf", LogisticRegression())
])

# Train
model.fit(X_train, y_train)

# Predictions
preds = model.predict(X_test)

# Evaluation
print(classification_report(y_test, preds))

# Save model
joblib.dump(model, "models/fake_review_model.pkl")

print("Fake review model saved!")