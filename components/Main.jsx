import Image from 'next/image';
import Link from 'next/link';
import { motion, inView } from 'framer-motion';



const Main = () => {


    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }



  return (
    <div>
        <div className="hero heroImage flex justify-center items-center h-screen">
            <div className="max-w-3xl pt-24">
                <h1 className="title text-center font-bold px-2 text-3xl md:text-4xl lg:text-5xl text-light tracking-tighter leading-tight text-shadow-lg shadow-dark">
                Feel confident & beautiful without dieting or hitting the gym
                </h1>
                    <p className="description text-center text-light font-light leading-relaxed mt-6 px-4 text-sm md:text-base text-shadow-sm shadow-dark">
                        Knowing your body shape is the first step to looking better in your clothes. No more feeling overwhelemed while shopping for clothes and getting dressed will be a breeze.
                    </p>
                    <div className="mt-14 flex items-center justify-center gap-x-6">
                        <Link
                            href="#lets-go"
                            className="bg-light-green rounded px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-green transition ease-in duration-150"
                        >
                            Get started
                        </Link>
                        <Link
                            href="#benefits"
                            className="text-light hover:text-light-green transition ease-in duration-150"
                            >
                            Learn More <span aria-hidden="true">→</span>
                        </Link>
                    </div>
             </div>
        </div>

        {
            //How it works section
        }
        <div id="benefits" className="works--container flex flex-col-reverse mt-16 mx-auto pt-6 px-6 md:w-3/4 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:max-w-6xl lg:mt-24 lg:p-4">
            <div className="works-left hidden h-auto lg:block lg:w-1/3 lg:mr-0">
                <Image
                    src="/assets/images/woman-yellow-bathing-suit.svg"
                    alt="woman in a white bathing suit"
                    width={250}
                    height={300}
                />
            </div>
                <div className="works-right mb-6 w-11/12">
                    <h2 className="text-center mb-6 font-extrabold text-3xl lg:text-left lg:text-4xl lg:pt-2 lg:pl-4 lg:mb-8 lg:font-black lg:tracking-wide">
                        The Perks
                    </h2>
                    <div className="perks-container text-left lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 lg:p-4">

                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            className="perk max-w-md mt-0 mb-5 md:max-w-xl md:mb-8 lg:px-4 lg:py-6 lg:w-11/12 ">
                            <p className="pill bg-light-green w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4 shadow-md">Process</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Easy Peasy</h3>
                            <p className="perk-description font-extralight leading-8 text-base">With just 3 measurements -
                            your shoulders, your waist, and your hips -
                            the body calculator compares the ratio of each to determine
                            your body shape</p>
                        </motion.div>

                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                                ease: "easeInOut"
                            }}
                            className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:px-4 lg:py-6 lg:w-11/12">
                            <p className="pill bg-light-green w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4 shadow-md">Benefit</p>
                            <h3 className="font-bold mt-5 mb-2 lg:text-2xl">Clarity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Knowing your shape clears up
                            all those frustrating moments when something looks good on
                            someone else but not on you. It is not you, it is your shape.</p>
                        </motion.div>

                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                ease: "easeInOut"
                            }}
                         className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:px-4 lg:py-6 lg:w-11/12">
                            <p className="pill bg-light-green w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4 shadow-md">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Body Positivity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Your body is not just a bunch of
                            individual parts you may or may not like. It&apos;s a beautiful shape
                            and it’s time to see it and appreciate it as others do</p>
                        </motion.div>

                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            transition={{
                                duration: 0.5,
                                delay: 0.9,
                                ease: "easeInOut"
                            }}
                        className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:px-4 lg:py-6 lg:w-11/12">
                            <p className="pill bg-light-green w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4 shadow-md">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Shopping Is Fun</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Imagine a world where you actually
                            wear, and love, all the clothes you buy so they no longer sit in
                            the back of your closet with the tags on. </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {
                //Measuring tips
            }
            <div id="tips" className="measuring-tips my-16 bg-gradient-to-r from-[#fd746c] to-[#ff9068] lg:p-8  lg:mx-auto">
                <div className="measuring-tips-inner flex flex-col items-center justify-between p-4 md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-[1fr_300px_400px_300px_1fr] lg:gap-8 lg:pt-4 lg:pb-12">
                        <h2 className="font-sans font-bold text-dark text-2xl max-w-lg pt-8 pb-4 text-center md:col-span-2 md:row-span-1 md:mx-auto lg:col-start-3 lg:col-end-4 lg:text-4xl lg:font-black lg:tracking-wide">Measuring Tips
                            <span className="block text-base mt-2 mb-4 font-medium ">Tips to get the most accurate result</span>
                        </h2>
                    <div className="max-w-1/2 md:col-span-2 md:row-span-1 md:mx-auto lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 lg:max-w-full h-auto">

                        <Image
                            src="/assets/images/woman-white-bathing-suit.svg"
                            alt="woman in a teal bathing suit"
                            width={200}
                            height={300}
                        />
                    </div>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeInOut"
                        }}
                        className="lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2"
                    >
                        <p className="steps text-lg lg:text-xl mt-8 mb-8 mx-auto text-center md:text-left max-w-xs step-one text-dark leading-8 ">
                            <span className="font-black pr-2 block text-center text-3xl lg:text-4xl text-dark mb-4">
                            01
                            </span>
                            Look into a full length mirror or get someone to assist you
                        </p>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeInOut"
                        }}
                        className="lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-3"
                    >
                        <p className="steps text-lg lg:text-xl mt-2 mb-8 mx-auto text-center md:text-left max-w-xs step-three text-dark leading-8 ">
                            <span className="font-black pr-2 block text-center text-3xl lg:text-4xl text-dark mb-4">
                            02
                            </span>Use a measuring tape with inches and wrap around the fullest part of each area
                        </p>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.7,
                            ease: "easeInOut"
                        }}
                        className="lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-3"
                    >
                        <p className="steps text-lg lg:text-xl mt-2 mb-8 mx-auto text-center md:text-left max-w-xs step-two text-dark leading-8 ">
                            <span className="font-black pr-2 block text-center text-3xl lg:4xl text-dark mb-4">
                            03
                            </span>If you are between numbers round up to the nearest whole number in inches
                        </p>
                    </motion.div>

                    <motion.div
                         variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.9,
                            ease: "easeInOut"
                        }}
                        className="lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-3"
                    >
                        <p className="steps text-lg lg:text-xl mt-2 mb-8 mx-auto text-center md:text-left max-w-xs step-four text-dark leading-8 ">
                            <span className="font-black pr-2 block text-center text-3xl lg:text-4xl text-dark mb-4">
                            04
                            </span>Keep measuring tape horizontal to the floor for an accurate measurement
                        </p>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.13,
                            ease: "easeInOut"
                        }}
                        className="lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-4"
                    >
                        <p className="steps text-lg lg:text-xl mt-2 mb-8 mx-auto text-center md:text-left max-w-xs step-five text-dark leading-8 md:col-span-2 ">
                            <span className="font-black pr-2 block text-center text-3xl lg:text-4xl text-dark mb-4">
                            05
                            </span>Write down the measurements in inches as you go so you don&apos;t forget
                        </p>
                    </motion.div>
                </div>
            </div>

            {
                //Testimonials
            }

            <div className="testimonials-container flex justify-center items-center flex-col pt-4 pb-20 lg:mt-40">
                <h2 className="font-bold font-sans text-3xl text-dark mb-4 text-center lg:mb-12 lg:text-4xl lg:font-black lg:tracking-wide">Testimonials
                    <span className="text-base block mt-2 mb-4 font-medium">See what our previous clients have to say</span>
                </h2>
                <div className="testimonial-wrapper flex justify-center items-center flex-col lg:flex-row lg:max-w-6xl lg:justify-between lg:items-stretch">

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        className="testimonial w-11/12 p-8 border border-light shadow-lg lg:w-1/3 lg:mr-4 h-auto">
                        <Image
                            src="/assets/images/reviewer-1.jpg"
                            alt="reviewer one"
                            width={40}
                            height={40}
                            className="rounded-full mx-auto mb-8 h-auto"
                        />
                        <p className="text-sm leading-8 text-dark">&quot;I had no idea how important it is to know your body shape. Once
                        I found out what mine was, I was able to choose the items that were
                        perfect for my shape!&quot;
                        </p>
                        <p className="author text-right font-medium mt-8 text-xs text-light-green">- Betty Sue</p>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeInOut"
                        }}
                        className="testimonial w-11/12 p-8 border border-light shadow-lg my-4 mx-8 lg:w-1/3 lg:mx-0 lg:my-0 h-auto"
                        >
                        <Image
                            src="/assets/images/reviewer-2.jpg"
                            alt="reviewer two"
                            width={50}
                            height={50}
                            className="rounded-full mx-auto mb-8"
                        />
                        <p className="text-sm leading-8 text-dark">&quot;So thankful I took a chance and tried this calculator. I will
                        admit, I was skeptical about yet another thing that promises to
                        improve your style but this knowledge is priceless!&quot;
                        </p>
                        <p className="author text-right font-medium mt-8 text-xs text-light-green">- Tiffany White</p>
                    </motion.div>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeInOut"
                        }}
                        className="testimonial w-11/12 p-8 border border-light shadow-lg lg:w-1/3 lg:ml-4 h-auto"
                        >
                        <Image
                            src="/assets/images/reviewer-3.jpg"
                            alt="reviewer three"
                            width={50}
                            height={50}
                            className="rounded-full mx-auto mb-8"
                        />
                        <p className="text-sm leading-8 text-dark">
                            &quot;Not only is the body calculator such an amazing tool, I love that
                            there is such a helpful chatbot ready to answer any potential styling
                            questions you might have!&quot;
                        </p>
                        <p className="author text-right font-medium mt-8 text-xs text-light-green">- Rebecca Johnson</p>
                    </motion.div>
                </div>
            </div>
    </div>
  )
}

export default Main
