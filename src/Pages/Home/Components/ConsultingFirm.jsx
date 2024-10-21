import consultingFirmImg from "./../../../assets/images/Home/consulting-firm/consulting-firm-img.png";
import consultingFirmBgImg1 from "./../../../assets/images/Home/consulting-firm/bg-img-1.png";
import consultingFirmBgImg2 from "./../../../assets/images/Home/consulting-firm/bg-img-2.png";
import consultingFirmLearnMoreIcon from "./../../../assets/images/Home/consulting-firm/lern-more-icon.svg";

const ConsultingFirm = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2">
        <img src={consultingFirmBgImg1} alt="consulting-firm-bg-img-1" />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <img src={consultingFirmBgImg2} alt="consulting-firm-bg-img-2" />
      </div>
      <div className="cus-container z-10">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <img
              src={consultingFirmImg}
              alt="consulting-firm-img"
              className="mx-auto"
            />
          </div>
          <div className="w-1/2 space-y-[30px]">
            <h2 className="inter-56-600-110-2 bg-[linear-gradient(181deg,#13151F_0.67%,rgba(30,34,56,0.00)_152.64%)] bg-clip-text text-transparent">
              The Development of Our Consulting Firm
            </h2>
            <p className="inter-18-400-30 text-[#3D424D]">
              We have developed a platform that teaches prospective
              entrepreneurs the fine art of launching and expanding their
              businesses.
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
      </div>
    </section>
  );
};

export default ConsultingFirm;
