import Button from "./Button"
import { card } from "../assets"
import styles, {layout} from "../style"
const CardDeals = () =>  (
    <section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
            Find a better card deal <br className="sm:block hidden"/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias id natus facere at saepe tenetur ullam, praesentium tempora blanditiis?
        </p>
        <Button className='mt-10'/>
        </div>
        <div className={`${layout.sectionImg}`}>

        <img src={card} className="w-[100%] h-[100%] "></img>
        </div>

    </section>
  )


export default CardDeals