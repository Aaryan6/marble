import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Testimonial() {
  return (
    <div className="px-4 py-10 lg:py-20 lg:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-orange-400 text-center font-medium">
          TESTIMONIALS
        </h3>
        <h1
          className={`${saira.className} text-3xl md:text-4xl text-center font-medium mt-2`}
        >
          WHAT OUR CLIENTS SAY
        </h1>
      </div>
      <div className="mt-6 max-w-xl mx-auto">
        <div className="border px-6 md:px-12 py-10 bg-white">
          <p className="text-gray-600 leading-loose text-center text-lg italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem
            eligendi ut recusandae officia molestiae beatae odit, placeat
            laborum ipsam nisi earum at, quisquam, repellendus saepe accusamus
            modi aspernatur asperiores.
          </p>
          <h4 className="mt-4 md:mt-10 text-center font-medium">John Doe</h4>
        </div>
      </div>
    </div>
  );
}
