const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const servicesData = [
  // 1. Laundry Services
  {
    slug: "laundry-services",
    title: "Laundry Services",
    description: "Professional wash and press laundry services for all your clothing needs.",
    fullDescription:
      "Our comprehensive laundry services include washing and pressing of all types of clothing. We use premium detergents to ensure your clothes come back fresh, clean, and wrinkle-free.",
    rating: 4.8,
    reviews: 245,
    duration: "24-48 hours",
    items: {
      men: [
        { id: "m1", name: "T-shirts/Shirts", price: 6, description: "Casual and formal shirts" },
        { id: "m2", name: "Trouser", price: 6, description: "Casual pants, formal trousers" },
        { id: "m3", name: "Kandora", price: 10, description: "Traditional Kandora" },
        { id: "m4", name: "Ghatra", price: 8, description: "Headwear" },
        { id: "m5", name: "Lungi", price: 6, description: "Casual wear" },
        { id: "m6", name: "Shorts", price: 6, description: "Casual shorts" },
        { id: "m7", name: "Cap/Tie", price: 5, description: "Caps and ties" },
        { id: "m8", name: "Jacket/Coat", price: 15, description: "Light jackets and coats" },
        { id: "m9", name: "Waist Coat", price: 10, description: "Formal waistcoats" },
        { id: "m10", name: "Suit (2 pcs)", price: 20, description: "Two-piece suits" },
        { id: "m11", name: "Suit (3 pcs)", price: 30, description: "Three-piece suits" },
        { id: "m12", name: "Inner Wear", price: 3, description: "Undergarments" },
        { id: "m13", name: "Socks (Pair)", price: 3, description: "Pairs of socks" },
        { id: "m14", name: "Sweater", price: 10, description: "Knit sweaters" },
        { id: "m15", name: "Handkerchiefs", price: 1, description: "Handkerchiefs" },
      ],
      women: [
        { id: "w1", name: "T-shirts/Shirts", price: 6, description: "Casual tops, blouses" },
        { id: "w2", name: "Trouser", price: 6, description: "Trousers, jeans, leggings" },
        { id: "w3", name: "Abbaya", price: 10, description: "Traditional Abbaya" },
        { id: "w4", name: "Scarf/Dupatta", price: 4, description: "Scarves and dupattas" },
        { id: "w5", name: "Skirt/Shorts", price: 6, description: "Skirts and shorts" },
        { id: "w6", name: "Full Dress", price: 12, description: "Casual and formal dresses" },
        { id: "w7", name: "Salwar Kameez", price: 10, description: "Traditional attire" },
        { id: "w8", name: "Blouse", price: 8, description: "Formal and casual blouses" },
        { id: "w9", name: "Saree", price: 15, description: "Traditional Saree" },
        { id: "w10", name: "Coat/Jacket", price: 15, description: "Jackets and coats" },
        { id: "w11", name: "Suit (2 pcs)", price: 20, description: "Two-piece suits" },
        { id: "w12", name: "Suit (3 pcs)", price: 30, description: "Three-piece suits" },
        { id: "w13", name: "Sweater", price: 10, description: "Knit sweaters" },
        { id: "w14", name: "Inner Wear", price: 3, description: "Undergarments, lingerie" },
      ],
          HouseHolds:[
        { id: "h1", name: "Police Dress/Safari", price: 14, description: "Uniform cleaning" },
        { id: "h2", name: "Bedsheets Single", price: 10, description: "For single beds" },
        { id: "h3", name: "Bedsheets Double", price: 12, description: "For double, queen, or king beds" },
        { id: "h4", name: "Pillow Case", price: 3, description: "Standard pillow cases" },
        { id: "h5", name: "Pillow", price: 5, description: "Pillow cleaning" },
        { id: "h6", name: "Cushion", price: 5, description: "Cushion cleaning" },
        { id: "h7", name: "Bath Towel Medium", price: 4, description: "Medium-sized towels" },
        { id: "h8", name: "Bath Towel Large", price: 6, description: "Large-sized towels" },
        { id: "h9", name: "Wedding Dress (Normal)", price: 50, description: "Standard size wedding dresses" },
        { id: "h10", name: "Wedding Dress (Bigger)", price: 80, description: "Larger size wedding dresses" },
        { id: "h11", name: "Curtains (per sq. meter)", price: 10, description: "Price per square meter" },
      ]
    },
  },
  // 2. Dry Cleaning Services
  {
    slug: "dry-cleaning-services",
    title: "Dry Cleaning Services",
    description: "Professional dry cleaning for delicate and formal garments.",
    fullDescription:
      "Our dry cleaning services use eco-friendly solvents to clean delicate fabrics that cannot be washed with water. Perfect for suits, dresses, and specialty items.",
    rating: 4.9,
    reviews: 189,
    duration: "2-3 days",
    items: {
      men: [
        { id: "mdc1", name: "T-shirts/Shirts", price: 8, description: "Casual and formal shirts" },
        { id: "mdc2", name: "Trouser", price: 8, description: "Casual pants, formal trousers" },
        { id: "mdc3", name: "Kandora", price: 12, description: "Traditional Kandora" },
        { id: "mdc4", name: "Ghatra", price: 10, description: "Headwear" },
        { id: "mdc5", name: "Lungi", price: 8, description: "Casual wear" },
        { id: "mdc6", name: "Shorts", price: 8, description: "Casual shorts" },
        { id: "mdc7", name: "Cap/Tie", price: 7, description: "Caps and ties" },
        { id: "mdc8", name: "Jacket/Coat", price: 20, description: "Blazers, winter coats" },
        { id: "mdc9", name: "Waist Coat", price: 14, description: "Formal waistcoats" },
        { id: "mdc10", name: "Suit (2 pcs)", price: 25, description: "Two-piece business suits" },
        { id: "mdc11", name: "Suit (3 pcs)", price: 35, description: "Three-piece business suits" },
        { id: "mdc12", name: "Inner Wear", price: 5, description: "Delicate undergarments" },
        { id: "mdc13", name: "Socks (Pair)", price: 3, description: "Pairs of socks" },
        { id: "mdc14", name: "Sweater", price: 14, description: "Delicate sweaters" },
        { id: "mdc15", name: "Handkerchiefs", price: 3, description: "Handkerchiefs" },
      ],
      women: [
        { id: "wdc1", name: "T-shirts/Shirts", price: 8, description: "Casual tops, blouses" },
        { id: "wdc2", name: "Trouser", price: 8, description: "Trousers, jeans, leggings" },
        { id: "wdc3", name: "Abbaya", price: 14, description: "Traditional Abbaya" },
        { id: "wdc4", name: "Scarf/Dupatta", price: 6, description: "Scarves and dupattas" },
        { id: "wdc5", name: "Skirt/Shorts", price: 8, description: "Skirts and shorts" },
        { id: "wdc6", name: "Full Dress", price: 15, description: "Formal and cocktail dresses" },
        { id: "wdc7", name: "Salwar Kameez", price: 12, description: "Traditional attire" },
        { id: "wdc8", name: "Blouse", price: 10, description: "Silk and delicate blouses" },
        { id: "wdc9", name: "Saree", price: 20, description: "Silk and formal Saree" },
        { id: "wdc10", name: "Coat/Jacket", price: 20, description: "Winter coats, blazers" },
        { id: "wdc11", name: "Suit (2 pcs)", price: 25, description: "Two-piece suits" },
        { id: "wdc12", name: "Suit (3 pcs)", price: 35, description: "Three-piece suits" },
        { id: "wdc13", name: "Sweater", price: 14, description: "Delicate sweaters" },
        { id: "wdc14", name: "Inner Wear", price: 5, description: "Delicate undergarments" },
      ],
          HouseHolds:[
       { id: "hdc1", name: "Police Dress/Safari", price: 18, description: "Uniform dry cleaning" },
        { id: "hdc2", name: "Bedsheets Single", price: 12, description: "For single beds" },
        { id: "hdc3", name: "Bedsheets Double", price: 14, description: "For double, queen, or king beds" },
        { id: "hdc4", name: "Duvet Small", price: 25, description: "For single or small duvets" },
        { id: "hdc5", name: "Duvet Medium", price: 30, description: "For double or medium duvets" },
        { id: "hdc6", name: "Duvet Large", price: 35, description: "For large or king-size duvets" },
        { id: "hdc7", name: "Pillow Case", price: 4, description: "Delicate pillow cases" },
        { id: "hdc8", name: "Pillow", price: 20, description: "Pillow dry cleaning" },
        { id: "hdc9", name: "Cushion", price: 20, description: "Cushion dry cleaning" },
        { id: "hdc10", name: "Bath Towel Medium", price: 5, description: "Medium-sized towels" },
        { id: "hdc11", name: "Bath Towel Large", price: 7, description: "Large-sized towels" },
        { id: "hdc12", name: "Wedding Dress (Normal)", price: 80, description: "Standard size wedding dresses" },
        { id: "hdc13", name: "Wedding Dress (Bigger)", price: 100, description: "Larger size wedding dresses" },
        {
          id: "hdc14",
          name: "Curtains (per sq. meter)",
          price: 15,
          description: "Price per square meter for delicate curtains",
        },
        { id: "hdc15", name: "Carpet (per sq. meter)", price: 25, description: "Price per square meter" },
      ]
    },
  },
  {
    slug: "express-laundry-services",
    title: "Express Laundry Services",
    description: "Fast turnaround laundry services for urgent needs",
    fullDescription:
      "When you need your laundry done quickly, our express services deliver. Choose from 8-hour, 24-hour, or standard turnaround times.",
    rating: 4.7,
    reviews: 156,
    duration: "8-24 hours",
    items: {
      "wash-and-fold": [
        {
          id: "e1",
          name: "Express Wash & Fold - 8hrs",
          unit: "Per KG",
          price: 60,
          description: "Fast wash and fold service completed within 8 hours",
        },
        {
          id: "e2",
          name: "Express Wash & Fold - 24hrs",
          unit: "Per KG",
          price: 30,
          description: "Wash and fold service completed within 24 hours",
        },
        {
          id: "e3",
          name: "Normal Wash & Fold",
          unit: "Per KG",
          price: 15,
          description: "Standard wash and fold service",
        },
      ],
      "wash-and-iron": [
        {
          id: "e4",
          name: "Express Wash & Iron - 6hrs",
          unit: "Per KG",
          price: 80,
          description: "Fast wash and iron service completed within 6 hours",
        },
        {
          id: "e5",
          name: "Express Wash & Iron - 24hrs",
          unit: "Per KG",
          price: 40,
          description: "Wash and iron service completed within 24 hours",
        },
        {
          id: "e6",
          name: "Normal Wash & Iron",
          unit: "Per KG",
          price: 20,
          description: "Standard wash and iron service",
        },
      ],
    },
  },
  // 4. Shoe & Bag Spa - NOTE: Not found in provided data, but shoe cleaning exists
  {
        slug: "shoe-bag-spa",
    title: "Shoe & Bag Spa Services",
    description: "Normal shoe cleaning and restoration services for all types of footwear.",
    fullDescription:
      "Our specialized shoe cleaning service restores your footwear to like-new condition using premium products. We handle everything from sports sneakers to luxury designer shoes.",
    rating: 4.9,
    reviews: 98,
    duration: "3-5 days",
    items: {
     "normal-shoes": [
        { id: "s1", name: "Formal Shoes", price: 90, description: "Standard cleaning" },
        { id: "s2", name: "Formal Shoes (Leather)", price: 90, description: "Specialized leather care" },
        {
          id: "s3",
          name: "Formal Shoes (Mixed Materials)",
          price: 100,
          description: "For shoes with multiple materials",
        },
        { id: "s4", name: "Sports Sneakers", price: 65, description: "Standard cleaning" },
        { id: "s5", name: "Sports Sneakers (Leather)", price: 80, description: "Specialized leather care" },
        {
          id: "s6",
          name: "Sports Sneakers (Mixed Materials)",
          price: 80,
          description: "For shoes with multiple materials",
        },
        { id: "s7", name: "Designer Sneakers", price: 120, description: "Standard cleaning" },
        { id: "s8", name: "Designer Sneakers (Leather)", price: 130, description: "Specialized leather care" },
        {
          id: "s9",
          name: "Designer Sneakers (Mixed Materials)",
          price: 130,
          description: "For shoes with multiple materials",
        },
        { id: "s10", name: "Sandals & Flip Flops", price: 60, description: "Standard cleaning" },
        { id: "s11", name: "Sandals & Flip Flops (Leather)", price: 70, description: "Specialized leather care" },
        {
          id: "s12",
          name: "Sandals & Flip Flops (Mixed Materials)",
          price: 70,
          description: "For footwear with multiple materials",
        },
        { id: "s13", name: "Designer Sandals", price: 100, description: "Standard cleaning" },
        { id: "s14", name: "Designer Sandals (Leather)", price: 115, description: "Specialized leather care" },
        {
          id: "s15",
          name: "Designer Sandals (Mixed Materials)",
          price: 115,
          description: "For footwear with multiple materials",
        },
        { id: "s16", name: "Designer Formal Shoes", price: 110, description: "Standard cleaning" },
        { id: "s17", name: "Designer Formal Shoes (Leather)", price: 120, description: "Specialized leather care" },
        {
          id: "s18",
          name: "Designer Formal Shoes (Mixed Materials)",
          price: 120,
          description: "For shoes with multiple materials",
        },
        {
          id: "s19",
          name: "Kids Shoe Care (Any)",
          price: 50,
          description: "Gentle cleaning for any type of kids' shoes",
        },
      ],
    }
  },
  // 5. Luxury Shoe Cleaning - NOTE: Not found as separate service, exists as category in shoe cleaning
    {
    slug: "Luxury-shoe-cleaning",
    title: "Shoe Cleaning Services",
    description: "Premium shoe cleaning and restoration services for all types of footwear.",
    fullDescription:
      "Our specialized shoe cleaning service restores your footwear to like-new condition using premium products. We handle everything from sports sneakers to luxury designer shoes.",
    rating: 4.9,
    reviews: 98,
    duration: "3-5 days",
    items: {
      "luxury-shoes": [
        {
          id: "ls1",
          name: "Luxury Formal shoes",
          price: 120,
          description: "Premium cleaning for high-end formal shoes",
        },
        {
          id: "ls2",
          name: "Luxury Sports Sneakers",
          price: 100,
          description: "Premium cleaning for high-end sneakers",
        },
        {
          id: "ls3",
          name: "Luxury Designer Sneakers",
          price: 150,
          description: "Premium cleaning for high-end designer sneakers",
        },
        {
          id: "ls4",
          name: "Luxury Sandals & Flip Flops",
          price: 100,
          description: "Premium cleaning for high-end sandals",
        },
        {
          id: "ls5",
          name: "Luxury Designer Sandals",
          price: 120,
          description: "Premium cleaning for high-end designer sandals",
        },
        {
          id: "ls6",
          name: "Luxury Designer Formal Shoes",
          price: 140,
          description: "Premium cleaning for high-end designer formal shoes",
        },
      ],
    },
  },
  // 6. Commercial Laundry Service
  {
    slug: "commercial-laundry-service",
    title: "Commercial Laundry Service",
    description: "Bulk laundry services for businesses and institutions.",
    fullDescription:
      "Professional commercial laundry services for businesses, hotels, restaurants, and institutions. We handle large volumes with quick turnaround times. Prices to be shared upon request.",
    rating: 4.8,
    reviews: 67,
    duration: "1-2 days",
    items: {
      "commercial-items": [
        { id: "com1", name: "Bedsheets single", price: 0, description: "Price to be shared" },
        { id: "com2", name: "Bedsheets Double", price: 0, description: "Price to be shared" },
        { id: "com3", name: "Pillow Case", price: 0, description: "Price to be shared" },
        { id: "com4", name: "Pillow Cover", price: 0, description: "Price to be shared" },
        { id: "com5", name: "Face Towel", price: 0, description: "Price to be shared" },
        { id: "com6", name: "Hand Towel", price: 0, description: "Price to be shared" },
        { id: "com7", name: "Floor Matt", price: 0, description: "Price to be shared" },
        { id: "com8", name: "Cushion Small", price: 0, description: "Price to be shared" },
        { id: "com9", name: "Cushion Medium", price: 0, description: "Price to be shared" },
        { id: "com10", name: "Cushion Large", price: 0, description: "Price to be shared" },
        { id: "com11", name: "Bathrobe", price: 0, description: "Price to be shared" },
        { id: "com12", name: "Table Napkin", price: 0, description: "Price to be shared" },
        { id: "com13", name: "Duvet Cover Single", price: 0, description: "Price to be shared" },
        { id: "com14", name: "Duvet Cover Large", price: 0, description: "Price to be shared" },
      ],
    },
  },
  // 7. Curtain Cleaning Service - NOTE: Not found as separate service, exists in household services
  // 8. Carpet Cleaning Service
  {
    slug: "carpet-cleaning-service",
    title: "Carpet Cleaning Service",
    description: "Specialized washing and steam cleaning for all types of carpets.",
    fullDescription:
      "Our carpet cleaning services deep clean and restore your carpets, from standard rugs to premium silk and Persian carpets. We offer both washing and steam cleaning options.",
    rating: 4.9,
    reviews: 78,
    duration: "3-5 days",
    items: {
      "carpet-cleaning": [
        { id: "cc1", name: "Standard Carpet SQM (wash only)", price: 20, description: "Per square meter" },
        {
          id: "cc2",
          name: "Premium Carpet - Silk, Wool, Persian, etc (wash only)",
          price: 80,
          description: "Per square meter, for delicate carpets",
        },
        { id: "cc3", name: "Prayer Matt", price: 15, description: "Standard size prayer matts" },
        { id: "cc4", name: "Standard Carpet Sqm (Steam)", price: 12, description: "Per square meter, steam cleaning" },
        {
          id: "cc5",
          name: "Premium Carpet - Silk, Wool, Persian, etc (steam)",
          price: 50,
          description: "Per square meter, for delicate carpets",
        },
      ],
    },
  },
  // 9. Soft Toy Cleaning Service
  {
    slug: "soft-toy-cleaning-service",
    title: "Soft Toy Cleaning Service",
    description: "Gentle and hygienic cleaning for soft toys.",
    fullDescription:
      "We provide safe and thorough cleaning for soft toys of all sizes, ensuring they are fresh and hygienic. Price may vary for different types of toys.",
    rating: 4.7,
    reviews: 45,
    duration: "2-3 days",
    items: {
      "toy-cleaning": [
        {
          id: "st1",
          name: "Soft toy cleaning and washing",
          price: 20,
          description: "Standard price, may vary based on toy type",
        },
      ],
    },
  },
  // Additional services from your data that don't match the requested order:
]

