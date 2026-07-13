const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function TimeSelector() {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Time
      </label>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {timeSlots.map((time) => (
          <button
            key={time}
            type="button"
            className="rounded-xl border border-gray-300 p-3 text-center transition hover:border-yellow-500 hover:bg-yellow-50"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}