import { Saira } from "next/font/google";
import Image from "next/image";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Footer() {
  return (
    <div className="px-4 md:px-8 py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-6">
          <h1
            className={`${saira.className} text-3xl md:text-4xl leading-normal`}
          >
            READY TO WORK WITH US?
          </h1>
          <div className="mt-4 md:mt-0 border flex items-center bg-white text-black">
            <input
              type="email"
              className="bg-transparent flex-1 outline-none text-sm p-4 py-2.5 md:py-3"
              placeholder="Enter your email..."
            />
            <button className="bg-orange-300 h-full py-2 md:py-2.5 w-10 md:w-12 grid place-items-center cursor-pointer">
              <Image
                src={"/send.png"}
                alt=""
                width={30}
                height={30}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="max-w-xs">
            <h1 className="text-2xl font-semibold">Marble</h1>
            <p className="text-gray-300 mt-2">
              7176 Blue Spring Lane Santa Monica, CA 90403
            </p>
            <p className="mt-8">Info.colorlib@gmail.com</p>
            <p>+84 123 456 789</p>
            <div className="mt-8">links</div>
          </div>
          <div className="">
            <h3 className="font-medium">Menus</h3>
            <ul className="grid gap-y-2 mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 -mb-10 text-center text-gray-300 text-sm">
          <p>
            Copyright © 2023 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </div>
  );
}
