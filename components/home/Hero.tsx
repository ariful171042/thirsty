import { cn } from "@/lib/utils";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const plafairDisplay = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full  grid grid-rows-8 gap-5 relative">
        {/* second row  */}
        <div className="w-full h-[8rem]  grid grid-cols-[30%_auto] gap-20 items-center">
          <div className="w-full h-full overflow-hidden  rounded-[0px_50px_0px_50px]">
            <Image
              src={
                "https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={""}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">
              Lorem ipsum doloi
            </h2>
          </div>
        </div>

        <hr className="border-gray h-px" />

        {/* third row  */}
        <div className="w-full h-[8rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className=" w-full h-full flex items-center">
            <h2
              className={cn(
                plafairDisplay.className,
                "headline-1 uppercase font-bold c"
              )}
            >
              Lorem
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden  rounded-[50px_0px_55px_50px]">
            <Image
              src={
                "https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={""}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">Lorem ipsum a</h2>
          </div>
        </div>
        <hr className="border-gray h-px" />

        {/* four row  */}
        <div className="w-full h-[8rem] grid grid-cols-[40%_auto] gap-20">
          <div className=" w-full h-full flex items-center ">
            <h2 className="headline-1 uppercase font-bold">Lorem ipss</h2>
          </div>
          <div className="w-full h-full overflow-hidden  rounded-[0px_50px_50px_50px]">
            <Image
              src={
                "https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={""}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray h-px" />

        {/* fifth row  */}
        <div className="w-full h-[8rem]  grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden  rounded-[50px_50px_50px_0px]">
            <Image
              src={
                "https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={""}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-full h-full flex items-center">
            <h2 className="headline-1 uppercase font-bold">Lorem ipsum arai</h2>
          </div>
        </div>
      </div>
      <hr className="border-gray h-px" />
      {/*Packges button */}
      <Link
        href={"/#packages"}
        className="bg-dark/80 bacdrop-blur-lg text-light w-40 h-40 rounded-full overflow-hidden flex justify-center items-center uppercase text-lg absolute left-[38%] bottom-[18%] z-[1] group shadow-2xl eq shadow-dark/50 hover:shadow-pink/50"
      >
        <p className="z-[3]">Packages</p>
        {/* Filler  1*/}
        <span className="z-[2] absolute top-full left-0 right-0 w-full h-full bg-pink rounded-0 group-hover:top-1/2 eq"></span>
        {/* Filler  2*/}
        <span className="z-[2] absolute -top-full left-0 right-0 w-full h-full bg-pink rounded-0 group-hover:top-0 eq"></span>
      </Link>
    </section>
  );
};

export default Hero;
