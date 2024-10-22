import facebook from "/src/assets/images/Footer/facebook.svg";
import instagram from "/src/assets/images/Footer/instagram.svg";
import linkedin from "/src/assets/images/Footer/linkedin.svg";
import youtube from "/src/assets/images/Footer/youtube.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#000]">
      <div className="cus-container">
        <span className="inter-24-600-32-cap text-white">CanvasMind</span>
        <div className="mb-[3.625rem] mt-4 h-[.0313rem] w-full bg-[#737780]" />

        <div className="flex justify-between gap-10">
          {[
            {
              title: "Company",
              links: [
                {
                  title: "About Us",
                  link: "/about-us",
                },
                {
                  title: "Design Careers",
                  link: "/design-careers",
                },
                {
                  title: "Pricing",
                  link: "/pricing",
                },
                {
                  title: "Blog",
                  link: "/blog",
                },
              ],
            },
            {
              title: "Need some support?",
              links: [
                {
                  title: "Help Center",
                  link: "/help-center",
                },
                {
                  title: "Alumni testimonials",
                  link: "/alumni-testimonials",
                },
                {
                  title: "Promotions",
                  link: "/promotions",
                },
                {
                  title: "Contact",
                  link: "/contact",
                },
                {
                  title: "FAQ",
                  link: "/faq",
                },
              ],
            },
            {
              title: "Professional pages",
              links: [
                {
                  title: "Work with us",
                  link: "/work-with-us",
                },
                {
                  title: "The Inside",
                  link: "/the-inside",
                },
                {
                  title: "Gift Cards",
                  link: "/gift-cards",
                },
                {
                  title: "SwitchUp",
                  link: "/switchup",
                },
              ],
            },
          ].map(({ title, links }, index) => {
            return (
              <div key={index} className="space-y-[.875rem]">
                <h4 className="inter-20-500-26 text-white">{title}</h4>
                <div className="flex flex-col gap-2">
                  {links.map(({ title, link }, index) => {
                    return (
                      <Link
                        to={link}
                        key={index}
                        className="inter-14-500-28 text-[#D2D3D6]"
                      >
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="max-w-[16.875rem] space-y-[.9375rem]">
            <h4 className="inter-20-500-26 text-white">Newsletter</h4>
            <select
              name=""
              id=""
              className="inter-14-500-20 min-w-[16.875rem] rounded-full bg-[#737780] p-[14px_20px] text-white"
            >
              <option value="">United States</option>
              <option value="">United States</option>
              <option value="">United States</option>
              <option value="">United States</option>
            </select>
            <p className="inter-16-500-26 text-white">Follow Us</p>
            <div className="flex gap-2">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10 border-t-[1px] border-[#5E5E5E] py-8 text-[#FFF]">
        <p className="">© 2023 Relume. All rights reserved.</p>
        <Link to="/privacy-policy" className="inter-14-400-150 underline">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="inter-14-400-150 underline">
          Terms of Service
        </Link>
        <Link to="/cookies-setting" className="inter-14-400-150 underline">
          Cookies Settings
        </Link>
      </div>
    </section>
  );
};

export default Footer;
