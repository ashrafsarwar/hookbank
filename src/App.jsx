import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billings from "./components/Billings";
import CardDeals from "./components/CardDeals";
import Business from "./components/Business";
import Clients from "./components/Clients";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
const app = () => (
  <div className="bg-primary overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} bg-primary`}>
        <Navbar />
      </div>
    </div>
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billings />
        <CardDeals />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default app;
