import eatingDog from "@/assets/dog-eating.png";
import coco from "@/assets/coco.png";
const Nutrition = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex items-center gap-15">
        <img src={eatingDog} width={570} height={480} />
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px]">
            Improve overall gastrointestinal health for better nutrient
            absorption
          </h1>
          <p>
            Through rigorous scientific studies and consultations with
            veterinarians, we have created a breakthrough formula exclusively
            tailored to combat the health challenges prevalent in dogs. A
            staggering 91% of our customers have reported significant
            improvements in their dogs' health after incorporating our product
            into their diet.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-15">
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px]">
            Prebiotics nourish the beneficial gut bacteria, supporting digestive
            health
          </h1>
          <p>
            Our dog food formula contains carefully selected prebiotics that
            work in harmony with the gut microbiota, providing the necessary
            nutrients for the growth and maintenance of beneficial bacteria,
            ultimately supporting digestive health.
          </p>
        </div>
        <img src={coco} width={570} height={480} />
      </div>
    </div>
  );
};

export default Nutrition;
