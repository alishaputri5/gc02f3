import Link from "next/link";
import { doLogin } from "./action";

export default function Login() {
  return (
    <>
      <form
        action={doLogin}
        className="h-screen w-screen items-center flex flex-col mt-40 color-[#181818]"
      >
        <p className="text-xl font-light">Account</p>
        <div className="relative z-0 w-96 mb-5 group mt-32">
          <input
            type="text"
            className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            name="email"
          />
          <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Your Email
          </label>
        </div>
        <div className="relative z-0 w-96 mb-16 group mt-6">
          <input
            type="password"
            className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            name="password"
          />
          <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <button
          type="submit"
          className="border border-black text-sm px-44 sm:w-auto text-center h-10 font-thin hover:bg-black hover:text-white"
        >
          LOG IN
        </button>

        <div className="flex flex-row justify-between w-96 font-thin mt-6 text-sm  ">
          <Link
            href="/register"
            className="hover hover:border-b hover:border-gray-900"
          >
            Create Account
          </Link>
          <button className="hover hover:border-b hover:border-gray-900">
            Forgot Password?
          </button>
        </div>
      </form>
    </>
  );
}
