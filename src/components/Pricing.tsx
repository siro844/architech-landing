import CheckIcon from "../assets/icons/check.svg"
import {twMerge} from "tailwind-merge"
const pricingTiers = [
  {
    title: "Pay as you go",
    monthlyPrice: "7",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "3D Visualization of the plan",
      "Export in multiple formats",
      "Email support",
    ],
    isPayAsYouGo: true,
  },
  {
    title: "Basic",
    monthlyPrice: "30",
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Create upto 5 floor plans per month",
      "3D Visualization of the plans",
      "Export in multiple formats",
      "Email support",
    ],
    isPayAsYouGo: false,
  },
  {
    title: "Pro",
    monthlyPrice: "100",
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "Everything in the Basic Plan",
      "Unlimited floor plans per month",
      "Priority email support",
    ],
    isPayAsYouGo: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing">
      <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
        <div className="container">
          <h2 className="text-center text-5xl font-bold tracking-tighter">Pricing</h2>
          <p className="text-center text-xl text-white/70 mt-5">Upgrade for exclusive features and better functionality</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 items-center mt-10 lg:justify-center">
            {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features, isPayAsYouGo }) => (
              <div key={title} className={twMerge("p-10 border border-[#5D2CA8] rounded-3xl shadow-[0_7px_14px_#5D2CA8] bg-white max-w-xs w-full", inverse === true && 'border-black bg-black text-white/60')}>
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black", inverse === true && 'text-white/60')}>{title}</h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className={twMerge("text-4xl font-bold tracking-tighter leading-none text-black", inverse === true && 'text-white')}>${monthlyPrice}</span>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && 'text-white/50')}>
                    {isPayAsYouGo ? '/plan' : '/month'}
                  </span>
                </div>
                <button className={twMerge("bg-black text-white h-12 rounded-lg px-5 w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li key={feature} className={twMerge("text-sm flex items-center gap-4 text-black/60", inverse === true && 'text-white/60')}>
                      <CheckIcon className="h-6 w-6" />
                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};