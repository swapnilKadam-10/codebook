import { useTitle } from "../../hooks/useTitle";

import { ScrollToTopButton } from "../../components";
import { HeroSection } from "./components/HersoSection";
import { FeaturedProducts} from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";


export const HomePage = () => {

  useTitle("Home");
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
      <ScrollToTopButton />
    </main>
  )
}
