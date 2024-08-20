import { Feature } from "./Feature";

const features = [
  {
    title: "Floorplan generation",
    description:
      "Effortlessly create your dream space with AI-driven floor plan generation.",
  },
  {
    title: "3D Visualisation",
    description:
      "Bring your blueprint to life with stunning floor plan visualization.",
  },
  {
    title: "Prompt based floorplan editing",
    description:
      "Edit and refine your layout with simple, intuitive prompts.",
  },
];

export const Features = () => {
  return (
    <section id="features">
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need</h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
        Transform your vision into reality with our cutting-edge solution that generates, visualizes, and refines floor plans effortlessly. 
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
            {features.map(({title,description}) =>(
                <Feature title={title} description={description} key={title}/>
            ))}
        </div>
      </div>
    </div>
    </section>
  );
};
