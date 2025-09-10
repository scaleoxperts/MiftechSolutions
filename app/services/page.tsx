import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
    return (
        <>
            <PageTitle />
            <ServicesHighlightSection />
            <BusinessRecruitmentSection />
            <ConsultingServicesSection />
            <TestimonialsSection />
        </>
    );
};

const PageTitle = () => {
    return (
        <section className="page-title-big-typography bg-dark-gray ipad-top-space-margin xs:py-0" style={{ backgroundImage: "url('/images/demo-consulting-services-bg.jpg')" }}>
            <div className="opacity-light bg-dark-gray"></div>
            <div className="container">
                <div className="row items-center justify-center small-screen">
                    <div className="col-lg-6 col-md-8 relative text-center page-title-extra-small">
                        <h1 className="mb-1.5 alt-font text-white font-normal"><span className="opacity-60">Helping your business</span></h1>
                        <h2 className="mb-0 text-white alt-font ls-[-2px] text-shadow-double-large font-medium">Our services</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesHighlightSection = () => {
    return (
        <section className="p-0 bg-very-light-gray">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-center items-center border-t border-color-light-medium-gray">
                    <ServiceHighlightCard icon="line-icon-Cursor-Click2" title="Organizational Transformation" description="Comprehensive solutions for effective business change. Focus on aligning strategy with growth objectives." />
                    <ServiceHighlightCard icon="line-icon-Money-Bag" title="HRMS Implementation" description="Seamless integration of advanced HR management systems. Partnership with Zoho for scalable solutions." />
                    <ServiceHighlightCard icon="line-icon-Like" title="Talent Acquisition" description="Recruitment strategies to find top-tier talent. Extensive network of HR experts and partners." />
                    <ServiceHighlightCard icon="line-icon-Archery-2" title="Capability Building" description="Programs to build skills within your workforce. Focus on continuous professional growth." />
                </div>
            </div>
        </section>
    );
};

const ServiceHighlightCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className="col fancy-text-box-style-01 border-color-light-medium-gray p-0">
            <div className="text-box-wrapper items-center flex">
                <div className="relative text-center w-full">
                    <div className="text-box last-paragraph-no-margin p-14">
                        <i className={`${icon} icon-extra-large block mb-5 text-base-color`}></i>
                        <span className="alt-font text-dark-gray font-medium text-xl lg:text-lg ls-[-0.5px]">{title}</span>
                    </div>
                    <div className="text-box-hover p-16 lg:p-12 md:p-17 sm:p-12 xs:p-17">
                        <p className="mb-4">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BusinessRecruitmentSection = () => {
    return (
        <section className="relative">
            <div className="container">
                <div className="row items-center justify-center text-center lg:text-start">
                    <div className="col-xl-5 col-lg-6 md:mb-12">
                        <h2 className="text-dark-gray font-semibold ls-[-2px]">We help business to recruite.</h2>
                        <span className="font-semibold text-xl mb-1.5 text-dark-gray inline-block">Innovative strategies for workforce management.</span>
                        <p className="w-4/5 sm:w-full mx-auto lg:mx-0">Diverse HR Services: Whether you need Blue Collar staffing, IT talent, Zoho HRMS subscriptions, payroll management, permanent placements, or learning and development programs—Luminar Consulting is here to elevate your HR strategy. Our 50 in-house consultants, supported by 700+ skilled specialists, bring top-tier experience from leading HR and consulting firms.</p>
                        <Link href="/about" className="btn btn-medium btn-dark-gray btn-box-shadow btn-round-edge mt-2.5">About company</Link>
                    </div>
                    <div className="col-lg-6 col-md-11 offset-xl-1">
                        <figure className="relative md:ps-10 rounded-md">
                            <Image src="/images/demo-consulting-services-02.jpg" alt="" className="rounded-md w-full" width={500} height={500}/>
                            <figcaption className="absolute bottom-[-20px] xs:bottom-[-60px] left-[-50px] lg:left-[-20px] xs:left-0 text-white text-center w-3/5 lg:w-[70%] md:w-3/5 xs:w-[280px]">
                                <div className="atropos-scale overflow-hidden rounded-md">
                                    <div className="atropos-rotate">
                                        <div className="atropos-inner rounded-md bg-base-color text-white p-16 sm:p-5 sm:pt-8 sm:pb-8">
                                            <i className="line-icon-Money-Bag icon-double-large mb-6"></i>
                                            <span className="text-xl sm:text-lg mb-1.5 block">Endless Opportunity</span>
                                            <p className="opacity-70 font-light">Aligns strategy with company goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ConsultingServicesSection = () => {
    return (
        <section className="bg-very-light-gray">
            <div className="container">
                <div className="row justify-center mb-4">
                    <div className="col-lg-7 text-center">
                        <span className="font-semibold tracking-[1px] text-sm alt-font inline-block uppercase mb-1.5 text-base-color">Innovative solutions</span>
                        <h2 className="alt-font text-dark-gray font-semibold ls-[-2px]">Consulting services</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center">
                    <ConsultingServiceCard icon="line-icon-Address-Book2" title="HRMS Implementation" description="Integrating state-of-the-art Human Resource Management Systems for efficient operations." />
                    <ConsultingServiceCard icon="line-icon-Money-Bag" title="Wellness & Counseling" description="Promoting employee well-being with tailored wellness and counseling services." />
                    <ConsultingServiceCard icon="line-icon-Pie-Chart2" title="Organizational Transformation" description="Implementing strategies to enhance organizational effectiveness and adaptability." />
                    <ConsultingServiceCard icon="line-icon-Megaphone" title="Zoho HRMS Solutions" description="Delivering scalable and customized HRMS solutions through a partnership with Zoho." />
                    <ConsultingServiceCard icon="line-icon-MaleFemale" title="Talent Acquisition" description="Providing innovative recruitment solutions to attract and retain the best talent." />
                    <ConsultingServiceCard icon="line-icon-Basket-Coins" title="Capability Building" description="Offering training and development programs to elevate skills and capabilities." />
                </div>
            </div>
        </section>
    );
};

const ConsultingServiceCard = ({ icon, title, description } : {icon: string, title:string, description:string}) => {
    return (
        <div className="col icon-with-text-style-04 mb-8">
            <div className="feature-box h-full justify-start rounded-md bg-white shadow-lg hover:shadow-2xl p-12 md:p-10">
                <div className="feature-box-icon">
                    <a href="#"><i className={`${icon} icon-double-large text-base-color mb-6`}></i></a>
                </div>
                <div className="feature-box-content">
                    <a href="#" className="inline-block alt-font text-dark-gray font-semibold mb-1.5 text-lg">{title}</a>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="relative border-b border-color-extra-medium-gray">
            <div className="container">
                <div className="row justify-center mb-2">
                    <div className="col-lg-7 text-center">
                        <span className="font-semibold tracking-[1px] text-sm alt-font inline-block uppercase mb-1.5 text-base-color">What Our CLients Say!</span>
                        <h2 className="alt-font text-dark-gray font-semibold ls-[-2px]">Client testimonials</h2>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center">
                    <TestimonialCard avatar="/images/avtar-24.jpg" name="Ravi Kumar" company="EDELWEISS TOKYO" quote="Luminar transformed our HR operations with their innovative, tailored solutions." />
                    <TestimonialCard avatar="/images/avtar-25.jpg" name="Matthew P" company="Max Life" quote="Exceptional talent acquisition and HR services, exceeding our expectations consistently." />
                    <TestimonialCard avatar="/images/avtar-26.jpg" name="Mukesh Singh" company="Kotak life" quote="I personally enjoyed the energy and the professional support the whole team gave to into website." />
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ avatar, name, company, quote } : {avatar:string, name:string, company:string, quote:string}) => {
    return (
        <div className="col md:mb-8">
            <div className="testimonials testimonials-style-05">
                <div className="testimonials-bubble rounded-md border border-color-extra-medium-gray bg-white pt-8 pb-8 px-10 lg:p-6 mb-9">
                    <p>{quote}</p>
                </div>
                <div className="author px-5">
                    <Image className="rounded-full w-[85px] me-4" src={avatar} alt={name} width={85} height={85}/>
                    <div className="inline-block align-middle leading-5">
                        <span className="font-semibold text-lg text-dark-gray block mb-1.5">{name}</span>
                        <div className="text-md">{company}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
