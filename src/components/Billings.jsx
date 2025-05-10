import { google, bill, apple } from "../assets"
import styles , {layout} from "../style"
const Billings = () => (
    <section id="#products" className={`${layout.sectionReverse}`}>
   <div className={`${layout.sectionImgReverse}`}> 
<img src={bill} className="w-[100%] h-[100
%] z-[5] relative"></img>
<div className="absolute w-[50%] h-[50%] -left-1/2 rounded-full white__gradient z-[3]"/>
<div className="absolute w-[50%] h-[50%] -left-1/2 rounded-full pink__gradient z-[0]"/>
   </div>
   <div className={`${layout.sectionInfo}`}>
    <h2 className={`${styles.heading2}`}>
       Easily Control your <br className="sm:block hidden"/> Billing & Voicing
    </h2>
    <p className={`${styles.paragraph} max-w-[470px]`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, labore doloremque ratione recusandae eos sed temporibus laboriosam, voluptates rerum nihil obcaecati, harum ipsum perspiciatis.
    </p>
    <div className="flex flex-row sm:mt-10 mt-6">
    <img src={apple} alt="apple " className="cursor-pointer w-[128px] h-[42px] mr-5"></img>
   <img src={google} alt="google_play  " className="w-[128px] h-[42px] cursor-pointer"></img>
   </div>
   </div>
 
    </section>
  )


export default Billings