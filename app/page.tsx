import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 md:gap-6 p-24">
      <h1 className="text-2xl md:text-4xl bg-gradient-to-br text-center from-green-400 to-pink-500 text-transparent bg-clip-text">
        All the Frontendmentor Project I implemented.
      </h1>
      <div className="px-4 py-2">
        <ul className="flex flex-col list-none gap-2 md:gap-3 text-lg">
          <li>
            <Link
              className=" hover:text-cyan-600 text-cyan-400 "
              href={"/expchart"}
            >
              Expenses component
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-600 text-cyan-400 " href={"/"}>
              Add more..
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
