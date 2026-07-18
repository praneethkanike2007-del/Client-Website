"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

import ServiceSelector from "@/components/booking/ServiceSelector";
import DateSelector from "@/components/booking/DateSelector";
import TimeSelector from "@/components/booking/TimeSelector";
import CustomerDetails from "@/components/booking/CustomerDetails";

import TodaySchedule from "@/components/admin/TodaySchedule";

export default function BookingContent() {
  const searchParams = useSearchParams();
  console.log("CATEGORY =", searchParams.get("category"));
  const [success, setSuccess] = useState(false);
  const [booking, setBooking] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
  const selectedCategory = searchParams.get("category");

  if (selectedCategory) {
    setBooking((prev) => ({
      ...prev,
      service: selectedCategory,
    }));
  }
}, [searchParams]);

  const handleBooking = async () => {
  if (
    !booking.service ||
    !booking.date ||
    !booking.time ||
    !booking.name ||
    !booking.phone ||
    !booking.email
  ) {
    alert("Please fill in all the fields.");
    return;
  }

 const result = await supabase
  .from("appointments")
  .insert([
    {
      name: booking.name,
      phone: booking.phone,
      email: booking.email,
      service: booking.service,
      appointment_date: booking.date,
      appointment_time: booking.time,
    },
  ])
  .select();

console.log("SUPABASE RESULT:", result);

if (result.error) {
  console.log(result.error);
  alert(result.error.message);
  return;
}

setSuccess(true);
};

  return (
    <main className="min-h-screen bg-[#faf7f2] py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-center text-4xl font-bold text-yellow-600">
          Book Your Appointment
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Choose your preferred beauty service.
        </p>

                <ServiceSelector
  value={booking.service}
  category={searchParams.get("category") || ""}
  onChange={(service) =>
    setBooking({
      ...booking,
      service,
    })
  }
/>
                <DateSelector
          value={booking.date}
          onChange={(date) =>
            setBooking({
              ...booking,
              date,
            })
          }
        />
                <TimeSelector
          value={booking.time}
          onChange={(time) =>
            setBooking({
              ...booking,
              time,
            })
          }
        />
        <CustomerDetails
  name={booking.name}
  phone={booking.phone}
  email={booking.email}
  onNameChange={(name) =>
    setBooking({
      ...booking,
      name,
    })
  }
  onPhoneChange={(phone) =>
    setBooking({
      ...booking,
      phone,
    })
  }
  onEmailChange={(email) =>
    setBooking({
      ...booking,
      email,
    })
  }
/>

    <div className="mt-10">
          <button
  type="button"
  onClick={handleBooking}
  className="w-full rounded-xl bg-yellow-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-yellow-700"
>
  Book Appointment
</button>
    </div>

      </div>

    {success && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="w-[380px] rounded-3xl bg-white p-10 text-center shadow-2xl">

      <div className="mb-5 text-6xl">
        🎉
      </div>

      <h2 className="text-3xl font-bold text-[#C9A227]">
        Booking Confirmed!
      </h2>

      <p className="mt-4 text-gray-600">
        Thank you for choosing U-SHINE.
        <br />
        We can't wait to welcome you.
      </p>

      <button
        onClick={() => setSuccess(false)}
        className="mt-8 rounded-full bg-[#C9A227] px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-yellow-700"
      >
        Awesome!
      </button>

    </div>

  </div>
)}

    </main>
  );
}