import { Saira } from "next/font/google";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import Image from "next/image";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Navbar() {
  return (
    <div className="px-4 py-10 absolute z-40 w-full text-white">
      <Sheet>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold">Marble</h1>
          <div className="hidden md:flex">
            <ul className="flex items-center gap-x-12">
              <Link href={"#home"}>
                <li>Home</li>
              </Link>
              <Link href={"#about"}>
                <li>About</li>
              </Link>
              <Link href={"#projects"}>
                <li>Projects</li>
              </Link>
              <Link href={"#service"}>
                <li>Service</li>
              </Link>
            </ul>
          </div>
          <div className="flex-col text-center hidden sm:flex">
            <h3 className="text-xs">Call us for any question</h3>
            <h1
              className={`${saira.className} font-medium text-xl text-orange-300`}
            >
              +91 62534 3443
            </h1>
          </div>
          <SheetTrigger asChild>
            <div className="sm:hidden cursor-pointer">
              <Image
                src={"/menu.svg"}
                width={28}
                height={28}
                alt=""
                className=""
              />
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="h-full">
              <ul className="flex flex-col gap-y-8 text-2xl pl-10 h-full justify-center gap-x-12">
                <Link href={"#home"}>
                  <SheetClose asChild>
                    <li>Home</li>
                  </SheetClose>
                </Link>
                <Link href={"#about"}>
                  <SheetClose asChild>
                    <li>About</li>
                  </SheetClose>
                </Link>
                <Link href={"#projects"}>
                  <SheetClose asChild>
                    <li>Projects</li>
                  </SheetClose>
                </Link>
                <Link href={"#service"}>
                  <SheetClose asChild>
                    <li>Service</li>
                  </SheetClose>
                </Link>
              </ul>
            </div>
          </SheetContent>
        </div>
      </Sheet>
    </div>
  );
}
