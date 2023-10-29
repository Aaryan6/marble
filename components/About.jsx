import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function About() {
  return (
    <section id="about" className="px-4 py-10 md:py-20 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:gap-x-6 lg:items-center lg:justify-between lg:flex-row">
        <div className="max-w-2xl">
          <h3 className="text-orange-400 font-medium">WHO ARE WE</h3>
          <h1
            className={`${saira.className} text-3xl md:text-4xl font-medium mt-2`}
          >
            WE PROPOSE AND DISCUSS DESIGN RULES
          </h1>
          <p className="text-gray-700 mt-5">
            Metasurfaces are generally designed by placing scatterers in
            periodic or pseudo-periodic grids. We propose and discuss design
            rules for functional metasurfaces with randomly placed.
          </p>
          <p className="text-gray-700 mt-5">
            Anisotropic elements that randomly sample. Quisque sit amet nisl
            ante. Fusce lacinia non tellus id gravida. Cras neque dolor,
            volutpat et hendrerit et.
          </p>
        </div>
        <div className="mt-12">
          <Image
            src={"/about.webp"}
            alt=""
            width={2152}
            height={1435}
            className="w-full aspect-[3/4] max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
