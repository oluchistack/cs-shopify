import foodBowl from "@/assets/food-bowl.jpg";
import food from "@/assets/food.png";
import petBowl from "@/assets/pet-bowl.png";
import petFood from "@/assets/pet-food.png";
import vet from "@/assets/vet.png";
import paypal from "@/assets/paypal.png";
import visa from "@/assets/visa.png";
import mastercard from "@/assets/mastercard.png";
import applyPay from "@/assets/pay.png";
import googlePay from "@/assets/google-pay.png";

import shieldCheck from "@/assets/shield-check.svg";
import Button from "../shared/Button";

const HealthyDemo = () => {
  return (
    <>
      <div className="justify-center flex">
        <h1 className="w-[55%] text-center text-[40px] my-8">
          What makes us different makes them stronger
        </h1>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-20 justify-center w-[90%]">
          <div className="flex justify-between gap-6">
            <img
              src={food}
              alt=""
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col gap-5">
              <h3 className=" font-semibold text-[19px]">Real Food</h3>
              <p className="text-[19px]">
                Wholesome recipes for dogs with real meat and veggies.
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-6">
            <img
              src={petBowl}
              alt=""
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col gap-5">
              <h3 className=" font-semibold text-[19px]">Premium Ingredient</h3>
              <p className="text-[19px]">
                Elevating pet care with unmatched safety and quality.
              </p>
            </div>
          </div>
        </div>
        <img src={foodBowl} width={370} height={370} />
        <div className="flex flex-col gap-30 justify-center w-[90%]">
          <div className="flex justify-between gap-6">
            <img
              src={petFood}
              alt=""
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col gap-5">
              <h3 className=" font-semibold text-[19px]">Made Fresh</h3>
              <p className="text-[19px]">
                We prioritize maintaining the integrity of whole foods and
                nutrition.
              </p>
            </div>
          </div>

          <div className="flex justify-between gap-6">
            <img
              src={vet}
              alt=""
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col gap-5">
              <h3 className=" font-semibold text-[19px]">Vet Developed</h3>
              <p className="text-[19px]">
                We raise the bar for dog nutrition, surpassing industry
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button>Get your dog's healthy meal today!</Button>
      <div className="flex gap-12 justify-center">
        <div className="flex gap-2 items-center">
          <img src={shieldCheck} width={16} height={16} />
          <p className="text-[16px]">30-day money back guarantee</p>
        </div>

        <div className="flex ">
          <img src={paypal} width={39.2} height={24} />
          <img src={visa} width={39.2} height={24} />
          <img src={mastercard} width={39.2} height={24} />
          <img src={applyPay} width={39.2} height={24} />
          <img src={googlePay} width={39.2} height={24} />
        </div>
      </div>
    </>
  );
};

export default HealthyDemo;
