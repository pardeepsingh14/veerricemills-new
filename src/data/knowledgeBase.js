// Veer Rice Mills Realtime AI Knowledge & Intent Engine

export const SYSTEM_PROMPT = `
You are the official Real-Time AI Sales Assistant for Veer Rice Mills (Karnal, Haryana, India).
Your goal is to assist international importers, domestic wholesalers, and retail customers with accurate specs, pricing inquiries, packaging options, and export details for Veer Rice Mills products.

Key Information about Veer Rice Mills:
- Location: NH-44, GT Road, Near Grain Market, Karnal - 132001, Haryana, India
- Phone/WhatsApp: +91 98765 43210
- Email: info@veerricemills.com
- Plant Capacity: 500 Metric Tons per day with optical sorters & modern parboiling plants.
- Certifications: ISO 22000:2018, HACCP, GMP, FSSAI, APEDA Certified Exporter.
- Main Products: 1121 Golden Sella (8.35mm+), 1121 Steam (8.35mm+), 1121 White Sella, 1509 Golden Sella (8.40mm+), 1509 Steam, Pusa Basmati, Sugandha, PR11/PR14 Sella Non-Basmati.
- MOQ: 1 FCL (Full Container Load ~ 24 Tons) for exports; 1 Ton for domestic wholesale.
- Packaging: 5kg, 10kg, 20kg, 25kg, 50kg in PP, Non-Woven, BOPP, Jute, & Private Label printing.
- Exports to: Saudi Arabia, UAE, Kuwait, Oman, Qatar, USA, UK, Canada, Australia, Europe.
`;

export const INTENTS = [
  {
    category: "greetings",
    keywords: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening", "hlo", "hlw"],
    response: "Hello! 👋 Welcome to Veer Rice Mills. I am your Realtime AI Sales Assistant. How can I help you today? You can ask about our 1121 Basmati specs, export packaging, or request a wholesale quote."
  },
  {
    category: "biryani",
    keywords: ["biryani", "mandi", "pulao", "best rice", "long grain"],
    response: "🌾 For Royal Biryani, Mandi & Persian dishes, our #1 flagship variety is **1121 Golden Sella Basmati Rice** or **1121 Steam Basmati Rice**.\n\n• **Grain Length:** 8.35 mm+ (expands up to 20 mm upon cooking!)\n• **Texture:** Extra long, firm, non-sticky, with rich natural aroma.\n\nWould you like to get a sample or wholesale quote for 1121 Golden Sella?"
  },
  {
    category: "1121",
    keywords: ["1121", "golden sella", "white sella", "1121 steam"],
    response: "🌾 **1121 Basmati Rice Range at Veer Rice Mills:**\n\n1. **1121 Golden Sella:** 8.35mm+ length, parboiled golden grains, ideal for catering & Biryani.\n2. **1121 Steam Basmati:** 8.35mm+ length, pristine white, intense aroma, fluffy cook.\n3. **1121 White Sella:** 8.30mm+ length, high cooking durability.\n\nMoisture: Max 12% | Purity: 95% Pure | Crop Year: Fresh & Aged options available."
  },
  {
    category: "1509",
    keywords: ["1509", "1509 sella", "1509 steam"],
    response: "🌾 **1509 Basmati Rice Range:**\n\n• **1509 Golden Sella:** 8.40mm+ grain length, cost-effective alternative to 1121 for Mandi & catering.\n• **1509 Steam Basmati:** 8.35mm+ length, quick cooking time and elegant slender appearance.\n\nGreat choice for commercial exporters and high-volume distributors!"
  },
  {
    category: "price",
    keywords: ["price", "cost", "rate", "quotation", "quote", "pricing", "discount", "cheap", "expensive", "per ton", "per kg"],
    response: "💰 **Price & Wholesale Quotation:**\n\nRice prices depend on daily market paddy rates, processing type (Sella/Steam/Raw), and order volume.\n\nTo get the latest FOB or CIF price quote for your port, click the green WhatsApp button below to speak directly with our Sales Director!"
  },
  {
    category: "export",
    keywords: ["export", "shipping", "container", "dubai", "saudi", "kuwait", "qatar", "usa", "uk", "fcl", "cif", "fob"],
    response: "🚢 **International Exports & Shipping:**\n\nWe regularly export full container loads (1 FCL = ~24-25 Metric Tons) to over 15+ countries across the Middle East, North America, and Europe with APEDA & Phytosanitary certifications.\n\nWe support FOB (Mundra/Kandla Port) & CIF terms."
  },
  {
    category: "packaging",
    keywords: ["pack", "packaging", "bags", "bag", "5kg", "10kg", "20kg", "25kg", "50kg", "private label", "oem", "brand name"],
    response: "📦 **Packaging & Private Labeling Options:**\n\n• Sizes: 5kg, 10kg, 20kg, 25kg, and 50kg\n• Materials: Non-Woven, BOPP, Jute, & Heavy-Duty PP Export Bags\n• **Private Labeling:** We can print your brand logo and customized bag design!"
  },
  {
    category: "contact",
    keywords: ["contact", "phone", "mobile", "email", "address", "location", "where", "karnal", "factory", "plant", "visit"],
    response: "📍 **Veer Rice Mills Plant & Contact Details:**\n\n• **Factory Address:** NH-44, GT Road, Near Grain Market, Karnal - 132001, Haryana, India\n• **Direct Phone:** +91 98765 43210\n• **Email:** info@veerricemills.com\n• **Office Hours:** Monday - Saturday (9:00 AM - 7:00 PM IST)"
  },
  {
    category: "sample",
    keywords: ["sample", "testing", "lab", "test", "quality check", "free sample"],
    response: "🧪 **Sample Request:**\n\nWe provide free laboratory testing samples for genuine international buyers and commercial distributors. Please share your delivery address and required rice variety via WhatsApp!"
  }
];
