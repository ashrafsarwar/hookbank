import { quotes } from "../assets"
const FeedBack = ({name,content,img,title}) => (
    <div className='flex flex-col feedback-card justify-between px-10 py-12 rounded-[20px] max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-12'>
    <img src={quotes} alt="Quotes" className="object-contain w-[42px] h-[27px]"></img>

    <p className="font-poppins font-normal text-[18px] text-white my-10 leading-[32px]">
        {content}
    </p>
    <div className="flex flex-row ">
        <img src={img} className="w-[48px] h-[49px] rounded-full"></img>
     <div className="flex flex-col ml-4">
        <h2 className="font-poppins font-semibold text-[20px] text-white leading-[32px]">{name}</h2>
        <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[32px]">{title}</p>
     </div>
    </div>
    </div>
  )


export default FeedBack