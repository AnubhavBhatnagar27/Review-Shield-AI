# Fake Review Detection + Sentiment Analysis

This project uses NLP and Machine Learning to:

- Detect fake product reviews
- Predict review sentiment

## Features

### Fake Review Detection
Classifies reviews as:
- Fake
- Real

### Sentiment Analysis
Classifies sentiment as:
- Positive
- Neutral
- Negative

---

## Models Used

- TF-IDF Vectorizer
- Logistic Regression

---

## Dataset

Combined dataset containing:
- Product category
- Overall rating
- Review text
- Fake labels
- Sentiment labels

Dataset size:
~90,000 reviews

---

## Usage

```python
from inference import predict_review

result = predict_review(
    "Electronics",
    5,
    "Amazing product!"
)

print(result)
```

---

## Future Improvements

- BERT
- RoBERTa
- DistilBERT
- Transformer Fine-Tuning