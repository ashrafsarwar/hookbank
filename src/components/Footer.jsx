import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constaants/data";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="min-w-[266px] h-[72.14px] object-contain md:mr-2"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
    </div>
    <div className="flex flex-row justify-between flex-wrap w-full md:mt-0 mt-10">
    {footerLinks.map((footerLink)=>(
        <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[100px]">
            <h4 className="font-poppins font-medium font-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
                {footerLink.links.map((link,index)=>(
                    <li key={link.name} className={`font-poppins font-normal text-dimWhite hover:text-secondary leading-[24px] cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                ))}
            </ul>
        </div>
    ))}
    </div>
    </div>
    <div className="w-full flex items-center justify-between md:flex-row flex-col py-6 border-t-[1px] border-dimWhite">
   <p className="font-poppins font-medium font-[18px] leading-[27px] text-white">
    Hookbank. All rights are reserved.
   </p>
    
    <div className={`flex flex-row md:mt-0 mt-4 `}>
        {socialMedia.map((icons,index)=>(
            <img src={icons.icon} key={icons.id} alt={icons.id} className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length -1 ? 'mr-4' : 'mr-0'}` }></img>
        ))}
    </div>
    </div>
    
  </section>
);

export default Footer;