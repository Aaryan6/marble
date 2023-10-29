import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="grid place-items-center h-full max-w-2xl mx-auto">
        <h1
          className={`${saira.className} text-white text-4xl md:text-6xl font-medium text-center md:leading-normal`}
        >
          QUALITY IS NOT ONLY OUR STANDARD.
        </h1>
      </div>
      <Image
        src={"/bg.jpeg"}
        alt=""
        width={2152}
        height={1435}
        className="w-full h-full object-cover brightness-[.3] absolute top-0 left-0 -z-10"
      />
    </section>
  );
}
