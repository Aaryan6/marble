import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Speciality() {
  return (
    <div className="relative px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="py-10 max-w-2xl mx-auto">
          <h4 className="text-orange-300 text-center font-medium">
            WHY CHOOSE US?
          </h4>
          <p
            className={`${saira.className} text-3xl md:text-4xl md:leading-normal text-center mt-5 text-white`}
          >
            OUR ABILITY TO DELIVER OUTSTANDING RESULTS FOR OUR CLIENTS STARTS
            WITH OUR TEAM OF SMART.
          </p>
          <button className="bg-orange-400 text-white px-12 py-3 rounded-sm mx-auto block mt-10">
            Contact Us
          </button>
        </div>
        <Image
          src={"/bg.jpeg"}
          alt=""
          width={2152}
          height={1435}
          className="w-full h-full object-cover brightness-[.3] absolute top-0 left-0 -z-10"
        />
      </div>
    </div>
  );
}
