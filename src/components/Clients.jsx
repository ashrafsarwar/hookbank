import { clients } from "../constaants/data"
import styles from "../style"
const Clients = () =>  (
    <div className={`${styles.flexCenter} `}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client)=>(
                                
   <div key={client.id} className={`flex-1 sm:w-[192px] w-[120px]${styles.flexCenter}`}>
     <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px]"></img>
   </div>
            ))}
   
        </div>
    </div>
  )


export default Clients