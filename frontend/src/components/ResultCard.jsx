const ResultCard = ({ result }) => {

  return (

    <div className="result-card">

      <h2>Analysis Result</h2>

      <p>

        <strong>Review Type: </strong>

        {result.fakeOrReal}

      </p>

      <p>

        <strong>Sentiment: </strong>

        {result.sentiment}

      </p>

    </div>
  );
};

export default ResultCard;