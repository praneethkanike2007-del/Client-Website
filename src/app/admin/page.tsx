

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";


import AppointmentsTable from "@/components/admin/AppointmentsTable";
import DashboardStats from "@/components/admin/DashboardStats";

import RecentActivity from "@/components/admin/RecentActivity";
import TodaySchedule from "@/components/admin/TodaySchedule";

import Sidebar from "@/components/admin/Sidebar";




export default function AdminPage() {

const router = useRouter();

useEffect(() => {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    router.push("/admin/login");
  }
}, [router]);

  return (
    <main className="min-h-screen bg-[#F8F5EF] py-12">

  <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6">

    <div className="col-span-3">
      <Sidebar />
    </div>

    <div className="col-span-9">

    <div className="mb-10 rounded-[32px] bg-gradient-to-r from-[#111111] via-[#1F1F1F] to-[#2B2B2B] p-10 text-white shadow-2xl">

      <p className="text-lg text-yellow-400">
        Welcome Back 👋
      </p>

      <h1 className="mt-2 text-5xl font-bold">
        Swathi
      </h1>

      <p className="mt-3 text-gray-300">
        {new Date().toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="mt-8 h-px bg-white/20" />

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
        Every appointment is another opportunity to make someone feel more
        beautiful, more confident and happier than before. Keep shining.
      </p>

    </div>

    <div id="dashboard">
  <DashboardStats />
</div>

<div className="mt-10">
  <div id="schedule">
  <TodaySchedule />
</div>
</div>

<div id="appointments" className="mt-10">
  <AppointmentsTable />
</div>

    </div>

  </div>

</main>
  );
}