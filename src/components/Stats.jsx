import { stats } from "../constaants/data"
import styles from "../style"
const Stats = () => {
  return (
  
  <section className={`${styles.flexCenter} flex-row  flex-wrap sm:mb-6 mb-2`}>
   {stats.map((stat)=>{
    return <div className="flex flex-row justify-start  items-center m-3 flex-1" key={stat.id}>
        <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ">{stat.value}</h4>
        <p className="text-gradient font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] ">{stat.title}</p>
    </div>
   })}
  </section>
  
  )
}

export default Stats