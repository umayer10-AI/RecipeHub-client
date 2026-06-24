import Banner from "@/component/Banner";
import Dynamic1 from "@/component/Dynamic1";
import Reveal from "@/component/Reveal";
import Section1 from "@/component/Section1";
import Section2 from "@/component/Section2";
import Section4 from "@/component/Section4";
import TopLikedComponent from "@/component/TopLikedComponent";

const page = () => {
  return (
    <div>
      <Banner />

      <Reveal>
        <Dynamic1 />
      </Reveal>

      <Reveal>
        <TopLikedComponent />
      </Reveal>

      <Reveal>
        <Section1 />
      </Reveal>

      <Reveal>
        <Section2 />
      </Reveal>

      <Reveal>
        <Section4 />
      </Reveal>
    </div>
  );
};

export default page;