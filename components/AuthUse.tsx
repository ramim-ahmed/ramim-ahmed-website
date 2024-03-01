import React from "react";

export default function AuthUse() {
  return (
    <div className="my-20">
      <p className="text-base text-[#E8E5E5] leading-6">
        Most of times to build projects that needs user authentication system
        safely and securely. and user authentication most important part both
        client and server-side. so in that case , i know about most popular
        authentication provider like, AUTH0 and FIREBASE. I have an implement
        some my projects in client-side.
      </p>
      <div className=" mt-8 flex items-center">
        <a
          href="https://firebase.google.com/"
          target="_blank"
          className="border-b border-slate-300 px-10 py-3 text-xl mr-10 text-white"
        >
          firebase
        </a>
        <a
          href="https://auth0.com/"
          target="_blank"
          className="border-b border-slate-300 px-10 py-3 text-xl text-white"
        >
          auth0
        </a>
      </div>
    </div>
  );
}
