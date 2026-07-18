type CustomerDetailsProps = {
  name: string;
  phone: string;
  email: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onEmailChange: (value: string) => void;
};

export default function CustomerDetails({
  name,
  phone,
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
}: CustomerDetailsProps) {
  return (
    <div className="mt-8 space-y-6">
      <div>
        <label className="mb-2 block text-lg font-semibold text-gray-800">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-lg font-semibold text-gray-800">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-lg font-semibold text-gray-800">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />
      </div>
    </div>
  );
}