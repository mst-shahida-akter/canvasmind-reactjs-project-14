import bgImg1 from "./../../../assets/images/Home/significant-business/bg-1.png";
import bgImg2 from "./../../../assets/images/Home/significant-business/bg-2.png";
import chartImg from "./../../../assets/images/Home/significant-business/chart-img.png";
import bgBottomImg from "./../../../assets/images/Home/significant-business/bg-b-l-img.png";

import per1 from "./../../../assets/images/Home/significant-business/per-1.png";
import per2 from "./../../../assets/images/Home/significant-business/per-2.png";
import per3 from "./../../../assets/images/Home/significant-business/per-3.png";
import per4 from "./../../../assets/images/Home/significant-business/per-4.png";

import icon1 from "./../../../assets/images/Home/significant-business/icon-1.svg";
import icon2 from "./../../../assets/images/Home/significant-business/icon-2.svg";
import icon3 from "./../../../assets/images/Home/significant-business/icon-3.svg";
import icon4 from "./../../../assets/images/Home/significant-business/icon-4.svg";
import icon5 from "./../../../assets/images/Home/significant-business/icon-5.svg";
import icon6 from "./../../../assets/images/Home/significant-business/icon-6.svg";

const SignificantBusiness = () => {
  return (
    <section className="relative bg-[#FFF]">
      <div className="cus-container">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <div className="flex items-center gap-6">
              <div className="w-[260px] space-y-5 rounded-3xl bg-[#FD65A6] p-8">
                <img src={icon1} alt="icon-1" />
                <p className="inter-18-600 text-white">
                  Understanding, Research and Bulild
                </p>
              </div>
              <div className="">
                <div className="flex -space-x-2">
                  <img src={per1} alt="per-1" />
                  <img src={per2} alt="per-2" />
                  <img src={per3} alt="per-3" />
                  <img src={per4} alt="per-4" />
                </div>
                <div className="mt-4 flex gap-1">
                  <img src={icon2} alt="icon-2" className="w-[18px]" />
                  <img src={icon2} alt="icon-2" className="w-[18px]" />
                  <img src={icon2} alt="icon-2" className="w-[18px]" />
                  <img src={icon2} alt="icon-2" className="w-[18px]" />
                  <img src={icon2} alt="icon-2" className="w-[18px]" />
                </div>
                <p className="inter-14-400-24 text-[#3D424D]">
                  5.0 (10k reviews)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="max-w-[18.75rem] rounded-[2rem] p-[1.625rem_0.875rem]">
                <p className="inter-18-400-30 text-center text-[#3D424D]">
                  Sales Performance
                </p>
                <img
                  src={chartImg}
                  alt="chart-img"
                  className="mt-[12px] w-full"
                />
                <div className="flex items-center gap-2">
                  <span className="inter-20-700 text-[#2D3340]">30%</span>
                  <span className="inter-12-400-19">
                    Your sales performance is 30% better compare to last month
                  </span>
                </div>
              </div>
              <div>
                <img src={bgImg1} alt="bg-img-1" className="ml-auto" />
                <img src={bgImg2} alt="bg-img-2" />
              </div>
            </div>
          </div>
          <div className="w-1/2 space-y-12">
            <h2 className="inter-56-600-110-2 bg-[linear-gradient(181deg,#13151F_0.67%,rgba(30,34,56,0.00)_152.64%)] bg-clip-text text-transparent">
              Significant Business Contributions
            </h2>
            <div className="space-y-5">
              {[
                "Setting Processes, Delegating",
                "Dive into Project Management",
                "Understanding, Research and Bulild",
                "Report and Evaluate ",
              ].map((text, index) => {
                return (
                  <div
                    className="flex items-center justify-between rounded-[16px] bg-[#FAFAFA] p-[20px_30px]"
                    key={index}
                  >
                    <div className="flex items-center gap-[16px]">
                      <img src={icon5} alt="icon-1" />
                      <span className="inter-18-400-30 text-[#3D424D]">
                        {text}
                      </span>
                    </div>
                    <img src={icon6} alt="icon-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <img
        src={bgBottomImg}
        alt="bg-bottom-img"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
};

export default SignificantBusiness;
