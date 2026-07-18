type TimeSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM"
];

export default function TimeSelector({
  value,
  onChange,
}: TimeSelectorProps) {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Time
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-700 outline-none transition focus:border-yellow-500"
      >
        <option value="">Choose a time</option>

        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}