import HealthyDemo from "../HealthyDemo";
import Nutrition from "../Nutrition";
import WholsomeNutrition from "../WhosomeNutrition/inddex";
import Wrapper from "../Wrapper";

const HealthyMeal = () => {
  return (
    <div>
      <section className="mx-auto my-[80px]">
        <Wrapper>
          <HealthyDemo />
        </Wrapper>
      </section>
      <section className="bg-[#F5F5F5]">
        <Wrapper>
          <WholsomeNutrition />
        </Wrapper>
      </section>

      <section className="py-[80px]">
        <Wrapper>
          <Nutrition />
        </Wrapper>
      </section>
    </div>
  );
};

export default HealthyMeal;
