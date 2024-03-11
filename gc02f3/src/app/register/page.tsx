import ClientErrorMsgComponent from "@/components/ClientErrorMsgComponent";
import Link from "next/link";
import { redirect } from "next/navigation";

const Register = () => {
  const handleRegister = async (formData: FormData) => {
    "use server";

    type MyResponse<T> = {
      statusCode: number;
      message?: string;
      data?: T;
      error?: string;
    };
    console.log("masuk");

    const response = await fetch(process.env.NEXT_PUBLIC_URL + "/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const responseJson: MyResponse<unknown> = await response.json();
    if (!response.ok) {
      let message = responseJson.error ?? "Something went wrong!";
      return redirect(`/register?error=${message}`);
    }

    return redirect("/login");
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center mt-40">
        <p className="text-xl font-light text-gray-600 mb-6">Sign Up</p>
        <ClientErrorMsgComponent />
        <p className="text-xm font-light text-gray-600 m-12">
          Create an account for faster checkout.
        </p>
        <form action={handleRegister}>
          <div className="grid w-96 md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-5 mt-6">
              <input
                type="text"
                name="name"
                className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0 mb-5 mt-6">
              <input
                type="text"
                name="username"
                className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Username
              </label>
            </div>
          </div>
          <div className="relative z-0 w-96 mb-5 group mt-8">
            <input
              type="text"
              name="email"
              className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email
            </label>
          </div>
          <div className="relative z-0 w-96 mb-5 mt-6">
            <input
              type="text"
              name="password"
              className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          {/* <div className="relative z-0 w-96 mb-6 mt-6">
            <input
              type="text"
              className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-solid border-gray-900 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-xs text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm your Password
            </label>
          </div> */}
          {/* <div className="flex items-center mb-4">
          <input
            type="radio"
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Sign Up To Our Mailing List
          </label>
        </div> */}
          <button
            type="submit"
            className="border border-black text-sm px-44 sm:w-auto text-center h-10 font-thin hover:bg-black hover:text-white"
          >
            SIGN UP
          </button>
          <div className="flex justify-start font-thin mt-6 text-sm hover w-[130px] hover:border-b hover:border-gray-900">
            <Link href="/login">Already Registered?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
