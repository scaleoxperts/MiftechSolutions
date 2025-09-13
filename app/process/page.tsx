
const ProcessPage = () => {
  return (
    <>
      <PageTitle />
      <BusinessProcessSection />
      <FaqSection />
    </>
  );
};

const PageTitle = () => {
  return (
    <section className="page-title-big-typography bg-dark-gray ipad-top-space-margin xs:py-0" style={{ backgroundImage: "url('/images/demo-consulting-how-we-work-bg.jpg')" }}>
      <div className="opacity-light bg-dark-gray"></div>
      <div className="container">
        <div className="row items-center justify-center small-screen">
          <div className="col-lg-6 col-md-8 relative text-center page-title-extra-small">
            <h1 className="mb-1.5 alt-font text-white font-normal"><span className="opacity-60">See how can we help</span></h1>
            <h2 className="mb-0 text-white alt-font ls-[-2px] text-shadow-double-large font-medium">Our process</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessProcessSection = () => {
  return (
    <section className="bg-very-light-gray big-section">
      <div className="container">
        <div className="row items-center justify-center text-center lg:text-start">
          <div className="col-lg-5 col-md-10 md:mb-12 xs:mb-10">
            <h2 className="font-semibold text-dark-gray ls-[-2px] mb-0">Explore the simple business process.</h2>
          </div>
          <div className="col-xl-2 offset-xl-2 offset-lg-1 col-md-3 col-sm-4 text-center xs:mb-8">
            <span className="alt-font text-dark-gray font-semibold text-8xl ls-[-2px] relative">10K
              <span className="bg-base-color absolute left-0 w-1/2 h-2.5 bottom-2.5"></span>
            </span>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 text-center sm:text-start">
            <span className="text-dark-gray text-xl font-semibold inline-block mb-1.5">Recruitment Completed</span>
            <p className="w-[90%] lg:w-full">At Luminar Consultancy, a flagship product of Kaushal Headway Private Limited, we believe in delivering HR solutions that are precise, resilient, and tailored to each client&apos;s needs</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-20 md:mt-12">
          <ProcessStep icon="line-icon-Idea-5" title="Discovery and Understanding" description="We start by understanding your specific HR needs, challenges, and goals." step="01" />
          <ProcessStep icon="line-icon-Fountain-Pen" title="Customized Solution Design" description="Based on our findings, we design a customized HR strategy that aligns with your business objectives." step="02" />
          <ProcessStep icon="line-icon-Loading-2" title="Implementation and Execution" description="Our network of 700+ specialists work closely with your team to seamless solutions." step="03" />
          <ProcessStep icon="line-icon-Juice" title="Long-Term Partnership and Growth" description="We believe in building long-term relationships with our clients." step="04" />
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ icon, title, description, step }: { icon: string, title: string, description: string, step: string }) => {
  return (
    <div className="col text-center process-step-style-02 hover-box md:mb-12">
      <i className={`${icon} text-base-color icon-double-large mb-5`}></i>
      <span className="block alt-font text-dark-gray mb-1.5 text-xl font-semibold">{title}</span>
      <p className="inline-block w-3/4 lg:w-[85%]">{description}</p>
      <div className="process-step-icon-box relative mt-8">
        <span className="progress-step-separator bg-dark-gray opacity-10 w-[55%] h-px"></span>
        <div className="process-step-icon flex justify-center items-center mx-auto bg-white h-20 w-20 text-lg rounded-full text-dark-gray shadow-lg alt-font font-medium">
          <span className="number relative z-10 font-semibold">{step}</span>
          <div className="box-overlay bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
    return (
        <section className="bg-very-light-gray">
            <div className="container">
                 <div className="row justify-center mb-3">
                     <div className="col-lg-7 text-center">
                         <span className="font-semibold tracking-[1px] text-sm alt-font inline-block uppercase mb-1.5 text-base-color">Frequently asked questions</span>
                         <h2 className="alt-font text-dark-gray font-semibold ls-[-2px]">How can we help?</h2>
                     </div>
                 </div>
                 <div className="row justify-center">
                     <div className="col-xl-10">
                         <div className="row row-cols-1 row-cols-md-2">
                             <FaqItem
                                 question="How can Luminar Consulting support businesses in organizational transformation?"
                                 answer="Luminar offers tailored strategies to realign your business structure, enhancing efficiency and growth."
                             />
                             <FaqItem
                                 question="What role does Luminar play in talent acquisition?"
                                 answer="We connect you with top industry talent to build a strong, skilled workforce."
                             />
                             <FaqItem
                                 question="How does Luminar's partnership with Zoho benefit clients?"
                                 answer="Our collaboration with Zoho delivers advanced HRMS solutions, optimizing HR management and productivity."
                             />
                             <FaqItem
                                 question="Can Luminar Consulting improve employee development in our organization?"
                                 answer="Yes, our capability-building programs focus on continuous learning and skill enhancement for teams."
                             />
                         </div>
                     </div>
                 </div>
                 <div className="row justify-center">
                     <div className="col-12 text-center mt-6">
                         <h6 className="alt-font text-dark-gray ls-[-1px] mb-0">Didn&apos;t find the right response? <a href="https://wa.me/919202313083?text=Hello,%20I%20have%20a%20unique%20query!" className="underline text-dark-gray font-semibold inline-block">Ask Directly</a></h6>
                     </div>
                 </div>
             </div>
        </section>
    );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <div className="col mb-8">
            <div className="bg-white h-full p-12 xs:p-8 shadow-lg rounded-md">
                <span className="text-dark-gray mb-1.5 inline-block text-xl font-semibold">{question}</span>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default ProcessPage;
