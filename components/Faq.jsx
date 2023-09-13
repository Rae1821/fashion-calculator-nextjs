import Image from 'next/image'

const Faq = ({ faq, index, toggleFaq }) => {

  return (
    <div
        className="border-b border-b-light-green py-3 px-2 my-4 "
        key={index}
        onClick={() => toggleFaq(index)}
    >
        <div className="faq-question text-dark font-bold text-base w-full cursor-pointer text-left relative transition duration-500 ease-in-out after:absolute after:top-0 after:right-0 after:w-6 after:h-6 after:transition-all">
            <h3 className="flex justify-between">
                {faq.question}
                <span className={faq.open ? "rotate-90" : "transform-none"}>
                    <Image
                        src="/assets/icons/arrow.svg"
                        alt="arrow"
                        width={25}
                        height={25}
                    />
                </span>
            </h3>
        </div>
        <div className={!faq.open ? "faq-answer opacity-0 max-h-0 overflow-y-hidden transition-all duration-300 ease-in text-left" : "max-h-52 opacity-100 transition duration-300 ease-out py-4 text-left text md"}>
            <p>{faq.answer}</p>
        </div>
    </div>
  )
}

export default Faq
