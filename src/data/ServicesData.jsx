export const serviceCategories = [
  {
    name: "Assembly",
    icon: "FaTools",
    slug: "assembly",
    image: "🔩",
    content: "Professional assembly services for all types of furniture and equipment.",
    features: ["Furniture Assembly", "IKEA Assembly", "Equipment Setup"],
    subcategories: [
      "General Furniture Assembly",
      "IKEA Assembly",
      "Crib Assembly",
      "PAX Assembly",
      "Bookshelf Assembly",
      "Desk Assembly"
    ]
  },
  {
    name: "Mounting",
    icon: "FaRegDotCircle",
    slug: "mounting",
    image: "📺",
    content: "Expert mounting services for TVs, art, shelves and more.",
    features: ["TV Mounting", "Wall Hanging", "Mirror Mounting"],
    subcategories: [
      "TV Mounting",
      "Wall Hanging",
      "Mirror Mounting"
    ]
  },
  {
    name: "Moving",
    icon: "FaTruckMoving",
    slug: "moving",
    image: "🚚",
    content: "Reliable moving assistance for packing, unpacking, and heavy lifting.",
    features: ["Packing", "Unpacking", "Heavy Lifting"],
    subcategories: [
      "Packing",
      "Unpacking",
      "Heavy Lifting"
    ]
  },
  {
    name: "Cleaning",
    icon: "FaBroom",
    slug: "cleaning",
    image: "🧹",
    content: "Thorough cleaning services for homes and offices.",
    features: ["House Cleaning", "Office Cleaning", "Deep Cleaning"],
    subcategories: [
      "House Cleaning",
      "Office Cleaning"
    ]
  },
  {
    name: "Outdoor Help",
    icon: "FaTree",
    slug: "outdoor-help",
    image: "🌳",
    content: "All outdoor tasks including gardening, landscaping, and yard work.",
    features: ["Lawn Mowing", "Gardening", "Yard Cleanup"],
    subcategories: [
      "Lawn Mowing",
      "Gardening",
      "Yard Cleanup",
      "Tree Trimming"
    ]
  },
  {
    name: "Home Repairs",
    icon: "FaHammer",
    slug: "home-repairs",
    image: "🔨",
    content: "General home repairs and maintenance by skilled handymen.",
    features: ["Plumbing Fixes", "Drywall Repair", "Door & Window Fixes"],
    subcategories: [
      "Plumbing Fixes",
      "Drywall Repair",
      "Door & Window Fixes",
      "Flooring Repair"
    ]
  },
  {
    name: "Painting",
    icon: "FaPaintRoller",
    slug: "painter",
    image: "🎨",
    content: "Professional painting services for homes and businesses. Interior and exterior painting with high-quality finishes.",
    features: ["Interior & Exterior", "Color Consultation", "Eco-Friendly Paints"],
    subcategories: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Painting",
      "Decorative Finishes"
    ]
  },
  {
    name: "Mechanic",
    icon: "FaTools",
    slug: "mechanic",
    image: "🔧",
    content: "Expert auto mechanics offering repairs, diagnostics, and maintenance for all types of vehicles.",
    features: ["Engine Repairs", "Oil Change", "Brake Services"],
    subcategories: [
      "Engine Repair",
      "Oil Change",
      "Brake Services",
      "Diagnostics"
    ]
  },
  {
    name: "Mason",
    icon: "FaHammer",
    slug: "mason",
    image: "🧱",
    content: "Experienced masons for brick, stone, and concrete work. Specialized in building and repairing structures.",
    features: ["Bricklaying", "Concrete Work", "Stone Masonry"],
    subcategories: [
      "Bricklaying",
      "Concrete Work",
      "Stone Masonry",
      "Fireplace Construction"
    ]
  },
  {
    name: "Trending",
    icon: "FaFire",
    slug: "trending",
    image: "🔥",
    content: "Most popular and in-demand home services right now.",
    features: ["Top Rated", "Fast Booking", "Best Value"],
    subcategories: [
      "Smart Home Setup",
      "AC Installation",
      "Solar Panel Cleaning",
      "EV Charger Installation"
    ]
  }
];

