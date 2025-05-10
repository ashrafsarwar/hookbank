import styles from "../style"
import Button from "./Button"
const CTA = () =>(
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
       <div className={` flex-1 flex flex-col `}>
        <h2 className={`${styles.heading2}`}>Let's try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-10`}>Everything you need to accept the card payment and grow your bussines anywhere in the planet.</p>
        </div> 
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
  )


export default CTA