import Image from "next/image";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function layout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div
        className="hidden relative lg:flex flex-col justify-between bg-neutral-100 bg-cover bg-center p-12 w-1/2 overflow-hidden"
        style={{ backgroundImage: "url(/signup-img.webp)" }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/75 via-white/75 to-white/10" />

        <div className="z-10 relative">
          <span className="inline-block bg-primary-50 px-4 py-1.5 border border-primary-200 rounded-full font-medium text-primary-800 text-sm">
            Smart Opportunities Platform
          </span>
          <h1 className="mt-6 font-bold text-primary-900 text-5xl leading-tight">
            Your first step towards a better professional future starts here.
          </h1>
          <p className="mt-4 max-w-md text-neutral-600 text-lg">
            Join thousands of professionals and opportunity seekers in the
            integrated Levora platform.
          </p>
        </div>

        <div className="z-10 relative flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
          <div className="flex -space-x-3">
            <Image
              src="/people/ben.jpg"
              className="border-2 border-white rounded-full w-10 h-10"
              alt="customer"
              width={10}
              height={10}
            />
            <Image
              src="/people/hannah.jpg"
              className="border-2 border-white rounded-full w-10 h-10"
              alt="customer"
              width={10}
              height={10}
            />
            <Image
              src="/people/steve.jpg"
              className="border-2 border-white rounded-full w-10 h-10"
              alt="customer"
              width={10}
              height={10}
            />
          </div>
          <p className="text-neutral-700 text-sm">Join 10k+ active users</p>
        </div>
      </div>

      <>{children}</>
    </div>
  );
}
