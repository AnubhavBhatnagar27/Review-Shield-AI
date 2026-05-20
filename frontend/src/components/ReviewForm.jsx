import { useState } from "react";
import axios from "axios";

import ResultCard from "./ResultCard";

const ReviewForm = () => {

  const [formData, setFormData] = useState({
    productCategory: "",
    overallRating: "",
    reviewText: ""
  });

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(    
        "https://review-shield-ai-1.onrender.com/api/reviews/analyze",
        formData
      );

      setResult(response.data.prediction);

    } catch (error) {

      console.log(error);

      console.log(error);

        alert(
        error.response?.data?.error ||
        error.message
        );
    }

    setLoading(false);
  };

  const comingSoon = () => {

    alert("Coming Soon 🚀");
  };

  return (

    <>
      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          ReviewShield AI
        </div>

        <div className="nav-links">

          <button onClick={comingSoon}>
            Sign In
          </button>

          <button onClick={comingSoon}>
            Sign Up
          </button>

          <button onClick={comingSoon}>
            History
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <h1>

          Detect <span>Fake Reviews</span>
          <br />
          Using AI & NLP

        </h1>

        <p>

          ReviewShield AI is an intelligent machine learning
          and NLP powered platform that analyzes product
          reviews to identify fake reviews and classify
          sentiment as positive, neutral, or negative in
          real-time.

        </p>

      </section>

      {/* FORM */}

      <div className="container">

        <h2>Analyze Review</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="productCategory"
            placeholder="Product Category"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="overallRating"
            placeholder="Overall Rating (only integer values from 1 to 5)"
            min="1"
            max="5"
            onChange={handleChange}
            required
          />

          <textarea
            name="reviewText"
            placeholder="Enter Review Text"
            rows="6"
            onChange={handleChange}
            required
          />

          <button type="submit">

            {
              loading
                ? "Analyzing..."
                : "Analyze Review"
            }

          </button>

        </form>

        {
          result &&
          <ResultCard result={result} />
        }

      </div>

      {/* FOOTER */}

      <footer className="footer">

        © 2026 ReviewShield AI • Built using ReactJS,
        NodeJS, Python, Machine Learning & NLP

      </footer>
    </>
  );
};

export default ReviewForm;