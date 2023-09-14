"use client"

import { useState } from 'react';
import { useChat } from 'ai/react';
import Faq from '@/components/Faq'
import Main from '@/components/Main';
import Calculator from '@/components/Calculator';
import data from '@/bodyShapeData';
import Results from '@/components/Results';
import Nav from '@components/Nav';


export default function Home() {

//faq state
const [faqs, setFaqs] = useState([
    {
        question: 'Who is this calculator for?',
        answer: 'This is for anyone who wants to understand how to look and feel their best in the body they have and the first step is knowing your shape!',
        open: false
    },
    {
        question: 'How do I use this information?',
        answer: 'Once you know your shape you can learn what clothes are flattering for your shape and what will look the best on you.',
        open: false
    },
    {
        question: `What if I don't like the results?`,
        answer: 'Keep in mind that knowing your shape does not define you, it simply arms you with information so you can make the best clothing choices. Remember that every shape is beautiful!',
        open: false
    },
    {
        question: 'What if I need help?',
        answer: 'Feel free to reach out to me if you have any questions.',
        open: false
    }
])

//Chatbot
const { messages, input, handleInputChange, handleSubmit } = useChat();
//Chatbot state
const [showChatbot, setShowChatbot] = useState(false)

//faq section
const toggleFaq = index => {
    setFaqs(faqs.map((faq, i) => {
        if(i === index) {
            faq.open = !faq.open
        } else {
            faq.open = false
        }
        return faq
    }));
};

//State for calculator
const [showCalculator, setShowCalculator] = useState(false);

//formdata state
const [formData, setFormData] = useState(
    {shoulders:"", waist:"", hips:"", errorMessage: 'Please fill out the selected field',
    required: true,}
  )

//show calculator
const toggleShowCalculator = () => {
    setShowCalculator(prevShowCalculator => !prevShowCalculator)
  }

  //detect changes to form and save to state
const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }


//handle the formdata once submitted
const handleFormSubmit = (event) => {
    event.preventDefault()

    if(formData.shoulders === "" && formData.waist === "" && formData.hips === "") {
        console.log("Please fill in all the fields")
    } else if(formData.hips / formData.shoulders >= 1.05 && formData.waist < formData.hips) {
        setShapeResults({name: 'Pear', id: 1})
    } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist === formData.shoulders) {
        //console.log("you have an apple body shape")
        setShapeResults({name: 'Apple', id: 2})
    } else if(formData.waist / formData.shoulders <= 0.75 && formData.waist / formData.hips < 0.75 && (formData.hips * 0.95) < formData.shoulders) {
        //console.log("you have an hourglass shape")
        setShapeResults({name: 'Hourglass', id: 5})

    } else if(formData.shoulders / formData.hips >= 1.05 && formData.waist < formData.shoulders) {
        //console.log("you have an inverted triangle shape")
        setShapeResults({name: 'Triangle', id: 3})

    } else if(formData.waist / formData.shoulders >= 0.75 && (formData.shoulders * 0.95) < formData.hips) {
        //console.log("you have a rectangle body shape")
        setShapeResults({name: 'Rectangle', id: 4})
    }
    setShowCalculator(false)
  }

  //start over button
const handleStartOver = () => {
    setFormData({shoulders:"", waist:"", hips:""})
    setShapeResults('')
    setShowCalculator(false)
    setShowChatbot(false)
  }

//results from calculator form submit
const [shapeResults, setShapeResults] = useState({
    name: '',
    id: ''
})

// render results component
const results = data.map(item => {
    if(shapeResults.name === item.name && shapeResults.id === item.id) {
      return (
        <Results
            key={item.id}
            name={item.name}
            bodyShape={item.bodyShape}
            mainCharacteristic={item.characteristics.main}
            secondaryCharacteristic={item.characteristics.secondary}
            additionalCharacteristic={item.characteristics.additional}
            handleStartOver={() => handleStartOver()}
            handleShowChatbot={() => handleShowChatbot()}
        />
      )
    } else {
      return console.log('error')
    }
  })

