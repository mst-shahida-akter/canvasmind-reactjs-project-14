import heroBg from "./../../../assets/images/Home/hero-section/home-hero-bg.png";
import arrowNarrowRight from "./../../../assets/images/Home/hero-section/arrow-narrow-right.svg";
import star from "./../../../assets/images/Home/hero-section/star.svg";
import cardBg2 from "./../../../assets/images/Home/hero-section/card-bg-2.png";
import knowledge from "./../../../assets/images/Home/hero-section/knowledge.svg";
import cardBg3 from "./../../../assets/images/Home/hero-section/card-bg-3.png";
import cardBg3Icon from "./../../../assets/images/Home/hero-section/Group 1171274923.svg";
import card3Bg from "./../../../assets/images/Home/hero-section/card3bg.png";
import starRating from "./../../../assets/images/Home/hero-section/star-ratin.svg";

const HeroSection = () => {
  return (
    <section
      className="bg-hero-bg bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="cus-container">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[56.75rem] space-y-[1.25rem] text-center">
            <p className="inter-20-400-20-02 mx-auto w-fit rounded-[100px] border border-[var(--qqsqs,#CD43FF)] bg-[radial-gradient(88.08%_47.81%_at_47.71%_39.96%,_#FFF_0%,_#F0CEBC_100%)] bg-clip-text p-[0.625rem_1.25rem] text-transparent">
              #1 Excellent Business Advisor
            </p>
            <h1 className="inter-100-600-110-2 text-white">
              Boost the status of your{" "}
              <span
                className="bg-[linear-gradient(94deg,#FFF_34.17%,#000_86.1%)]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozBackgroundClip: "text",
                  MozTextFillColor: "transparent",
                }}
              >
                company.
              </span>
            </h1>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <button className="rounded-[58px] border border-[#CD43FF] bg-[linear-gradient(102deg,#CD43FF_21.41%,#FD65A6_34.68%,#FC9651_67.09%,#FFBD72_87.19%)] p-[0.5rem_1rem]">
              <span className="inter-16-500-24-cap text-white">
                Get Started
              </span>
            </button>
            <button className="rounded-[100px] bg-[radial-gradient(88.08%_47.81%_at_47.71%_39.96%,_#FFF_0%,_#F0CEBC_100%)]">
              <img src={arrowNarrowRight} alt="arrow-narrow-right" />
            </button>
            <button className="inter-16-500-24-cap p-[0.5rem_1rem] text-white underline">
              Learn More
            </button>
          </div>
          <div className="mt-12 flex items-end gap-6">
            <div className="">
              <div className="flex max-w-[14.875rem] flex-col items-center justify-center gap-2 rounded-[2rem] bg-[#FFBD72] p-[3.4375rem_0.875rem]">
                <img src={star} alt="star" />
                <span className="inter-16-400-24-cap text-center text-[#2D3340]">
                  Greetings from Lead, your business associate.
                </span>
              </div>
            </div>
            <div className="mb-10">
              <div
                className="max-w-[14.875rem] space-y-[10px] rounded-[32px] border border-[#fff] bg-cover bg-center bg-no-repeat p-[3.9375rem_1.3125rem] text-center"
                style={{
                  backgroundImage: `url(${cardBg2})`,
                }}
              >
                <h3 className="inter-56-600-64 text-white">30%</h3>
                <p className="inter-16-400-24-cap text-[#D2D3D6]">
                  increase in overall profit due to business process
                  optimization
                </p>
              </div>
            </div>
            <div className="">
              {" "}
              <div
                className="max-w-[14.875rem] space-y-[10px] rounded-[32px] border border-[#fff] bg-cover bg-center bg-no-repeat p-[3.9375rem_1.3125rem] text-center"
                style={{
                  backgroundImage: `url(${cardBg3})`,
                }}
              >
                <img src={knowledge} alt="knowledge" className="mx-auto" />

                <p className="inter-16-400-24-cap text-[#D2D3D6]">
                  Knowledge and Skill Personal strategy Innovation & Technology
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex max-w-[14.875rem] flex-col justify-between gap-6">
                <div className="relative rounded-[28px] border border-white bg-[rgba(255,255,255,0.12)] p-8 backdrop-blur-[16px]">
                  <p className="inter-24-500-32 text-[#D2D3D6]">
                    Ready to get started?
                  </p>
                  <img
                    src={cardBg3Icon}
                    alt="card-bg-3-icon"
                    className="absolute right-4 top-4"
                  />
                </div>
                <div
                  className="bg-contain bg-center bg-no-repeat p-7"
                  style={{
                    backgroundImage: `url(${card3Bg})`,
                  }}
                >
                  <h4 className="inter-24-700 flex items-center gap-2 text-white">
                    <img src={starRating} alt="star-rating" />
                    4,8
                  </h4>
                  <p className="inter-16-400-26 text-white">
                    from 150,000+ Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
