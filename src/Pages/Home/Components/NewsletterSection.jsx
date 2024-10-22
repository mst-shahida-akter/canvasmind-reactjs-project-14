import emailIcon from "./../../../assets/images/Home/newsletter-section/email.png";
import sendIcon from "./../../../assets/images/Home/newsletter-section/send.png";

import backgroundImage from "./../../../assets/images/Home/newsletter-section/newsletter-img.png";
import backgroundImag1 from "./../../../assets/images/Home/newsletter-section/newsletter-img-1.png";

const NewsletterSection = () => {
  return (
    <section className="relative">
      <div className="cus-container">
        <div className="text-center">
          <h4 className="inter-24-600-32-cap text-[#FC9651]">Support</h4>
          <h3 className="inter-48-600-58-cap mt-[.75rem] text-[#171B26]">
            Subscribe Newsletter & get
          </h3>
          <p className="inter-32-500-32 mt-3 text-[#3D424D]">Company News</p>
          <div className="relative mx-auto mt-[4.25rem] max-w-[40rem]">
            <div className="flex items-center gap-[1.25rem] rounded-[1.25rem] border border-[#EBEBEB] bg-[#fff] p-[1.25rem]">
              <img src={emailIcon} alt="email-icon" />
              <input
                type="text"
                placeholder="Your email"
                className="w-full bg-transparent outline-none"
              />
            </div>
            <button className="absolute right-[10px] top-1/2 flex -translate-y-1/2 items-center justify-center gap-[.75rem] rounded-[1.25rem] border border-[#EBEBEB] bg-[#FC9651] p-[10px_24px]">
              <img src={sendIcon} alt="send-icon" />
              <span className="inter-16-700-140 text-[#fff]">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
      <img
        src={backgroundImage}
        alt="background-image"
        className="absolute left-0 top-0"
      />
      <img
        src={backgroundImag1}
        alt="background-image-1"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
};

export default NewsletterSection;
