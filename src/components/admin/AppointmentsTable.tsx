"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
   status: string;
};

export default function AppointmentsTable() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [search, setSearch] = useState("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [selectedAppointment, setSelectedAppointment] =
  useState<Appointment | null>(null);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
  fetchAppointments();

  const interval = setInterval(() => {
    fetchAppointments();
  }, 10000);

  return () => clearInterval(interval);
}, []);

  async function fetchAppointments() {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("appointment_date", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }
    setAppointments(data || []);
  }

async function updateStatus(id: string, status: string) {
  setLoadingId(id);

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);

  setLoadingId(null);

  if (error) {
    console.error(error);
    return;
  }

  fetchAppointments();
}

async function deleteAppointment(id: string) {

  const confirmDelete = window.confirm(
    "Delete this appointment?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  fetchAppointments();

}


  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Appointments
      </h2>

    <input
  type="text"
  placeholder="Search customer by name or phone..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-6 w-full rounded-xl border border-gray-300 p-3 focus:border-[#C9A227] focus:outline-none"
/>


<input
  type="date"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
  className="mb-6 w-full rounded-xl border border-gray-300 p-3 focus:border-[#C9A227] focus:outline-none"
/>

<div className="mb-6 rounded-xl border border-[#E8D9A8] bg-[#FFF9EC] px-5 py-3">
  <h3 className="font-semibold text-[#C9A227]">
    ✨ Live Dashboard
  </h3>

  <p className="text-sm text-gray-600">
    Appointments refresh automatically every 10 seconds.
  </p>
</div>



      {
appointments.filter((appointment) => {
  const matchesSearch =
    appointment.name.toLowerCase().includes(search.toLowerCase()) ||
    appointment.phone.includes(search);

  const matchesDate =
    selectedDate === "" ||
    appointment.appointment_date === selectedDate;

  return matchesSearch && matchesDate;
}).length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-yellow-50">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Service</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Time</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
                <th className="p-4 text-left">Contact</th>


              </tr>
            </thead>

            <tbody>
              {appointments
  .filter(
    (appointment) =>
      appointment.name.toLowerCase().includes(search.toLowerCase()) ||
      appointment.phone.includes(search)
  )
  .map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-yellow-50 transition"
                >
                  <td className="p-4">
  <div className="flex items-center gap-3">

    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#C9A227] to-[#E0B84D] font-bold text-white shadow-lg">
      {appointment.name.charAt(0).toUpperCase()}
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        {appointment.name}
      </p>

      <p className="text-sm text-gray-500">
        Customer
      </p>
    </div>

  </div>
</td>
                  <td className="p-4 font-medium text-gray-700">
  📞 {appointment.phone}
</td>
                  <td className="p-4 text-gray-600">
  ✉️ {appointment.email}
</td>
                  <td className="p-4">
  <span className="rounded-full bg-[#FFF4D6] px-4 py-2 font-semibold text-[#C9A227]">
    {appointment.service}
  </span>
</td>
                  <td className="p-4">
  📅 {appointment.appointment_date}
</td>
                  <td className="p-4">
  🕒 {appointment.appointment_time}
</td>
            
                                    <td className="p-4">
                    <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : appointment.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                        {appointment.status}
                    </span>
                    </td>



                    <td className="p-4">
  <div className="flex gap-2">


    <button
  onClick={() => setSelectedAppointment(appointment)}
  className="rounded-lg bg-[#C9A227] px-3 py-2 text-white hover:bg-[#B88E1E]"
>
  View
</button>

    <button
  disabled={loadingId === appointment.id}
  onClick={() => updateStatus(appointment.id, "Confirmed")}
  className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loadingId === appointment.id ? "Updating..." : "Accept"}
</button>

    <button
      onClick={() => updateStatus(appointment.id, "Completed")}
      className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
    >
      Complete
    </button>

    <button
      onClick={() => updateStatus(appointment.id, "Cancelled")}
      className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
    >
      Cancel
    </button>


    <button
  onClick={() => deleteAppointment(appointment.id)}
  className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-400/30"
>
  Delete
</button>

  </div>
</td>

<td className="p-4">

  <a
    href={`tel:${appointment.phone}`}
    className="rounded-lg bg-[#C9A227] px-4 py-2 text-white hover:bg-yellow-700"
  >
    📞 Call
  </a>

</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


    {selectedAppointment && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

    <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

      <h2 className="mb-6 text-3xl font-bold text-[#C9A227]">
        Customer Details
      </h2>

      <div className="space-y-4">

        <p><strong>Name:</strong> {selectedAppointment.name}</p>

        <p><strong>Phone:</strong> {selectedAppointment.phone}</p>

        <p><strong>Email:</strong> {selectedAppointment.email}</p>

        <p><strong>Service:</strong> {selectedAppointment.service}</p>

        <p><strong>Date:</strong> {selectedAppointment.appointment_date}</p>

        <p><strong>Time:</strong> {selectedAppointment.appointment_time}</p>

        <p><strong>Status:</strong> {selectedAppointment.status}</p>

      </div>

      <button
        onClick={() => setSelectedAppointment(null)}
        className="mt-8 w-full rounded-xl bg-[#C9A227] py-3 font-semibold text-white hover:bg-[#B88E1E]"
      >
        Close
      </button>

    </div>

  </div>
)}




    </div>
  );
}