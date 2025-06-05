# Detailed Explanation

## 🔹 `Wrapper` Component

```tsx
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-3/4 mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;
```

### 🔍 Explanation:

* **Purpose**: This is a reusable layout component that centers and limits the width of its content.
* `ReactNode`: This type allows any valid React content as children.
* `w-3/4 mx-auto`: Tailwind CSS utility classes:

  * `w-3/4` = width 75% of its parent
  * `mx-auto` = center horizontally using margin

---

## 🔹 `Nutrition` Component

```tsx
import eatingDog from "@/assets/dog-eating.png";
import coco from "@/assets/coco.png";

const Nutrition = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* First section */}
      <div className="flex items-center gap-15">
        <img src={eatingDog} width={570} height={480} />
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px]">...</h1>
          <p>...</p>
        </div>
      </div>

      {/* Second section */}
      <div className="flex items-center gap-15">
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px]">...</h1>
          <p>...</p>
        </div>
        <img src={coco} width={570} height={480} />
      </div>
    </div>
  );
};

export default Nutrition;
```

### 🔍 Explanation:

* Contains **2 horizontal sections**: text and image alternates.
* Uses **Flexbox** for layout: `flex`, `gap-20`, etc.
* Images: `eatingDog` and `coco` depict dogs in a health-focused narrative.

---

## 🔹 `HealthyDemo` Component

```tsx
import foodBowl from "@/assets/food-bowl.jpg";
// ... (more image imports)
import Button from "../shared/Button";

const HealthyDemo = () => {
  return (
    <>
      {/* Header */}
      <div className="justify-center flex">
        <h1 className="w-[55%] text-center text-[40px] my-8">
          What makes us different makes them stronger
        </h1>
      </div>

      {/* Features section */}
      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-20 justify-center w-[90%]">
          {/* Feature 1: Real Food */}
          {/* Feature 2: Premium Ingredients */}
        </div>
        
        <img src={foodBowl} width={370} height={370} />
        
        <div className="flex flex-col gap-30 justify-center w-[90%]">
          {/* Feature 3: Made Fresh */}
          {/* Feature 4: Vet Developed */}
        </div>
      </div>

      <Button>Get your dog's healthy meal today!</Button>

      {/* Footer info */}
      <div className="flex gap-12 justify-center">
        {/* Guarantee and payment icons */}
      </div>
    </>
  );
};

export default HealthyDemo;
```

### 🔍 Explanation:

* **Purpose**: Lists features of the dog food (real, premium, fresh, vet-developed).
* Each feature has an image and text.
* Includes a **button** and **trust elements** like payment icons and guarantees.

---

## 🔹 `WholsomeNutrition` Component

```tsx
import dog from "@/assets/dog.jpg";
import Button from "../shared/Button";

const WholsomeNutrition = () => {
  return (
    <div className="flex gap-15 py-[80px]">
      <div className="flex flex-col gap-12 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-[40px]">...</h1>
          <p>...</p>
        </div>

        {/* Key Stats */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-[19px]">Key Points:</h2>
          <div>
            {/* 97% */}
            {/* 84% */}
            {/* 92% */}
          </div>
        </div>

        <Button style={{width: '100%'}}>Give your furry friend the gift of wholesome nutrition</Button>
      </div>
      <img src={dog} width={570} height={570} />
    </div>
  );
};

export default WholsomeNutrition;
```

### 🔍 Explanation:

* Explains the **impact** of nutrition on dogs.
* Shares **data points** to support the product's claims.
* Ends with a CTA button.

---

## 🔹 `Button` Component

```tsx
import { ReactNode } from "react";

const Button = ({ children, style }: { children: ReactNode; style?: object }) => {
  return (
    <div className="flex justify-center my-5">
      <button
        className="bg-[#EE6F4B] hover:bg-[#EE6F4B] w-1/2 text-white font-semibold rounded h-[48px]"
        style={style}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
```

### 🔍 Explanation:

* Reusable button component
* Accepts:

  * `children`: Button text
  * `style`: Optional inline styles
* Tailwind styles for consistent color and spacing

---

## 🔹 `HealthyMeal` Page Component

```tsx
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
```

### 🔍 Explanation:

* The main **page component** that pulls everything together.
* Each `section` wraps one of the components:

  * `HealthyDemo`
  * `WholsomeNutrition`
  * `Nutrition`
* All wrapped in a **`Wrapper`** for consistent layout.
