"use client"

import Image from 'next/image';
import { useState } from 'react';
import { useChat } from 'ai/react';
import Faq from '@/components/Faq'
import Main from '@/components/Main';
import Calculator from '@/components/Calculator';
import data from '@/bodyShapeData';
import Results from '@/components/Results';


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
const { messages, input, handleInputChange, handleChatSubmit } = useChat();


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

//results from calculator form submit
const [shapeResults, setShapeResults] = useState({
    name: '',
    id: ''
})

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
const handleSubmit = (event) => {
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
        console.log("you have a rectangle body shape")
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
        <Main />

            {
                /* Faq Section */
            }
            <div className="faqs-container">
                <h2 className="font-bold text-4xl text-dark mb-4 text-center">FAQs</h2>
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
            <div className="btn-container flex justify-center my-8">
            <button
                onClick={toggleShowCalculator}
                className="orange-btn bg-tropicana cursor-pointer rounded-md px-8 py-4 uppercase tracking-wider transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300"
            >
                Let's Goooo
            </button>
            </div>

            {/* Calculator */}
            {showCalculator ?
                <Calculator
                    formData={formData}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                /> : ''}


            {/* Results */}
            {shapeResults === '' ? '' : results}

            {
                /* AI Stylist Chatbot */
            }
            {/* <section className="chatbot-container flex justify-center content-center">
                <div className="chatbot-wrapper w-1/2 h-auto border-2 border-black rounded shadow-3xl my-28 p-5">
                    <div className="chatbot-header border-b-2 border-b-black border-dotted">
                        <h1 className="font-sans text-lg text-center font-bold pb-2">Sophie The AI Stylist</h1>
                    </div>

                    <div className="chatbot-conversation mx-auto w-full max-w-md py-8 flex flex-col stretch">
                        {messages.map(m => (
                            <div key={m.id} className={m.role === 'user' ? 'bg-assistant/80 text-black mb-6 text-right px-2 py-2 rounded-b-lg rounded-tl-lg' : 'bg-user/40 text-black mb-6 px-2 py-2 rounded-b-lg rounded-tr-lg'} >
                                {m.role === 'user' ? 'User: ' : 'AI: ' }
                                {m.content}
                            </div>
                        ))}

                        <form onSubmit={handleChatSubmit} className="flex justify-between mt-32">
                            <input
                                className="w-full max-w-md border border-gray-300 rounded mx-auto shadow-xl p-2"
                                value={input}
                                placeholder="Say something..."
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="bg-teal-500 rounded-lg px-4 shadow-xl text-white">Send</button>
                        </form>
                    </div>
                </div>
            </section> */}

  </div>
  )
}
