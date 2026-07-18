type DateSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Date
      </label>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-700 outline-none transition focus:border-yellow-500"
      />
    </div>
  );
}