//show chatbot
function handleShowChatbot () {
    setShowChatbot(prevShowChatbot => !prevShowChatbot)
  }

  //hide chatbot
  function handleCloseChatbot() {
    setShowChatbot(prevShowChatbot => !prevShowChatbot)
  }



  return (
    <div>
        <Nav />
        <Main />

        {
            /* Faq Section */
        }
        <div className="faqs-container mt-40">
            <h2 className="font-bold text-3xl text-dark mb-4 text-center lg:text-4xl lg:font-black lg:tracking-wide">FAQs</h2>
            <span className="text-base block mt-2 text-center">Answers to common questions</span>
            <div className="faqs w-full max-w-3xl mx-auto p-6">
                {faqs.map((faq, i) => (
                    <Faq
                        faq={faq}
                        key={i}
                        index={i}
                        toggleFaq={toggleFaq}
                    />
                ))}
            </div>
        </div>

        {
            /* Call to Action */
        }
        <div className="get-started mt-12 mb-12">
            <h2 className="text-3xl lg:text-3xl text-center font-extrabold">Ready to get started?</h2>

            <div className="btn-container flex justify-center pt-8 pb-12">
                <button
                id="lets-go"
                    onClick={toggleShowCalculator}
                    className="orange-btn flex justify-between text-base bg-light-green cursor-pointer rounded-md px-8 py-4 uppercase tracking-wider transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300 lg:text-lg"
                >
                    Let's Goooo
                    <span className='pl-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        {/* Calculator */}
        {showCalculator ?
            <Calculator
                formData={formData}
                handleFormSubmit={handleFormSubmit}
                handleChange={handleChange}
            /> : ''}


        {/* Results */}
        {shapeResults === '' ? '' : results}

        {
            /* AI Stylist Chatbot */
        }
        {showChatbot ?
            <section id="ai" className="chatbot-container flex justify-center content-center bg-black bg-opacity-25 backdrop-blur fixed inset-0 w-full h-full">
                <div className="chatbot-wrapper w-11/12 md:w-2/3 lg:w-1/2 h-full overflow-y-auto bg-light border-2 border-dark rounded mt-4 mb-28 p-5">
                    <div className="chatbot-header border-b-2 border-b-black border-dotted">
                        <h1 className="font-sans text-lg lg:text-xl font-bold pb-2 flex justify-between">Sophie The AI Stylist
                            <span className="cursor-pointer">
                                <button className="close-btn w-1/4" onClick={handleCloseChatbot}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </span>
                        </h1>
                    </div>

                    <div className="chatbot-conversation mx-auto w-full max-w-lg py-8 flex flex-col">
                        <p className="bg-user/40 text-black mb-6 px-2 py-2 rounded-b-lg rounded-tr-lg relative">AI: Hello, what can I help you style today?</p>
                        {messages.map(m => (
                            <div key={m.id} className={m.role === 'user' ? 'bg-assistant/80 text-black mb-6 text-right px-2 py-2 rounded-b-lg rounded-tl-lg' : 'bg-user/40 text-black mb-6 px-2 py-2 rounded-b-lg rounded-tr-lg whitespace-pre-wrap'} >
                                {m.role === 'user' ? 'User: ' : 'AI: ' }
                                {m.content}
                            </div>
                        ))}
                        <form onSubmit={handleSubmit} className="flex justify-between mt-10">
                            <input
                                className="w-full lg:max-w-md border border-light-green rounded rounded-tr-none rounded-br-none mx-auto shadow-lg p-2 focus:outline-none"
                                value={input}
                                placeholder="Say something..."
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="bg-light-green rounded-md rounded-tl-none rounded-bl-none px-4 shadow-lg text-white">Send</button>
                        </form>
                    </div>
                </div>
            </section> : ''}

        {/* Footer */}
        <footer className="bg-dark h-10 pt-8 pb-12 text-center text-light flex flex-col justify-center">
            <p className="pt-8 text-sm">Copyright © 2023 | Created by
                <a href="https://www.rachelandersondooley.com" alt="portfolio site link" target="_blank" className="text-light-green pl-2">
                    Rachel Dooley
                </a>
            </p>
            <p className="pl-2 text-xs pt-4"> Image by <a href="https://www.freepik.com/free-vector/cartoon-types-female-body-shapes_12276372.htm#query=body%20shape&position=43&from_view=keyword&track=ais">Freepik</a></p>
        </footer>


    </div>
  )
}
