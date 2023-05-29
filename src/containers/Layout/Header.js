import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });
  return (
    <nav className="bg-white w-full h-20 mb-12 shadow-md py-4 px-8">
      <div className="container mx-auto xl:max-w-screen-xl flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <ul className={`flex gap-x-6 text-lg ${status === "loading" ? "opacity-0" : "opacity-100" }`}>
          <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/">Todos</Link>
          </li>
          <li className="p-2">
            <Link href="/profile">Profile</Link>
          </li>
         {!session && status !== "loading" && (
             <li className="p-2">
             <button onClick={() => signIn()}>Sign in</button>
           </li>
         )}
          {session && (
            <li className="p-2">
              <button onClick={() => signOut()}>Sign out</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
