import { useState } from "react";
import textPer1 from "./../../../assets/images/Home/team-section/texm-per-1.png";
import textPer2 from "./../../../assets/images/Home/team-section/texm-per-2.png";
import textPer3 from "./../../../assets/images/Home/team-section/texm-per-3.png";
import textPer4 from "./../../../assets/images/Home/team-section/texm-per-4.png";
import { motion } from "framer-motion";

const TeamSection = () => {
  const [activeImg, setActiveImg] = useState(1);
  return (
    <section className="">
      <div className="cus-container">
        <div className="space-y-[3.75rem]">
          <div className="space-y-8 text-center">
            <h2 className="inter-56-600-110-2 bg-[linear-gradient(181deg,#13151F_0.67%,rgba(30,34,56,0.00)_152.64%)] bg-clip-text text-transparent">
              Get to know our amazing Team
            </h2>
            <p className="inter-18-400-30 mx-auto max-w-[627px] text-[#3D424D]">
              We&apos;ve created a platform where aspiring business owners can
              learn the fine art of starting and growing their companies
            </p>
          </div>
          <div className="flex gap-x-5">
            {[
              {
                id: 1,
                image: textPer1,
                name: "Cameron Williamson",
                position: "Product Designer",
              },
              {
                id: 2,
                image: textPer2,
                name: "Cameron Williamson",
                position: "Product Designer",
              },
              {
                id: 3,
                image: textPer3,
                name: "Cameron Williamson",
                position: "Product Designer",
              },
              {
                id: 4,
                image: textPer4,
                name: "Cameron Williamson",
                position: "Product Designer",
              },
            ].map(({ id, image, name, position }) => {
              const isActive = activeImg === id;
              return (
                <motion.div
                  className={`relative h-[33.375rem] rounded-[2rem] bg-cover bg-center bg-no-repeat`}
                  animate={{ width: isActive ? "27.375rem" : "13.5rem" }}
                  transition={{ duration: 0.5 }}
                  key={id}
                  onMouseEnter={() => setActiveImg(id)}
                  onMouseLeave={() => setActiveImg(1)}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <motion.div
                    className="absolute bottom-0 w-full rounded-b-[32px] bg-[backdrop-blur-md] p-[24px_3.125rem] text-center backdrop-blur-[1rem]"
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="inter-30-500-30 text-[#fff]">{name}</h3>
                    <p className="inter-18-400-30 text-[#EBEBEB]">{position}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
