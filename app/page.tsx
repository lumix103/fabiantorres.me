import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto pt-4">
      <nav className="flex justify-between items-center bg-blue-bell border-4 border-vampire-black shadow-[4px_4px_0_#0A0A0A] p-2">
        <h3 className="text-2xl font-semibold">Fabs Website</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Blog
          </a>
          <a
            href="#"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Resume
          </a>
          <a
            href="#"
            className="border-2 border-vampire-black min-w-28 font-bold text-center transition-all ease-in hover:bg-hot-pink hover:shadow-[2px_2px_0_#0A0A0A] hover:-translate-y-0.5"
          >
            Socials
          </a>
        </div>
      </nav>
      <section className="flex w-full mt-16">
        <div className="flex flex-col gap-2 w-2/3">
          <h2 className="font-black uppercase text-6xl">Hi There, I'm Fabs!</h2>
          <p className="text-2xl">
            Junior Full Stack Developer and Data Analyst at Endeavor Assets.
          </p>
          <a className="bg-jonquil shadow-[4px_4px_0_#0A0A0A] border-2 border-vampire-black w-36 h-14 font-bold flex items-center justify-center transition-all ease-in hover:bg-hot-pink hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-0.5">
            See My Work
          </a>
        </div>
        <div className="w-1/3 flex justify-end">
          <Image
            src="/headshot.jpg"
            alt="headshot"
            width={680}
            height={680}
            className="size-80 object-center border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]"
          />
        </div>
      </section>

      <div
        className="mt-8 w-full h-8 bg-vampire-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, #BFAFF2 50%, transparent 51%)",
          backgroundSize: "4rem 2rem",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        className="w-full h-8 bg-vampire-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom, #BFAFF2 50%, transparent 51%)",
          backgroundSize: "4rem 2rem",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        className="w-full h-8 bg-vampire-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at top, #BFAFF2 50%, transparent 51%)",
          backgroundSize: "4rem 2rem",
          backgroundRepeat: "repeat-x",
        }}
      />
      <section className="flex flex-col bg-vampire-black bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[length:4rem_4rem]">
        <h1 className="uppercase font-extrabold underline z-10 text-5xl m-4 w-fit relative before:absolute before:bg-white before:-top-2.5 before:-left-1.5 before:w-[105%] before:h-[110%] before:-z-10  before:rotate-2 before:border-2 before:border-vampire-black before:shadow-[4px_4px_0_white] before:origin-top-left">
          About Me
        </h1>
        <div className="w-full flex p-4 gap-4">
          <article className="text-white">
            <p className="text-lg">
              I'm a junior full stack developer and data analyst from California
              State University, San Bernardino.
            </p>

            <p className="text-lg leading-relaxed">
              I got hooked on programming back in high school. I started with VB
              and quickly moved to Java to build X-ray and utility mods for
              games. There was something magical about bending code to create
              tools that made gaming better. Suddenly I could modify the very
              systems I loved.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              As I dove deeper, computer science became my playground. I
              explored everything: web development with React, HTML/CSS/JS/AJAX
              stacks, and even game dev with C++ and Unreal Engine. But it
              wasn't just about learning tech. I found myself falling in love
              with the problem-solving, the way a well-crafted algorithm could
              turn chaos into clarity.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              In college, I discovered even more layers: operating systems,
              compilers, and the world of data analysis. Numbers started telling
              stories. I loved uncovering insights that could drive real
              decisions. Most proudly, I founded the coding club at my high
              school. I pushed our school deep into programming culture,
              expanded resources, and led us to competitions and events. Seeing
              peers light up around code? That's what keeps me going.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              Now at Endeavor Assets, I blend full stack development with data
              analysis every day. I love the challenges I'm given and tackling
              new problems, whether that's building interactive web apps or
              turning messy datasets into clear insights. I'm excited about
              modern tools and always chasing better ways to solve real
              problems.
            </p>

            <p className="text-lg font-semibold mt-4">
              I can't wait to bring this energy to a team where I can tackle
              meaningful challenges and grow alongside other builders.
            </p>
          </article>
        </div>
        <h1 className="uppercase font-extrabold underline z-10 text-5xl m-4 w-fit relative before:absolute before:bg-white before:-top-2.5 before:-left-1.5 before:w-[105%] before:h-[110%] before:-z-10  before:rotate-2 before:border-2 before:border-vampire-black before:shadow-[4px_4px_0_white] before:origin-top-left">
          My Projects
        </h1>
        <div className="w-full grid grid-cols-4 p-4 gap-4">
          <article className="p-4 border-2 bg-jonquil border-vampire-black shadow-[4px_4px_0_#FACC15] col-span-3 w-full">
            <h1 className="font-bold text-3xl">
              Full Stack Development Projects
            </h1>
            <div className="flex gap-4">
              <div className="size-60 min-w-60 bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Resmuify AI</h2>
                <ul className="list-disc list-inside">
                  <li>
                    A resume builder that uses AI to help tailor your resume for
                    a specific job.
                  </li>
                  <li>A tool that helps you track your job applications.</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="p-4 border-2 bg-atomic-tangerine border-vampire-black shadow-[4px_4px_0_#ff6a59] col-span-1 row-span-2 w-full">
            <h1 className="font-bold text-3xl">Data Analysis Projects</h1>
            <div className="size-60 bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]" />
            <h2 className="font-semibold text-2xl mt-4">Belabeat Case Study</h2>
            <ul className="list-disc list-inside ">
              <li>
                Analyze Fitbit fitness tracker data to uncover user behavior
                trends.
              </li>
              <li>
                Provide actionable insights to support Bellabeat’s marketing
                strategies and product development.
              </li>
            </ul>
          </article>
          <article className="p-4 border-2 bg-electric-lime border-vampire-black shadow-[4px_4px_0_#23ed27] col-span-1 w-full">
            <h1 className="font-bold text-3xl">More Projects</h1>
            <div className="size-60 bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]" />
          </article>
          <article className="p-4 border-2 bg-hot-pink border-vampire-black shadow-[4px_4px_0_#f472b6] col-span-2 w-full">
            <h1 className="font-bold text-3xl">Backend Projects</h1>
            <div className="flex gap-4">
              <div className="size-60 min-w-60 bg-white border-2 border-vampire-black shadow-[4px_4px_0_#0A0A0A]" />
              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl">Web Crawler</h2>
                <ul className="list-disc list-inside">
                  <li>A web crawler that scrapes the web for information.</li>
                  <li>
                    Parsed the web for information and stored it in a database.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <h1 className="uppercase font-extrabold underline z-10 text-5xl ml-auto m-4 w-fit relative before:absolute before:bg-white before:-top-2.5 before:-left-3 before:w-[105%] before:h-[110%] before:-z-10  before:rotate-2 before:border-2 before:border-vampire-black before:shadow-[4px_4px_0_white] before:origin-top-left">
          My Experience
        </h1>
      </section>
    </main>
  );
}
