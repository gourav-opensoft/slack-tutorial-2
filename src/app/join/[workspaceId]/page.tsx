"use client";

import Image from "next/image";

const JoinPage = () => {
  return (
    <div className=" h-full flex flex-col gap-y-8 items-center justify-center bg-white p-8 rounded-lg shadow-md">
      <Image src="/logo.svg" width={100} height={60} alt="Logo" />
      <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <h1>
            Join workspace
          </h1>
          <p>
            enter the workspace code to join
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
