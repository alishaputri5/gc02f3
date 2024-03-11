"use client";

import { useSearchParams } from "next/navigation";

const ClientErrorMsgComponent = () => {
  const searchParams = useSearchParams();
  const errMessage = searchParams.get("error");

  return (
    <>
      {errMessage && (
        <p className="bg-gray-200 px-4 py-2 text-center text-red-300">
          {errMessage}
        </p>
      )}
    </>
  );
};

export default ClientErrorMsgComponent;
