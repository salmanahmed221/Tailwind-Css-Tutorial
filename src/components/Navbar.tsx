import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex bg-purple-600 py-2 ">
        {/* Logo */}

        <div className="ml-28 mx-5 py-1">
          <Image src="/next.svg" alt="logo" width={100} height={100} />
        </div>

        {/* Links */}

        <div className="ml-16">
          <ul className="flex font-bold mt-1">
            <li className="mx-16">
              <Link href={"https://www.youtube.com/"} target="_blank">
                Youtube
              </Link>
            </li>
            <li className="mx-16">
              <Link href={"https://www.facebook.com/"} target="_blank">
                Facebook
              </Link>
            </li>
            <li className="mx-16">
              <Link href={"https://twitter.com/?lang=en"} target="_blank">
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="ml-36">
          <button className="bg-[#dfe6e9] px-6 py-1 font-bold border-solid border-2 rounded-lg border-black hover:text-white hover:bg-black">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
