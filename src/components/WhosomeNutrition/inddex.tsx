import dog from "@/assets/dog.jpg";
import Button from "../shared/Button";
const WholsomeNutrition = () => {
  return (
    <div className="flex gap-15 py-[80px]">
      <div className="flex flex-col gap-12 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-[40px]">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h1>
          <p>
            Invest in your dog's future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-[19px]">Key Points:</h2>
          <div>
            <div className="flex gap-24">
              <div className="font-[700] text-[#EE6F4B] text-[33px]">97%</div>
              <div>
                Dogs choose our dog food over leading brands because of its real
                functional ingredients and delicious flavor.
              </div>
            </div>

            <div className="flex gap-24">
              <div className="font-[700] text-[#EE6F4B] text-[33px]">84%</div>
              <div>
                Our dog food provides superior nutrition and a patented
                probiotic for optimal nutrient absorption.
              </div>
            </div>

            <div className="flex gap-24">
              <div className="font-[700] text-[#EE6F4B] text-[33px]">92%</div>
              <div>
                Our dog food's high protein and fat digestibility contribute to
                ideal stool quality.
              </div>
            </div>
          </div>
        </div>
        <Button style={{width: '100%'}}>Give your furry friend the gift of wholesome nutrition</Button>
      </div>
      <img src={dog} width={570} height={570} />
    </div>
  );
};

export default WholsomeNutrition;
