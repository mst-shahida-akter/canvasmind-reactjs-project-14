import benefitsBg from "./../../../assets/images/Home/benefits-section/benifits-bg.png";
import benefitsIcon1 from "./../../../assets/images/Home/benefits-section/icon1.svg";
import benefitsIcon2 from "./../../../assets/images/Home/benefits-section/icon2.svg";
import benefitsIcon3 from "./../../../assets/images/Home/benefits-section/icon3.svg";
import benefitsIcon4 from "./../../../assets/images/Home/benefits-section/icon4.svg";
import benefitsArrowRightIcon from "./../../../assets/images/Home/benefits-section/arrow-right.svg";

import consultingFirmLearnMoreIcon from "./../../../assets/images/Home/consulting-firm/lern-more-icon.svg";

const BenefitsSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${benefitsBg})`,
      }}
    >
      <div className="cus-container">
        <div className="flex items-center justify-between">
          <div className="max-w-[400px]">
            <h2 className="inter-56-700-70-112 text-white">
              We provide benefits that are convenient{" "}
              <span
                className="bg-[linear-gradient(99deg,#FFF_-6.45%,#000_55.32%)]"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", // text-fill-color: transparent;
                }}
              >
                for you.
              </span>
            </h2>
            <p className="inter-18-500-140 mt-6 text-[#D2D3D6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text
            </p>
            <button className="mt-[3.5rem] flex items-center justify-center gap-[24px] rounded-[58px] border border-[#CD43FF] bg-white p-[8px_8px_8px_24px]">
              <span className="inter-16-700-140 text-[#1E2238]">
                Learn More
              </span>
              <img
                src={consultingFirmLearnMoreIcon}
                alt="consulting-firm-learn-more-icon"
              />
            </button>
          </div>
          <div className="flex max-w-[39.75rem] flex-wrap gap-[42px]">
            {[
              {
                id: 1,
                title: "Tailored Software Development",
                description:
                  "Stay on top of your tasks and stay informed about what's happening.",
                icon: benefitsIcon1,
              },
              {
                id: 2,
                title: "Effortless Rapid Communication.",
                description:
                  "Stay on top of your tasks and stay informed about what's happening.",
                icon: benefitsIcon2,
              },
              {
                id: 3,
                title: "Customized Software Development",
                description:
                  "Stay on top of your tasks and stay informed about what's happening.",
                icon: benefitsIcon3,
              },
              {
                id: 4,
                title: "Quickly Attain Influential Abilities.",
                description:
                  "Stay on top of your tasks and stay informed about what's happening.",
                icon: benefitsIcon4,
              },
            ].map(({ id, title, description, icon }) => {
              return (
                <div
                  key={id}
                  className={`h-fit max-w-[18.5rem] rounded-[16px] border-[0.6px] border-solid border-white bg-[var(--Color-Scheme-Secondary,#262223)] p-6 opacity-80 ${
                    id === 1 ? "mt-[200px]" : ""
                  } ${id === 4 ? "mt-[-200px]" : ""}`}
                >
                  <img src={icon} alt="benefits-icon" />
                  <div className="mt-5 space-y-2">
                    <h3 className="inter-24-600-120 text-white">{title}</h3>
                    <p className="inter-16-500-150 text-[#7E8492]">
                      {description}
                    </p>
                  </div>
                  <img
                    src={benefitsArrowRightIcon}
                    alt="benefits-arrow-right-icon"
                    className="mt-5"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
