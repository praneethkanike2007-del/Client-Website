type ServiceSelectorProps = {
  value: string;
  category: string;
  onChange: (value: string) => void;
};

const serviceCategories: Record<string, string[]> = {
  "hair-styling": [
    "U Cut",
    "Straight Cut",
    "V Cut",
    
  ],

  "creative-haircuts": [
  "Layer Cut",
  "Feather Cut",
  "Step Cut",
],

  "hair-colour": [
  "Root Touch Up",
  "Global Colour (Small Hair)",
  "Global Colour (Medium Hair)",
  "Global Colour (Long Hair)",
],

"fashion-colour": [
  "Streaks",
  "Global Colour (Small Hair)",
  "Global Colour (Medium Hair)",
  "Global Colour (Long Hair)",
],


"blow-dry": [
  "Straight Finish",
  "Curls",
  "Iron Straight Finish",
  "Iron Curl Finish",
],



  facials: [
    "Basic Clean Up",
    "Acne Clean Up",
    "Fruit Facial",
    "D-Tan Facial",
    "Fairness Facial",
    "Oxyfresh Facial",
    "Young Radiance Facial",
    "Gold Facial",
    "Revitalising Facial",
    "Dead Sea Facial",
    "Radiance Facial",
    "Skin Brightening Facial",
    "Hydra Facial",
    "Korean Facial",
  ],

"d-tan": [
  "Normal D-Tan",
  "Luxury D-Tan",
],

"bleach": [
  "Face & Neck",
  "Blouse Line",
],

"brazilian-wax": [
  "Face Wax",
  "Upper Lip",
  "Lower Lip",
  "Chin",
  "Side",
],

"normal-wax": [
  "Full Arm Waxing",
  "Half Legs Waxing",
  "Underarms Waxing",
  "Full Legs Waxing",
  "Full Waxing",
  "Full Body Waxing",
],


"flavoured-wax": [
  "Full Arm Waxing",
  "Half Legs Waxing",
  "Underarms Waxing",
  "Full Legs Waxing",
  "Full Waxing",
  "Full Body Waxing",
],



"add-on-mask": [
  "Whitening Mask",
  "Skin Brightening Mask",
  "Skin Tag Removal (Per Wart)",
],




  "hair-spa": [
    "Anti Hair Fall Spa",
    "Moisturizing Spa",
    "Repair Spa",
    "Argan Oil Spa",
    "Anti Dandruff Spa",
  ],


  "oil-massage": [
  "Head Massage",
  "Hair Wash Massage",
],


  MAKEUP: [
    "Light Makeup",
    "Bridal Makeup",
    "HD Makeup",
  ],



"reflexology": [
  "Hand Massage (25 min)",
  "Leg Massage (25 min)",
  "Back & Neck Massage (15 min)",
],

 PEDICURE: [
    "Classic Manicure",
    "Classic Pedicure",
    "Moisturizing Manicure",
    "Moisturizing Pedicure",
    "Crystal Manicure",
    "Crystal Pedicure",
  ],


"moroccan-oil": [
  "Hydrating Spa",
  "Scalp Treatment",
  "Repair Spa",
],

threading: [
    "Eyebrow",
    "Upper Lip",
    "Lower Lip",
    "Forehead",
    "Chin",
    "Side",
    "Full Face",
  ],

};

export default function ServiceSelector({
  value,
  category,
  onChange,
}: ServiceSelectorProps) {

  const services = serviceCategories[category] ?? [];

  return (
    <div className="mt-10">

      <label className="mb-3 block text-lg font-semibold text-gray-800">
        Select Service
      </label>

      {services.length === 0 ? (

        <p className="rounded-xl bg-yellow-50 p-4 text-yellow-700">
          Please choose a service category from the homepage.
        </p>

      ) : (

        <select
          defaultValue=""
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white p-4"
        >
          <option value="">
            Choose a Service
          </option>

          {services.map((service) => (

            <option
              key={service}
              value={service}
            >
              {service}
            </option>

          ))}

        </select>

      )}

    </div>
  );
}