import Image from 'next/image';

const Results = ({ bodyShape, name, mainCharacteristic, secondaryCharacteristic, additionalCharacteristic, handleStartOver, handleShowChatbot }) => {


    return (
    <div className="results-container w-full max-w-6xl mx-auto rounded-md flex flex-col lg:flex-row items-center justify-around pt-12 pb-16">
      <div className="results-wrapper flex items-center justify-center mb-8 pt-12 px-2 lg:px-6 pb-16 rounded-md lg:w-1/2 ">
        <div className="results text-center">
            <h3 className="text-dark font-bold text-3xl mb-4">
                You have a {bodyShape}
            </h3>
            <p className="py-4 text-lg">{name} shape characteristics include:</p>
            <ul className="characteristics text-sm mb-8">
                <li className="leading-8 flex justify-center items-center italic py-2 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F27052" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                {mainCharacteristic}
                </li>
                <li className="text-left leading-8 flex justify-center items-center italic py-2 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F27052" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  {secondaryCharacteristic}
                </li>
                <li className="text-left leading-8 flex justify-center items-center py-2 italic mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F27052" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  {additionalCharacteristic}
                </li>
            </ul>

            <p className="mt-4 text-left border-t-2 border-dotted border-light-green pt-6 font-sans tracking-wide leading-7">Want to learn more about your body shape and how to style it? Just click the Chat with AI button to ask Sophie the AI Stylist!</p>

            <div className="button-container mt-10 flex flex-col lg:flex-row justify-around">
              <button
                onClick={handleShowChatbot}
                className="ai-btn border-2 border-light-green bg-light-green w-full lg:w-1/2 mt-5 py-4 px-2 lg:mr-4 rounded-md text-md uppercase cursor-pointer transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300">
                Chat with AI
              </button>
              <button
                onClick={handleStartOver}
                className="start-over-btn w-full lg:w-1/2 mt-5 mr-0 lg:ml-4 py-4 px-2 border-2 border-light-green rounded-md text-md uppercase cursor-pointer transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300">
                Start Over
              </button>
            </div>
        </div>
      </div>
      <div className="woman-img hidden lg:block lg:w-1/4 h-auto">
        <Image
          src="/assets/images/woman-yellow-bathing-suit.svg"
          alt="woman in yellow bathing suit"
          width={300}
          height={400}
        />
      </div>
  </div>
  )
}

export default Results
