"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Appointment = {
  id: string;
  name: string;
  service: string;
  appointment_time: string;
};

export default function TodaySchedule() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadTodayAppointments();
  }, []);

  async function loadTodayAppointments() {
    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("appointments")
      .select("id, name, service, appointment_time")
      .eq("appointment_date", today)
      .order("appointment_time");

    if (error) {
      console.error(error);
      return;
    }

    setAppointments(data || []);
  }

  return (
    <div className="rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-[#C9A227]">
        📅 Today's Schedule
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">
          No appointments scheduled today.
        </p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between rounded-2xl border border-gray-100 p-4 hover:bg-yellow-50 transition"
            >
              <div>
                <p className="font-semibold text-lg">
                  {appointment.name}
                </p>

                <p className="text-gray-500">
                  {appointment.service}
                </p>
              </div>

              <span className="rounded-full bg-[#C9A227] px-4 py-2 text-white font-semibold">
                {appointment.appointment_time}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}