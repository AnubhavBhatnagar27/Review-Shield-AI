import json
import joblib

# Load models
fake_model = joblib.load("models/fake_review_model.pkl")
sentiment_model = joblib.load("models/sentiment_model.pkl")

# Read input.json
with open("input.json", "r") as file:
    input_data = json.load(file)

product_category = input_data["productCategory"]
overall_rating = input_data["overallRating"]
review_text = input_data["reviewText"]

combined_text = (
    product_category
    + " "
    + str(overall_rating)
    + " "
    + review_text
)

# Predictions
fake_prediction = fake_model.predict([combined_text])[0]

sentiment_prediction = sentiment_model.predict(
    [review_text]
)[0]

result = {
    "fakeOrReal":
        "Fake"
        if fake_prediction == 1
        else "Real",

    "sentiment":
        sentiment_prediction
}

print(json.dumps(result))