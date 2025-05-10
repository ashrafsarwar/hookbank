import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section
    id="#home"
    className={` mx-4 flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div
      className={`flex flex-row py-[6px]  ${styles.flexStart} flex-1  flex-col sm:px-16 6px`}
    >
      <div
        className={`flex flex-row my-[6px] px-4 items-center bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt="discount" className="w-[32px] h-[32px]"></img>
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> 20% </span>Discount For{" "}
          <span className="text-white"> 1 Month </span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-normal font-semibold text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
        Payement Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] `}>
        Our Team of experts use a methodolgy that the credits cards fit to ful
        fills your requirments. We examine the annual percentage and fee.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
