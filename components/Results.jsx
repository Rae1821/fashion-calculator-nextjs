

const Results = ({ bodyShape, name, mainCharacteristic, secondaryCharacteristic, additionalCharacteristic, handleStartOver, handleShowChatbot }) => {


    return (
    <div className="results-container w-full max-w-6 mx-auto rounded-md flex items-center justify-center flex-col pt-12 py-6 pb-16">
    <div className="results-wrapper flex items-center justify-center mx-auto mb-8 pt-12 px-4 pb-16 rounded-md shadow-[10px_10px_#40B6AD] border-4 border-light-turq w-11/12 max-w-md bg-light">
      <div className="results text-center">
          <h3 className="text-dark font-bold text-xl mb-4">
              You have a <span className="block">{bodyShape}</span>
          </h3>
          <p className="py-4">Characteristics of the {name} body shape include:</p>
          <ul className="characteristics">
              <li className="text-left leading-8 flex italic py-2 w-5/6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              {mainCharacteristic}
              </li>
              <li className="text-left leading-8 flex italic py-2 w-5/6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
              {secondaryCharacteristic}
              </li>
              <li className="text-left leading-8 flex py-2 italic w-5/6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
              {additionalCharacteristic}
              </li>
          </ul>

          <p className="mt-4 text-left border-t-2 border-dotted border-light-turq pt-6 font-sans tracking-wide leading-7">Want to learn more about your body shape and how to style it? Just click the Chat with AI button to and ask Sophie the AI Stylist!</p>

          <div className="button-container mt-10 flex flex-col justify-around">
            <button
                onClick={handleStartOver}
                className="start-over-btn bg-light-turq mr-0 lg:mr-2 py-4 px-2 border-2 border-light-turq rounded-md text-md uppercase cursor-pointer transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300">
                Start Over
            </button>
            <button
                onClick={handleShowChatbot}
                className="ai-btn border-2 border-light-turq w-full mt-5 md:ml-2 py-4 px-2 rounded-md text-md uppercase cursor-pointer transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300">
                Chat with AI
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Results
