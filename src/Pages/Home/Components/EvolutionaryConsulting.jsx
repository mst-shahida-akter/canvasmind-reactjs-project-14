import CountUp from "react-countup";
import consultingFirmLearnMoreIcon from "./../../../assets/images/Home/consulting-firm/lern-more-icon.svg";
import cwImg from "./../../../assets/images/Home/evolutionary-consulting/cw-img.png";
import rightBgImg from "./../../../assets/images/Home/evolutionary-consulting/right-bg.png";
import rightArrowIcon from "./../../../assets/images/Home/evolutionary-consulting/right-arrow.svg";
import facebookIcon from "./../../../assets/images/Home/evolutionary-consulting/facebook.svg";
import instagramIcon from "./../../../assets/images/Home/evolutionary-consulting/instagram.svg";//
import twitterIcon from "./../../../assets/images/Home/evolutionary-consulting/twitter.svg";


const EvolutionaryConsulting = () => {
  return (
    <section className="">
      <div className="cus-container">
        <div className="flex justify-between">
          <div className="max-w-[40.0625rem] space-y-[3.75rem]">
            <h2 className="inter-56-600-110-2 bg-[linear-gradient(181deg,#13151F_0.67%,rgba(30,34,56,0.00)_152.64%)] bg-clip-text text-transparent">
              Evolutionary Consulting Organization
            </h2>

            <div className="flex flex-col items-start gap-[42px] rounded-[32px] bg-white p-[48px] shadow-[0px_44px_104px_rgba(197,197,197,0.25)]">
              <h3 className="inter-28-600-38-cap text-[#1E2238]">
                We&apos;ve created a dynamic platform with the goal of enabling
              </h3>
              <p className="inter-18-400-30 text-[#3D424D]">
                Cognizant of the entire spectrum, we meticulously navigate
                through the phases, commencing from the germination of an idea,
                extending to the intricate stages of expansion, resiliently
                embracing setbacks as indispensable catalysts for progress. In a
                world where the spotlight often fixates on a fortunate few,
              </p>
              <button className="mt-[0.625rem] flex items-center justify-center gap-[24px] rounded-[58px] border border-[#CD43FF] bg-white p-[8px_8px_8px_24px]">
                <span className="inter-16-700-140 text-[#1E2238]">
                  Learn More
                </span>
                <img
                  src={consultingFirmLearnMoreIcon}
                  alt="consulting-firm-learn-more-icon"
                />
              </button>
            </div>
          </div>
          <div className="flex max-w-[28.9375rem] flex-col justify-between">
            <p className="inter-18-400-30 text-[#3D424D]">
              We&apos;ve created a platform where aspiring business owners can
              learn the fine art of starting and growing their companies
            </p>
            <div
              className="space-y-5 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${rightBgImg})`,
              }}
            >
              <div className="flex gap-5">
                <div className="flex w-fit flex-col items-start gap-[16px] rounded-[16px] bg-white p-[16px] shadow-[0px_44px_104px_rgba(197,197,197,0.25)]">
                  <CountUp
                    end={12}
                    suffix="+"
                    className="inter-56-600-64 text-[#171B26]"
                  />
                  <span className="inter-20-500-24 text-[#585C67]">
                    Awards Gained
                  </span>
                </div>
                <div className="flex w-fit flex-col items-start gap-[16px] rounded-[16px] bg-white p-[16px] shadow-[0px_44px_104px_rgba(197,197,197,0.25)]">
                  <CountUp
                    end={18}
                    suffix="+"
                    className="inter-56-600-64 text-[#171B26]"
                  />
                  <span className="inter-20-500-24 text-[#585C67]">
                    Years of Experience
                  </span>
                </div>
              </div>
              <div className="flex w-fit items-start gap-[16px] rounded-[16px] bg-white p-[16px] shadow-[0px_44px_104px_rgba(197,197,197,0.25)]">
                <div className="flex flex-col items-start gap-[16px]">
                  <CountUp
                    end={432}
                    className="inter-56-600-64 text-[#171B26]"
                  />
                  <p className="inter-20-500-24 text-[#585C67]">
                    Customers worldwide
                  </p>
                </div>
                <img src={cwImg} alt="cw-img" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img src={rightArrowIcon} alt="right-arrow-icon" />
              <img src={facebookIcon} alt="facebook-icon" />
              <img src={instagramIcon} alt="instagram-icon" />
              <img src={twitterIcon} alt="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionaryConsulting;
