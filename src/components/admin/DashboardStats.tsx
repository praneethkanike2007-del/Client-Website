"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  IndianRupee,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";



export default function DashboardStats() {
  const [todayBookings, setTodayBookings] = useState(0);
const [pendingBookings, setPendingBookings] = useState(0);
const [confirmedBookings, setConfirmedBookings] = useState(0);
const [completedBookings, setCompletedBookings] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const today = new Date().toISOString().split("T")[0];

    // Today's bookings
    const { count: todayCount } = await supabase
      .from("appointments")
      .select("*", { count: "exact", head: true })
      .eq("appointment_date", today);

    // Total bookings
    const { count: totalCount } = await supabase
      .from("appointments")
      .select("*", { count: "exact", head: true });

    // Pending bookings
    const { count: pendingCount } = await supabase
      .from("appointments")
      .select("*", { count: "exact", head: true })
      .eq("status", "Pending");

      const { count: confirmedCount } = await supabase
  .from("appointments")
  .select("*", { count: "exact", head: true })
  .eq("status", "Confirmed");

const { count: completedCount } = await supabase
  .from("appointments")
  .select("*", { count: "exact", head: true })
  .eq("status", "Completed");

    setTodayBookings(todayCount || 0);
setPendingBookings(pendingCount || 0);
setConfirmedBookings(confirmedCount || 0);
setCompletedBookings(completedCount || 0);
  }


    return (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="group rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(201,162,39,0.25)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">Today's Bookings</p>
          <h2 className="mt-3 text-5xl font-bold text-[#C9A227] transition-transform duration-300 group-hover:scale-110">
            {todayBookings}
          </h2>
        </div>

        <CalendarDays
  size={42}
  className="text-[#C9A227] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
/>
      </div>
    </div>

    <div className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,165,0,0.25)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">Pending</p>
          <h2 className="mt-3 text-5xl font-bold text-[#C9A227] transition-transform duration-300 group-hover:scale-110">
            {pendingBookings}
          </h2>
        </div>

        <Clock3 size={42} className="text-orange-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      </div>
    </div>

    <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">Confirmed</p>
          <h2 className="mt-3 text-5xl font-bold text-[#C9A227] transition-transform duration-300 group-hover:scale-110">
            {confirmedBookings}
          </h2>
        </div>

        <CheckCircle2 size={42} className="text-green-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      </div>
    </div>

    <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">Completed</p>
          <h2 className="mt-3 text-5xl font-bold text-[#C9A227] transition-transform duration-300 group-hover:scale-110">
            {completedBookings}
          </h2>
        </div>

        <IndianRupee size={42} className="text-blue-600 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      </div>
    </div>

  </div>
);
}