export default function CustomerDetails() {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Your Details
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />

      </div>
    </div>
  );
}