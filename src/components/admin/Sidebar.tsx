"use client";

import {
  LayoutDashboard,
  CalendarDays,
  Clock3,
  LogOut,
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("admin");
    router.push("/admin/login");
  }

  return (
    <aside className="sticky top-6 h-fit rounded-3xl bg-gradient-to-b from-[#181818] to-[#2B2B2B] p-8 text-white shadow-2xl">

      <h1 className="text-3xl font-bold text-[#C9A227]">
        U-SHINE
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Luxury Salon Dashboard
      </p>

      <div className="my-8 h-px bg-white/10" />

      <nav className="space-y-3">

        <a
  href="#dashboard"
  className="flex w-full items-center gap-3 rounded-xl bg-[#C9A227] px-4 py-3 font-semibold text-white"
>
  <LayoutDashboard size={20} />
  Dashboard
</a>

        <a
  href="#appointments"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
>
  <CalendarDays size={20} />
  Appointments
</a>

        <a
  href="#schedule"
  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
>
  <Clock3 size={20} />
  Today's Schedule
</a>

      </nav>

      <div className="mt-10 h-px bg-white/10" />

      <button
        onClick={logout}
        className="mt-8 flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold transition hover:bg-red-600"
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}