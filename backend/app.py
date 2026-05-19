from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Load models
fake_model = joblib.load("models/fake_review_model.pkl")
sentiment_model = joblib.load("models/sentiment_model.pkl")

app = FastAPI()

# Request schema
class ReviewRequest(BaseModel):
    product_category: str
    overall_rating: float
    review_text: str

@app.get("/")
def home():
    return {"message": "Fake Review Detection API Running"}

@app.post("/predict")
def predict(data: ReviewRequest):

    combined_text = (
        data.product_category +
        " " +
        str(data.overall_rating) +
        " " +
        data.review_text
    )

    fake_prediction = fake_model.predict(
        [combined_text]
    )[0]

    sentiment_prediction = sentiment_model.predict(
        [data.review_text]
    )[0]

    return {
        "fake_or_real":
            "Fake" if fake_prediction == 1 else "Real",

        "sentiment":
            sentiment_prediction
    }