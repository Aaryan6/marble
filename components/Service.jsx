import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Service() {
  return (
    <service id="service" className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-orange-400 text-lg font-medium">
          OUR SPECIALIZATION
        </h3>
        <h1
          className={`${saira.className} text-3xl md:text-4xl font-medium mt-2`}
        >
          WHAT WE DO
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 md:mt-20">
          {services.map((item, i) => (
            <div className="grid gap-4 max-w-md" key={i}>
              <Image
                src={item.img}
                alt=""
                width={62}
                height={62}
                className="w-full max-w-[4rem] h-auto aspect-square object-cover"
              />
              <h1 className={`${saira.className} text-lg`}>{item.title}</h1>
              <p className="text-gray-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </service>
  );
}

const services = [
  {
    title: "INTERIOR DESIGN",
    desc: "As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.",
    img: "/services-1.webp",
  },
  {
    title: "OFFICE DESIGN",
    desc: "Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.",
    img: "/services-2.webp",
  },
  {
    title: "HOME DESIGN",
    desc: "Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.",
    img: "/services-3.webp",
  },
  {
    title: "DESIGN DRAWINGDESIGN DRAWING",
    desc: "Creating architectural and creative solutions to help people realize their vision and make them a reality.",
    img: "/services-4.webp",
  },
];
