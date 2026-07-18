"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (
      username === "admin" &&
      password === "ushine123"
    ) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  }

  return (
    <main
  className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/login-bg.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

  <div className="relative z-10 fade-up">

      <div className="float-card w-[420px] rounded-3xl border border-white/20 bg-black/25 p-10 shadow-[0_0_60px_rgba(212,175,55,0.18)] backdrop-blur-xl">

        <h1 className="mb-2 text-center text-5xl font-bold tracking-[0.3em] text-[#D4AF37]">
  U • SHINE
</h1>

<p className="mb-8 text-center text-gray-200">
  Premium Salon Owner Dashboard
</p>
<p className="mt-3 text-center text-sm tracking-[0.25em] text-[#D4AF37]/80 uppercase">
  Luxury • Beauty • Confidence
</p>

        <input
          placeholder="Username"
          className="mt-10 w-full rounded-xl border border-[#D4AF37]/30 bg-white/20 p-4 text-white placeholder-gray-300 backdrop-blur-md outline-none transition-all duration-300 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/40"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-5 w-full rounded-xl border border-[#D4AF37]/30 bg-white/20 p-4 text-white placeholder-gray-300 backdrop-blur-md outline-none transition-all duration-300 focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/40"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C9A227] py-4 text-lg font-bold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] active:scale-95"
        >
          Login
        </button>

      </div>
      </div>

    </main>
  );
}