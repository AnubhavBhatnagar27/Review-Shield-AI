import joblib

# Load models
fake_model = joblib.load(
    "models/fake_review_model.pkl"
)

sentiment_model = joblib.load(
    "models/sentiment_model.pkl"
)

def predict_review(
    product_category,
    overall_rating,
    review_text
):

    combined_text = (
        product_category +
        " " +
        str(overall_rating) +
        " " +
        review_text
    )

    fake_prediction = fake_model.predict(
        [combined_text]
    )[0]

    sentiment_prediction = sentiment_model.predict(
        [review_text]
    )[0]

    return {
        "fake_or_real":
            "Fake" if fake_prediction == 1 else "Real",

        "sentiment":
            sentiment_prediction
    }

# Example test
if __name__ == "__main__":

    result = predict_review(
        "Electronics",
        5,
        "Amazing product and excellent battery life"
    )

    print(result)