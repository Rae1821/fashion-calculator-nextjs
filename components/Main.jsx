import Image from 'next/image'


const Main = () => {

  return (
    <div>
        <div className="hero bg-black mb-32 h-screen bg-[url('/assets/images/women-shapes.jpg')] bg-cover bg-no-repeat bg-blend-overlay">
            <div className="z-10 relative hero--content w-3/4 flex flex-col text-left pl-12 pt-28 lg:max-w-lg">
                <p className="pre--title text-tropicana uppercase text-xs font-sans pb-2">premiere fashion secrets</p>
                <h1 className="title font-['Abril_Fatface'] drop-shadow-lg font-bold text-4xl my-2 text-light tracking-tight lg:text-6xl ">The Body Shape
                    <span className="block pt-2">Calculator</span>
                </h1>
                    <p className="description font-sans text-light font-light leading-8 pt-6 lg:max-w-md">
                        If you want to look and feel better in your clothes, without going on a diet or hitting the gym, I&apos;m going to let you in on a little secret...
                        <em>It&apos;s not about your weight, it&apos;s about your shape!</em>
                        <br /><br />
                        Knowing your body shape is the first step to looking better in your clothes. No more feeling overwhelemed while shopping for clothes and getting dressed will be a breeze.
                        Ready to get started?
                    </p>
                    <div className="animate-bounce mt-12 ml-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F27052" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
             </div>
        </div>
            {
                //How it works section
            }
        <div id="works" className="works--container flex flex-col-reverse mt-16 mx-auto pt-6 px-6 md:w-3/4 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:max-w-6xl lg:mt-24  lg:p-4">
            <div className="works-left hidden lg:block lg:w-3/4">
                <Image
                    src="/assets/images/fashion-img.png"
                    alt="illustration of a woman getting measured in front of a mirror"
                    width={400}
                    height={400}
                    style={{
                        borderRadius: '50%',
                    }}
                />
            </div>
                <div className="works-right mb-6 w-11/12">
                    <h2 className="text-center mb-6 font-extrabold text-3xl lg:text-left lg:text-4xl lg:pt-2 lg:pl-4 lg:mb-8 lg:font-black">
                        The Perks
                    </h2>
                    <div className="perks-container text-left lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8 lg:p-4">

                        <div className="perk max-w-md mt-0 mb-5 md:max-w-xl md:mb-8 lg:p-2 lg:w-11/12">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4">Process</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Easy Peasy</h3>
                            <p className="perk-description font-extralight leading-8 text-base">With just 3 measurements -
                            your shoulders, your waist, and your hips -
                            the body calculator compares the ratio of each to determine
                            your body shape</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:p-2 lg:w-11/12">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4">Benefit</p>
                            <h3 className="font-bold mt-5 mb-2 lg:text-2xl">Clarity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Knowing your shape clears up
                            all those frustrating moments when something looks good on
                            someone else but not on you. It is not you, it is your shape.</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:p-2 lg:w-11/12">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Body Positivity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Your body is not just a bunch of
                            individual parts you may or may not like. It’s a beautiful shape
                            and it’s time to see it and appreciate it as others do</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5 md:max-w-xl md:mb-8 lg:p-2 lg:w-11/12">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1 lg:w-1/3 lg:px-4">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2 lg:text-2xl">Shopping Is Fun</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Imagine a world where you actually
                            wear, and love, all the clothes you buy so they no longer sit in
                            the back of your closet with the tags on. </p>
                        </div>
                    </div>
                </div>
            </div>

            {
                //Measuring tips
            }
            <div className="measuring-tips my-16 bg-tropicana lg:p-8 lg:w-11/12 lg:mx-auto">
                <div className="measuring-tips-inner flex flex-col items-center justify-between p-4 md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-[1fr_300px_400px_300px_1fr] lg:gap-8 lg:pt-4 lg:pb-12">
                    <h2 className="font-sans font-bold text-dark text-2xl max-w-lg pt-8 pb-4 text-center md:col-span-2 md:row-span-1 md:mx-auto lg:col-start-3 lg:col-end-4 lg:text-4xl">Measuring Tips
                        <span className="block text-base mt-2 mb-4 font-medium ">Tips to get the most accurate result</span>
                    </h2>
                    <div className="max-w-1/2 md:col-span-2 md:row-span-1 md:mx-auto lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 lg:max-w-full">
                        <Image
                            src="/assets/images/waist-measure.jpg"
                            alt="measuring waist"
                            width={500}
                            height={500}
                            style={{
                                objectFit: 'contain',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </div>

                        <p className="steps text-lg mt-8 mb-8 mx-auto text-left max-w-xs step-one text-dark leading-8 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2">
                            <span className="font-black pr-2 block text-center text-2xl text-dark mb-4">
                            01
                            </span>Look into a full length mirror or get someone to assist you
                        </p>

                        <p className="steps text-lg mt-2 mb-8 mx-auto text-left max-w-xs step-two text-dark leading-8 lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-3">
                            <span className="font-black pr-2 block text-center text-2xl text-dark mb-4">
                            02
                            </span>If you are between numbers round up to the nearest whole number
                        </p>

                        <p className="steps text-lg mt-2 mb-8 mx-auto text-left max-w-xs step-three text-dark leading-8 lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-3">
                            <span className="font-black pr-2 block text-center text-2xl text-dark mb-4">
                            03
                            </span>Wrap the tape measure around the fullest part of each area
                        </p>

                        <p className="steps text-lg mt-2 mb-8 mx-auto text-left max-w-xs step-four text-dark leading-8 lg:col-start-4 lg:col-end-4 lg:row-start-3 lg:row-end-3">
                            <span className="font-black pr-2 block text-center text-2xl text-dark mb-4">
                            04
                            </span>Keep measuring tape horizontal to the floor
                        </p>

                        <p className="steps text-lg mt-2 mb-8 mx-auto text-left max-w-xs step-five text-dark leading-8 md:col-span-2 lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-4">
                            <span className="font-black pr-2 block text-center text-2xl text-dark mb-4">
                            05
                            </span>Write down the measurements as you go so you don&apos;t forget
                        </p>
                </div>

            </div>


            {
                //Testimonials
            }

            <div className="testimonials-container flex justify-center items-center flex-col pt-4 pb-20">
                <h2 className="font-bold font-sans text-3xl text-dark mb-4 text-center">Testimonials
                    <span className="text-base block mt-2 mb-4 font-medium">See what our previous clients have to say</span>
                </h2>
                <div className="testimonial-wrapper flex justify-center items-center flex-col">
                    <div className="testimonial w-11/12 p-8 border border-light shadow-lg">
                    <Image
                        src="/assets/images/reviewer-1.jpg"
                        alt="reviewer one"
                        width={50}
                        height={50}
                        className="rounded-full mx-auto mb-8"
                    />
                        <p className="text-sm leading-8 text-dark">&quot;I had no idea how important it is to know your body shape. Once
                        I found out what mine was, I was able to choose the items that were
                        perfect for my shape, no more guessing!&quot;
                        </p>
                        <p className="author text-center font-bold mt-8 text-sm">Betty Sue</p>
                    </div>
                    <div className="testimonial w-11/12 p-8 border border-light shadow-lg my-4 mx-8">
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
                        <p className="author text-center font-bold mt-8 text-sm">Tiffany White</p>
                    </div>
                    <div className="testimonial w-11/12 p-8 border border-light shadow-lg">
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
                        <p className="author text-center font-bold mt-8 text-sm">Rebecca Johnson</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Main
