import Link from "next/link";
import { buttonVariants } from "../ui/Button";

const Navber = () => {
  return (
    <header className="h-20 border-b border-gray flex items-center bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-[100]">
      <div className="wrapper grid grid-cols-3 gap-20 ">
        {/* left nav  */}
        <nav>
          <ul className="flex justify-start items-center gap-5 h-full ">
            <li>
              <Link href={"/#packages"} className="link-item">
                Packages
              </Link>
            </li>
            <li>
              <Link href={"/"} className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link href={"/"} className="link-item">
                Link 3
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mid nav  */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link
                href={"/"}
                className="lowercase text-4xl font-bold text-pink"
              >
                MiMosa.
              </Link>
            </li>
          </ul>
        </nav>
        {/* right nav  */}
        <nav>
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href={"/"} className="link-item">
                Link 1
              </Link>
            </li>
            <li>
              <Link href={"/"} className="link-item">
                Link 2
              </Link>
            </li>
            <li>
              <Link
                href={"/user/signin"}
                className={buttonVariants({
                  variant: "valentine",
                })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navber;
