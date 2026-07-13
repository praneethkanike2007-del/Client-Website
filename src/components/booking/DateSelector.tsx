export default function DateSelector() {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Date
      </label>

      <input
        type="date"
        className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
      />
    </div>
  );
}