export const professionalsData = {
  painter: [
    {
      id: "p1",
      name: "John Doe",
      experience: "10+ years",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$25-35",
      availability: "Weekdays & Weekends",
      location: "Downtown & Suburbs",
      specialties: ["Interior Painting", "Exterior Painting", "Decorative Finishes"],
      image: "🎨",
      bio: "Professional painter with expertise in both residential and commercial projects. Known for attention to detail and clean work."
    },
    {
      id: "p2",
      name: "Emma Smith",
      experience: "8+ years",
      rating: 4.7,
      reviews: 98,
      hourlyRate: "$20-30",
      availability: "Weekdays Only",
      location: "North & East Districts",
      specialties: ["Mural Painting", "Restoration", "Cabinet Refinishing"],
      image: "🖌️",
      bio: "Specialized in custom artistic finishes and color consultation. Trained in Europe with focus on eco-friendly materials."
    }
  ],
  mechanic: [
    {
      id: "m1",
      name: "Mike Johnson",
      experience: "15+ years",
      rating: 4.8,
      reviews: 215,
      hourlyRate: "$40-60",
      availability: "Mon-Sat, Emergency Services",
      location: "Citywide",
      specialties: ["Engine Repair", "Brake Systems", "Diagnostics"],
      image: "🔧",
      bio: "Certified automotive technician specializing in both domestic and foreign vehicles. ASE Master Technician with dealership experience."
    },
    {
      id: "m2",
      name: "Alex Brown",
      experience: "12+ years",
      rating: 4.5,
      reviews: 176,
      hourlyRate: "$35-50",
      availability: "Weekdays & Saturday Morning",
      location: "South District",
      specialties: ["Electrical Systems", "Performance Tuning", "Vintage Cars"],
      image: "🛠️",
      bio: "Motorcycle and automotive specialist with background in racing. Expertise in custom modifications and restoration projects."
    }
  ],
  mason: [
    {
      id: "ms1",
      name: "James Wilson",
      experience: "20+ years",
      rating: 4.9,
      reviews: 189,
      hourlyRate: "$45-65",
      availability: "Seasonal (Mar-Nov)",
      location: "Metro Area",
      specialties: ["Stone Walls", "Brick Restoration", "Concrete Work"],
      image: "🧱",
      bio: "Third-generation mason with historical restoration experience. Worked on landmark buildings and custom residential projects."
    },
    {
      id: "ms2",
      name: "Robert Green",
      experience: "18+ years",
      rating: 4.6,
      reviews: 147,
      hourlyRate: "$40-60",
      availability: "Year-round",
      location: "West & Central Areas",
      specialties: ["Fireplace Construction", "Patio Design", "Retaining Walls"],
      image: "🔨",
      bio: "Specializes in outdoor living spaces and landscape masonry. Known for creative designs integrating natural elements."
    }
  ],
  assembly: [
    {
      id: "a1",
      name: "Carlos Rivera",
      experience: "7+ years",
      rating: 4.8,
      reviews: 312,
      hourlyRate: "$20-30",
      availability: "7 Days a Week",
      location: "Citywide",
      specialties: ["IKEA Assembly", "Office Furniture", "Crib & Baby Furniture"],
      image: "🔩",
      bio: "Fast and reliable furniture assembly expert. Assembled 3000+ pieces of furniture with zero damage record."
    },
    {
      id: "a2",
      name: "Priya Nair",
      experience: "5+ years",
      rating: 4.6,
      reviews: 204,
      hourlyRate: "$18-25",
      availability: "Weekdays & Saturday",
      location: "North & Central Districts",
      specialties: ["PAX Assembly", "Bookshelf Assembly", "Desk Setup"],
      image: "🪑",
      bio: "Detail-oriented assembler with a background in interior design. Ensures everything is level, sturdy, and looks great."
    }
  ],
  mounting: [
    {
      id: "mt1",
      name: "Derek Stone",
      experience: "9+ years",
      rating: 4.9,
      reviews: 278,
      hourlyRate: "$30-45",
      availability: "Weekdays & Weekends",
      location: "Metro Area",
      specialties: ["TV Mounting", "Floating Shelves", "Art Hanging"],
      image: "📺",
      bio: "Precision mounting specialist. Expert in all wall types including drywall, concrete, and brick. Uses stud finders and laser levels."
    },
    {
      id: "mt2",
      name: "Sandra Lee",
      experience: "6+ years",
      rating: 4.7,
      reviews: 189,
      hourlyRate: "$25-40",
      availability: "Mon-Sat",
      location: "South & East Districts",
      specialties: ["Mirror Mounting", "Gallery Walls", "Cabinet Installation"],
      image: "🪞",
      bio: "Interior mounting expert with an eye for design. Specializes in creating beautiful gallery walls and mirror installations."
    }
  ],
  moving: [
    {
      id: "mv1",
      name: "Tony Gracia",
      experience: "11+ years",
      rating: 4.7,
      reviews: 421,
      hourlyRate: "$35-55",
      availability: "7 Days a Week",
      location: "Citywide",
      specialties: ["Heavy Lifting", "Packing & Unpacking", "Furniture Disassembly"],
      image: "🚚",
      bio: "Professional mover with experience handling antiques and fragile items. Brings all necessary equipment and supplies."
    },
    {
      id: "mv2",
      name: "Lisa Park",
      experience: "8+ years",
      rating: 4.5,
      reviews: 267,
      hourlyRate: "$30-45",
      availability: "Weekends & Evenings",
      location: "Metro & Suburbs",
      specialties: ["Apartment Moving", "Office Relocation", "Storage Organization"],
      image: "📦",
      bio: "Efficient and organized mover. Known for careful packing and systematic unpacking that makes settling in easy."
    }
  ],
  cleaning: [
    {
      id: "cl1",
      name: "Maria Santos",
      experience: "12+ years",
      rating: 4.9,
      reviews: 534,
      hourlyRate: "$25-40",
      availability: "Mon-Sat",
      location: "Citywide",
      specialties: ["Deep Cleaning", "Move-in/Move-out", "Post-renovation Cleaning"],
      image: "🧹",
      bio: "Thorough and trustworthy cleaner. Uses eco-friendly products. Background checked and insured."
    },
    {
      id: "cl2",
      name: "James Okafor",
      experience: "6+ years",
      rating: 4.6,
      reviews: 312,
      hourlyRate: "$20-35",
      availability: "7 Days a Week",
      location: "North & West Districts",
      specialties: ["Office Cleaning", "Window Cleaning", "Carpet Cleaning"],
      image: "🪣",
      bio: "Commercial and residential cleaning specialist. Handles large spaces efficiently with professional-grade equipment."
    }
  ],
  "outdoor-help": [
    {
      id: "oh1",
      name: "Liam Carter",
      experience: "14+ years",
      rating: 4.8,
      reviews: 198,
      hourlyRate: "$30-50",
      availability: "Seasonal (Mar-Nov)",
      location: "Suburbs & Rural Areas",
      specialties: ["Lawn Mowing", "Tree Trimming", "Landscaping"],
      image: "🌳",
      bio: "Certified landscaper with expertise in garden design. Creates and maintains beautiful outdoor spaces year-round."
    },
    {
      id: "oh2",
      name: "Sophie Turner",
      experience: "8+ years",
      rating: 4.6,
      reviews: 143,
      hourlyRate: "$25-40",
      availability: "Weekends & Weekdays",
      location: "Metro & Suburbs",
      specialties: ["Gardening", "Yard Cleanup", "Mulching"],
      image: "🌿",
      bio: "Passionate gardener and yard care specialist. Helps create low-maintenance beautiful outdoor environments."
    }
  ],
  "home-repairs": [
    {
      id: "hr1",
      name: "Frank Miller",
      experience: "16+ years",
      rating: 4.8,
      reviews: 387,
      hourlyRate: "$40-65",
      availability: "Mon-Sat",
      location: "Citywide",
      specialties: ["Drywall Repair", "Plumbing Fixes", "Door & Lock Repair"],
      image: "🔨",
      bio: "Licensed handyman with broad expertise. Tackles small repairs to major fixes with the same level of care and quality."
    },
    {
      id: "hr2",
      name: "Anita Desai",
      experience: "10+ years",
      rating: 4.7,
      reviews: 256,
      hourlyRate: "$35-55",
      availability: "Weekdays & Saturday",
      location: "North & Central Areas",
      specialties: ["Flooring Repair", "Window Fixes", "Tile Work"],
      image: "🪚",
      bio: "Detail-focused repair specialist. Dedicated to restoring your home to its best condition efficiently and affordably."
    }
  ],
  trending: [
    {
      id: "tr1",
      name: "Noah Kim",
      experience: "5+ years",
      rating: 4.9,
      reviews: 112,
      hourlyRate: "$45-70",
      availability: "Weekdays & Weekends",
      location: "Citywide",
      specialties: ["Smart Home Setup", "EV Charger Installation", "Solar Panel Cleaning"],
      image: "🔥",
      bio: "Tech-savvy handyman specializing in modern home upgrades. Certified in smart home installation and EV charging systems."
    },
    {
      id: "tr2",
      name: "Aisha Patel",
      experience: "4+ years",
      rating: 4.7,
      reviews: 87,
      hourlyRate: "$40-60",
      availability: "Mon-Sat",
      location: "Metro Area",
      specialties: ["AC Installation", "Smart Thermostat", "Security Camera Setup"],
      image: "⚡",
      bio: "Specialized in modern home technology installations. Helps homeowners transition to energy-efficient smart systems."
    }
  ]
};