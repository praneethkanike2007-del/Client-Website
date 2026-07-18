export type Service = {
  category: string;
  name: string;
  price: string;
  image: string;
  featured: boolean;
};

export const services: Service[] = [
  // =========================
  // FACIALS
  // =========================

  {
    category: "Facials",
    name: "Basic Clean Up",
    price: "₹600",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Acne Clean Up",
    price: "₹600",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Fruit Facial",
    price: "₹600",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "D-Tan Facial",
    price: "₹800",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Fairness Facial",
    price: "₹1000",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Oxyfresh Facial",
    price: "₹700",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Young Radiance Facial",
    price: "₹1100",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Gold Facial",
    price: "₹1200",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Revitalising Facial",
    price: "₹1300",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Dead Sea Facial",
    price: "₹2000",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Radiance Facial",
    price: "₹3500",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Skin Brightening Facial",
    price: "₹1500",
    image: "/services/facials.jpg",
    featured: false,
  },
  {
    category: "Facials",
    name: "Hydra Facial",
    price: "₹3500",
    image: "/services/facials.jpg",
    featured: true,
  },
  {
    category: "Facials",
    name: "Korean Facial",
    price: "₹4000",
    image: "/services/facials.jpg",
    featured: true,
},


// =========================
// BASIC HAIR CUTS
// =========================

{
  category: "Basic Hair Cuts",
  name: "U Cut",
  price: "₹200",
  image: "/services/hair-cut.jpg",
  featured: true,
},
{
  category: "Basic Hair Cuts",
  name: "Straight Cut",
  price: "₹200",
  image: "/services/hair-cut.jpg",
  featured: false,
},
{
  category: "Basic Hair Cuts",
  name: "V Cut",
  price: "₹200",
  image: "/services/hair-cut.jpg",
  featured: false,
},

// =========================
// CREATIVE CUTS
// =========================

{
  category: "Creative Cuts",
  name: "Layer Cut",
  price: "₹700",
  image: "/services/creative-cut.jpg",
  featured: true,
},
{
  category: "Creative Cuts",
  name: "Feather Cut",
  price: "₹700",
  image: "/services/creative-cut.jpg",
  featured: false,
},
{
  category: "Creative Cuts",
  name: "Step Cut",
  price: "₹700",
  image: "/services/creative-cut.jpg",
  featured: false,
},


// =========================
// HAIR COLOUR
// =========================

{
  category: "Hair Colour",
  name: "Root Touch Up",
  price: "₹800",
  image: "/services/hair-colour.jpg",
  featured: true,
},
{
  category: "Hair Colour",
  name: "Global Colour (Small Hair)",
  price: "₹2500",
  image: "/services/hair-colour.jpg",
  featured: false,
},
{
  category: "Hair Colour",
  name: "Global Colour (Medium Hair)",
  price: "₹3000",
  image: "/services/hair-colour.jpg",
  featured: false,
},
{
  category: "Hair Colour",
  name: "Global Colour (Long Hair)",
  price: "₹3500",
  image: "/services/hair-colour.jpg",
  featured: false,
},

// =========================
// FASHION COLOUR
// =========================

{
  category: "Fashion Colour",
  name: "Streaks",
  price: "₹200",
  image: "/services/fashion-colour.jpg",
  featured: true,
},
{
  category: "Fashion Colour",
  name: "Global Colour (Small Hair)",
  price: "₹2500",
  image: "/services/fashion-colour.jpg",
  featured: false,
},
{
  category: "Fashion Colour",
  name: "Global Colour (Medium Hair)",
  price: "₹3500",
  image: "/services/fashion-colour.jpg",
  featured: false,
},
{
  category: "Fashion Colour",
  name: "Global Colour (Long Hair)",
  price: "₹4000",
  image: "/services/fashion-colour.jpg",
  featured: false,
},

// =========================
// MAKEUP
// =========================

{
  category: "Makeup",
  name: "Light Makeup",
  price: "₹4500",
  image: "/services/makeup.jpg",
  featured: true,
},
{
  category: "Makeup",
  name: "Bridal Makeup",
  price: "₹8000",
  image: "/services/makeup.jpg",
  featured: true,
},
{
  category: "Makeup",
  name: "HD Makeup",
  price: "₹15000",
  image: "/services/makeup.jpg",
  featured: true,
},

// =========================
// BLOW DRY
// =========================

{
  category: "Blow Dry",
  name: "Straight Finish (Small)",
  price: "₹350",
  image: "/services/blow-dry.jpg",
  featured: true,
},
{
  category: "Blow Dry",
  name: "Straight Finish (Medium)",
  price: "₹450",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Straight Finish (Long)",
  price: "₹550",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Curls (Small)",
  price: "₹500",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Curls (Medium)",
  price: "₹600",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Curls (Long)",
  price: "₹700",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Straight Finish (Small)",
  price: "₹800",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Straight Finish (Medium)",
  price: "₹900",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Straight Finish (Long)",
  price: "₹1000",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Curl Finish (Small)",
  price: "₹800",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Curl Finish (Medium)",
  price: "₹900",
  image: "/services/blow-dry.jpg",
  featured: false,
},
{
  category: "Blow Dry",
  name: "Iron Curl Finish (Long)",
  price: "₹1000",
  image: "/services/blow-dry.jpg",
  featured: false,
},

// =========================
// D-TAN
// =========================

{
  category: "D-Tan",
  name: "Normal D-Tan",
  price: "₹250",
  image: "/services/d-tan.jpg",
  featured: true,
},
{
  category: "D-Tan",
  name: "Luxury D-Tan",
  price: "₹400",
  image: "/services/d-tan.jpg",
  featured: true,
},

// =========================
// BLEACH
// =========================

{
  category: "Bleach",
  name: "Face & Neck",
  price: "₹250",
  image: "/services/bleach.jpg",
  featured: true,
},
{
  category: "Bleach",
  name: "Blouse Line",
  price: "₹250",
  image: "/services/bleach.jpg",
  featured: false,
},

// =========================
// THREADING
// =========================

{
  category: "Threading",
  name: "Eyebrow",
  price: "₹50",
  image: "/services/threading.jpg",
  featured: true,
},
{
  category: "Threading",
  name: "Upper Lip",
  price: "₹20",
  image: "/services/threading.jpg",
  featured: false,
},
{
  category: "Threading",
  name: "Lower Lip",
  price: "₹20",
  image: "/services/threading.jpg",
  featured: false,
},
{
  category: "Threading",
  name: "Forehead",
  price: "₹30",
  image: "/services/threading.jpg",
  featured: false,
},
{
  category: "Threading",
  name: "Chin",
  price: "₹30",
  image: "/services/threading.jpg",
  featured: false,
},
{
  category: "Threading",
  name: "Side",
  price: "₹50",
  image: "/services/threading.jpg",
  featured: false,
},
{
  category: "Threading",
  name: "Full Face",
  price: "₹200",
  image: "/services/threading.jpg",
  featured: true,
},

// =========================
// OIL MASSAGE
// =========================

{
  category: "Oil Massage",
  name: "Head Massage",
  price: "₹350",
  image: "/services/massage.jpg",
  featured: true,
},
{
  category: "Oil Massage",
  name: "Hair Wash Massage",
  price: "₹500",
  image: "/services/massage.jpg",
  featured: false,
},

// =========================
// REFLEXOLOGY
// =========================

{
  category: "Reflexology",
  name: "Hand Massage (25 min)",
  price: "₹500",
  image: "/services/reflexology.jpg",
  featured: true,
},
{
  category: "Reflexology",
  name: "Leg Massage (25 min)",
  price: "₹500",
  image: "/services/reflexology.jpg",
  featured: false,
},
{
  category: "Reflexology",
  name: "Back & Neck Massage (15 min)",
  price: "₹500",
  image: "/services/reflexology.jpg",
  featured: false,
},

// =========================
// MANICURE & PEDICURE
// =========================

{
  category: "Manicure & Pedicure",
  name: "Classic Manicure",
  price: "₹400",
  image: "/services/nail-care.jpg",
  featured: true,
},
{
  category: "Manicure & Pedicure",
  name: "Classic Pedicure",
  price: "₹400",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Moisturizing Manicure",
  price: "₹600",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Moisturizing Pedicure",
  price: "₹600",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Dead Sea Manicure",
  price: "₹700",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Dead Sea Pedicure",
  price: "₹700",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Crystal Manicure",
  price: "₹1000",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Crystal Pedicure",
  price: "₹1000",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Tan Removal Manicure",
  price: "₹800",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Tan Removal Pedicure",
  price: "₹800",
  image: "/services/nail-care.jpg",
  featured: false,
},
{
  category: "Manicure & Pedicure",
  name: "Heel Peel Treatment",
  price: "₹1200",
  image: "/services/nail-care.jpg",
  featured: true,
},

// =========================
// BASIC HAIR SPA
// =========================

{
  category: "Basic Hair Spa",
  name: "Anti Hair Fall Spa (Small)",
  price: "₹800",
  image: "/services/hair-spa.jpg",
  featured: true,
},
{
  category: "Basic Hair Spa",
  name: "Anti Hair Fall Spa (Medium)",
  price: "₹900",
  image: "/services/hair-spa.jpg",
  featured: false,
},
{
  category: "Basic Hair Spa",
  name: "Anti Hair Fall Spa (Long)",
  price: "₹1000",
  image: "/services/hair-spa.jpg",
  featured: false,
},
{
  category: "Basic Hair Spa",
  name: "Moisturizing Spa",
  price: "From ₹800",
  image: "/services/hair-spa.jpg",
  featured: false,
},
{
  category: "Basic Hair Spa",
  name: "Repair Spa",
  price: "From ₹1000",
  image: "/services/hair-spa.jpg",
  featured: true,
},
{
  category: "Basic Hair Spa",
  name: "Argan Oil Spa",
  price: "From ₹800",
  image: "/services/hair-spa.jpg",
  featured: false,
},
{
  category: "Basic Hair Spa",
  name: "Anti Dandruff Spa",
  price: "From ₹1000",
  image: "/services/hair-spa.jpg",
  featured: false,
},

// =========================
// MOROCCAN OIL
// =========================

{
  category: "Moroccan Oil",
  name: "Hydrating Spa",
  price: "From ₹1600",
  image: "/services/hair-spa.jpg",
  featured: true,
},
{
  category: "Moroccan Oil",
  name: "Scalp Treatment",
  price: "₹800",
  image: "/services/hair-spa.jpg",
  featured: false,
},
{
  category: "Moroccan Oil",
  name: "Repair Spa",
  price: "From ₹1800",
  image: "/services/hair-spa.jpg",
  featured: false,
},

// =========================
// NORMAL WAX
// =========================

{
  category: "Normal Wax",
  name: "Full Arm Waxing",
  price: "₹250",
  image: "/services/waxing.jpg",
  featured: true,
},
{
  category: "Normal Wax",
  name: "Half Legs Waxing",
  price: "₹250",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Normal Wax",
  name: "Underarms Waxing",
  price: "₹80",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Normal Wax",
  name: "Full Legs Waxing",
  price: "₹350",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Normal Wax",
  name: "Full Waxing",
  price: "₹700",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Normal Wax",
  name: "Full Body Waxing",
  price: "₹1200",
  image: "/services/waxing.jpg",
  featured: true,
},

// =========================
// FLAVOURED WAX
// =========================

{
  category: "Flavoured Wax",
  name: "Full Arm Waxing",
  price: "₹400",
  image: "/services/waxing.jpg",
  featured: true,
},
{
  category: "Flavoured Wax",
  name: "Half Legs Waxing",
  price: "₹400",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Flavoured Wax",
  name: "Underarms Waxing",
  price: "₹100",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Flavoured Wax",
  name: "Full Legs Waxing",
  price: "₹600",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Flavoured Wax",
  name: "Full Waxing",
  price: "₹1000",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Flavoured Wax",
  name: "Full Body Waxing",
  price: "₹1500",
  image: "/services/waxing.jpg",
  featured: true,
},

// =========================
// BRAZILIAN WAX
// =========================

{
  category: "Brazilian Wax",
  name: "Face Wax",
  price: "₹400",
  image: "/services/waxing.jpg",
  featured: true,
},
{
  category: "Brazilian Wax",
  name: "Upper Lip",
  price: "₹80",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Brazilian Wax",
  name: "Lower Lip",
  price: "₹60",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Brazilian Wax",
  name: "Chin",
  price: "₹100",
  image: "/services/waxing.jpg",
  featured: false,
},
{
  category: "Brazilian Wax",
  name: "Side",
  price: "₹150",
  image: "/services/waxing.jpg",
  featured: false,
},

// =========================
// ADD ON MASK
// =========================

{
  category: "Add On Mask",
  name: "Whitening Mask",
  price: "₹500",
  image: "/services/facials.jpg",
  featured: true,
},
{
  category: "Add On Mask",
  name: "Skin Brightening Mask",
  price: "₹500",
  image: "/services/facials.jpg",
  featured: false,
},
{
  category: "Add On Mask",
  name: "Skin Tag Removal (Per Wart)",
  price: "₹100",
  image: "/services/facials.jpg",
  featured: false,
},
];