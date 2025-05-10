import { feedback } from "../constaants/data"
import FeedBack from "./FeedBack"
import styles from "../style"
const Testimonials = () =>(
   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
 
 <div className="absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient z-[0]"></div>
  <div className="w-full flex justify-between items-center flex-col md:flex-row  sm:mb-12 mb-6 z-[1 relative]">
  <h2 className={`${styles.heading2}`}>
    What People are <br className="sm:block hidden"/>
    saying about us
  </h2>
  <div className="w-full md:mt-0 mt-6">
    <p className={`${styles.paragraph} max-w-[450px]`}>
        Everything you need to accept card Payement and grow your Bussines anywhere on the planet.
    </p>
  </div>
  </div>
  <div className="flex flex-wrap sm:justify-start justify-center  feedback-container w-[100%] relative z-[1]">
  {feedback.map((card)=>(
    <FeedBack key={card.id} {...card}/>
  ))}
  </div>
   </section>
  )


export default Testimonials