async function seedServices() {
  try {
    console.log("🌱 Starting services seeding...")

    // Clear existing services
    await prisma.serviceItem.deleteMany()
    await prisma.service.deleteMany()

    for (const serviceData of servicesData) {
      console.log(`📝 Creating service: ${serviceData.title}`)

      // Create service
      const service = await prisma.service.create({
        data: {
          slug: serviceData.slug,
          title: serviceData.title,
          description: serviceData.description,
          fullDescription: serviceData.fullDescription,
          rating: serviceData.rating,
          reviews: serviceData.reviews,
          duration: serviceData.duration,
        },
      })

      // Create service items
      for (const [category, items] of Object.entries(serviceData.items)) {
        console.log(`  📦 Adding ${items.length} items for category: ${category}`)

        for (const item of items) {
          await prisma.serviceItem.create({
            data: {
              serviceId: service.id,
              itemId: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              unit: item.unit || null,
              image: item.image || null,
              category: category,
            },
          })
        }
      }
    }

    console.log("✅ Services seeding completed successfully!")
    console.log(`📊 Created ${servicesData.length} services with their items`)
  } catch (error) {
    console.error("❌ Error seeding services:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seeding function
seedServices().catch((error) => {
  console.error("Seeding failed:", error)
  process.exit(1)
})
