import { ConstructionIcon } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="w-full max-w-7xl mx-auto pt-4">
      <nav className="flex justify-between items-center bg-blue-bell border-4 border-vampire-black shadow-[4px_4px_0_#0A0A0A] p-2">
        <h3 className="text-2xl font-semibold">Fabs Website</h3>
        <div className="flex gap-4">
          <Link
            href="/"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Blog
          </Link>
          <a
            href="#"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Resume
          </a>
          {/* <a
        href="#"
        className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
      >
        Socials
      </a> */}
        </div>
      </nav>
      <section className="flex w-full mt-16 gap-4 flex-col items-center">
        <div className="flex items-center gap-4">
          <ConstructionIcon className="size-32 fill-jonquil stroke-vampire-black" />
          <p className="text-lg font-semibold">
            I wonder what Fabs is up to...
          </p>
        </div>
        <h1 className="uppercase font-extrabold underline z-10 text-5xl m-4 w-fit relative before:absolute before:bg-jonquil before:-top-1.5 before:-left-4.5 before:w-[105%] before:h-[110%] before:-z-10  rotate-2 before:border-2 before:border-vampire-black before:shadow-[4px_4px_0_white] before:origin-top-left">
          Currently Under Construction
        </h1>
      </section>
    </main>
  );
}
