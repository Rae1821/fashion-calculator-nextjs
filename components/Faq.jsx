import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Faq = ({ faq, index, toggleFaq }) => {

  return (
    <div
        className="shadow rounded bg-light bg-opacity-25 py-3 px-2 my-4 "
        key={index}
        onClick={() => toggleFaq(index)}
    >
        <div className="faq-question px-4 py-2 text-dark  font-bold text-base w-full cursor-pointer text-left relative transition duration-300 ease-out after:absolute after:top-0 after:right-0 after:w-6 after:h-6 after:transition-all">
            <h3 className="flex justify-between">
                {faq.question}
                <span className={faq.open ? "rotate-90" : "transform-none"}>
                    <ChevronRightIcon className="w-6 h-6 text-dark" />
                </span>
            </h3>
        </div>
        <div className={!faq.open ? "faq-answer opacity-0 max-h-0 overflow-y-hidden transition-all duration-300 ease-in text-left" : "max-h-52 opacity-100 transition-all duration-300 ease-out py-4 px-4 text-left text md"}>
            <p>{faq.answer}</p>
        </div>
    </div>
  )
}

export default Faq
