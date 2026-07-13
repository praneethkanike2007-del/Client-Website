import { services } from "@/data/services";

export default function ServiceSelector() {
  return (
    <div className="mt-10">
      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Service
      </label>

      <select className="w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-700 outline-none transition focus:border-yellow-500">
        <option value="">Choose a service</option>

        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
}