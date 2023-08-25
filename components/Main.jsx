import Image from 'next/image'

const Main = () => {

  return (
    <div>
        <div className="hero mb-32 h-full">
            <div className="hero--content w-3/4 flex flex-col text-dark text-left pl-4">
                <p className="pre--title text-tropicana uppercase text-xs font-sans">premiere fashion secrets</p>
                <h1 className="title font-serif font-bold text-3xl my-2">The Body Shape
                    <span className="block">Calculator</span>
                </h1>
                    <p className="description font-sans">
                        If you want to look and feel better in your clothes, without going on a diet or hitting the gym, I&apos;m going to let you in on a little secret...
                        <em>It&apos;s not about your weight, it&apos;s about your shape!</em>
                        <br /><br />
                        Knowing your body shape is the first step to looking better in your clothes. No more feeling overwhelemed while shopping for clothes and getting dressed will be a breeze.
                        Ready to get started?
                    </p>
             </div>
        </div>
            {
                //How it works section
            }
        <div id="works" className="works--container flex flex-col-reverse mt-16 pt-6 px-6">
            <div className="works-left"></div>
                <div className="works-right mb-6">
                    <h2 className="text-center mb-6 font-extrabold text-3xl">The Perks</h2>
                    <div className="perks-container text-left">
                        <div className="perk max-w-lg mt-0 mb-5">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1">Process</p>
                            <h3 className="font-bold text-lg mt-5 mb-2">Easy Peasy</h3>
                            <p className="perk-description font-extralight leading-8 text-base">With just 3 measurements -
                            your shoulders, your waist, and your hips -
                            the body calculator compares the ratio of each to determine
                            your body shape</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2">Clarity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Knowing your shape clears up
                            all those frustrating moments when something looks good on
                            someone else but not on you. It is not you, it is your shape.</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2">Body Positivity</h3>
                            <p className="perk-description font-extralight leading-8 text-base">Your body is not just a bunch of
                            individual parts you may or may not like. It’s a beautiful shape
                            and it’s time to see it and appreciate it as others do</p>
                        </div>

                        <div className="perk max-w-lg mt-0 mb-5">
                            <p className="pill bg-light-turq w-1/5 text-center rounded-xl text-light mb-5 uppercase text-xs py-1">Benefit</p>
                            <h3 className="font-bold text-lg mt-5 mb-2">Shopping made easy</h3>
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
            <div className="measuring-tips my-16 bg-tropicana">
                <div className="measuring-tips-inner flex flex-col items-center justify-between p-4">
                    <h2 className="font-sans font-bold text-dark text-2xl max-w-lg pt-8 pb-4 text-center">Measuring Tips
                        <span className="block text-base mt-2 font-medium">Tips to get the most accurate result</span>
                    </h2>
                    <Image
                        src="/assets/images/waist-measure.jpg"
                        alt="measuring waist"
                        width={300}
                        height={300}
                    />
                        <p className="steps step-one"><span>01</span>Look into a full length mirror or get someone to assist you</p>
                        <p className="steps step-two"><span>02</span>If you are between numbers round up to the nearest whole number</p>
                        <p className="steps step-three"><span>03</span>Wrap the tape measure around the fullest part of each area</p>
                        <p className="steps step-four"><span>04</span>Keep measuring tape horizontal to the floor</p>
                        <p className="steps step-five"><span>05</span>Write down the measurements as you go so you don`&apos;`t forget</p>
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
