import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="sticky top-0 z-50 bg-[#000]">
      <div className="cus-container !py-7">
        <div className="flex items-center justify-between">
          <div className="">
            <span className="inter-24-600-32-cap text-white">CanvasMind</span>
          </div>

          <div className="flex items-center gap-10">
            {[
              ["Home", "/"],
              ["Features", "/features"],
              ["Solutions", "/solutions"],
              ["Rankings", "/rankings"],
              ["Pricing", "/pricing"],
            ].map(([title, path]) => {
              return (
                <Link
                  to={path}
                  className="inter-16-500-24 text-white"
                  key={title}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="inter-16-500-24-cap text-white">
              Sign In
            </Link>

            <button className="w-[9.6875rem] rounded-[6.25rem] bg-[linear-gradient(102deg,#CD43FF_21.41%,#FD65A6_34.68%,#FC9651_67.09%,#FFBD72_87.19%)] px-6 py-4">
              <span className="inter-16-500-24-cap text-white">
                Sign up Free
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
