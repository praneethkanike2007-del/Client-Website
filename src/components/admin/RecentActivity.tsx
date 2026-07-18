"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Appointment = {
  id: string;
  name: string;
  service: string;
  status: string;
};

export default function RecentActivity() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadActivity();
  }, []);

  async function loadActivity() {
    const { data } = await supabase
      .from("appointments")
      .select("id,name,service,status")
      .order("created_at", { ascending: false })
      .limit(5);

    setAppointments(data || []);
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl border border-[#E9D39A]">

      <h2 className="mb-6 text-2xl font-bold text-[#C9A227]">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {appointments.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-gray-100 p-4 hover:bg-[#FFF9EC] transition"
          >
            <div>

              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-sm text-gray-500">
                {item.service}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "Completed"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}