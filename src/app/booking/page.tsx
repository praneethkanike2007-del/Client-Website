import CustomerDetails from "@/components/booking/CustomerDetails";
import TimeSelector from "@/components/booking/TimeSelector";
import DateSelector from "@/components/booking/DateSelector";

import ServiceSelector from "@/components/booking/ServiceSelector";

export default function BookingPage() {
    return (
  <main className="min-h-screen bg-[#faf7f2] py-20">
    <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

      <h1 className="text-center text-4xl font-bold text-yellow-600">
        Book Your Appointment
      </h1>

      <p className="mt-4 text-center text-gray-600">
        Choose your preferred beauty service.
      </p>

      <ServiceSelector />
      <DateSelector />
      <TimeSelector />
      <CustomerDetails />

    </div>
  </main>
);
}