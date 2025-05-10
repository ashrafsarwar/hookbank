import styles from "../style"
import { features } from "../constaants/data"
import { layout } from "../style"
import Button from "./Button"
const Business = () => {
    const FeatureCard =({icon, title, content, index}) =>(
     <div className={`flex flex-row p-6 ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card rounded-[20px]`}>
        <div className={`w-[64px] h-[64px] bg-dimBlue ${styles.flexCenter}`}>
            <img src={icon} alt="icon" className={`h-[50%] w-[50%] object-contain`}>
            </img>
        </div>
        <div className="flex-1 flex-col ml-3">
            <h4 className={`text-white font-poppins  font-semibold font-[18px] leadning-[23px] mb-1 `}>
                {title}
            </h4 >
            <p className={`text-dimWhite  font-[16px] leadning-[23px] mb-1`}>{content}</p>
        </div>
     </div>
    );
  return (
  <section id="#Features" className={`${layout.section}`}>
<div className={`${layout.sectionInfo}`}>
<h2 className={`${styles.heading2}`}>You do Bussines  <br className="sm:block hidden"/> 
We'll Handle Money.</h2>
<p className={`${styles.paragraph}`}>
    With right credit card you will improve your financial life. By building credits, earning rewards  and by saving money. But with the hundreds of credit card in the market.
</p>
<Button styles='pt-10'/>
</div>
<div className={`${layout.sectionImg} flex-col`}>
{features.map((feature,index)=>(
    <FeatureCard  key={feature.id} {...feature}  index={index}/>
))}
</div>
  </section>
    )
}

export default Business