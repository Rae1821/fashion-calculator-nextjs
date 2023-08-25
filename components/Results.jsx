

const Results = ({ bodyShape, name, mainCharacteristic, secondaryCharacteristic, additionalCharacteristic, handleStartOver, handleShowChatbot }) => {


    return (
    <div className="results-container w-full max-w-6 mx-auto rounded-md flex items-center justify-center flex-col pt-12 py-6 pb-16">
    <div className="results-wrapper">
      <div className="results">
          <h3>
            <span className="confetti" role="img" aria-label='emoji'>🎉 </span>
              {bodyShape}
            <span className="confetti" role="img" aria-label='emoji'> 🎉</span>
          </h3>
          <p>Some characteristics of the {name} body shape include:</p>
          <ul className="characteristics">
              <li>{mainCharacteristic}</li>
              <li>{secondaryCharacteristic}</li>
              <li>{additionalCharacteristic}</li>
          </ul>
          <div className="button-container">
            <button
                onClick={handleStartOver}
                className="start-over-btn">
                Start Over
            </button>
            <button
                onClick={handleShowChatbot}
                className="ai-btn">
                Learn more
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Results
