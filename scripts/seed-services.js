const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const servicesData = [
  {
    slug: "laundry-services",
    title: "Laundry Services",
    description: "Professional wash and fold laundry services for all your clothing needs",
    fullDescription:
      "Our comprehensive laundry services include washing, drying, and folding of all types of clothing. We use premium detergents and fabric softeners to ensure your clothes come back fresh and clean.",
    rating: 4.8,
    reviews: 245,
    duration: "24-48 hours",
    items: {
      men: [
        { id: "m1", name: "T-Shirts", price: 3, description: "Cotton t-shirts, polo shirts" },
        { id: "m2", name: "Shirts (Formal)", price: 5, description: "Dress shirts, business shirts" },
        { id: "m3", name: "Pants/Trousers", price: 6, description: "Casual pants, formal trousers" },
        { id: "m4", name: "Jeans", price: 7, description: "Denim jeans, casual wear" },
        { id: "m5", name: "Suits", price: 15, description: "Two-piece suits, blazers" },
        { id: "m6", name: "Underwear", price: 2, description: "Undergarments, socks" },
      ],
      women: [
        { id: "w1", name: "T-Shirts/Tops", price: 3, description: "Casual tops, blouses" },
        { id: "w2", name: "Dresses", price: 8, description: "Casual and formal dresses" },
        { id: "w3", name: "Pants/Jeans", price: 6, description: "Trousers, jeans, leggings" },
        { id: "w4", name: "Skirts", price: 5, description: "Mini, midi, maxi skirts" },
        { id: "w5", name: "Blouses", price: 6, description: "Formal and casual blouses" },
        { id: "w6", name: "Underwear/Lingerie", price: 2, description: "Undergarments, bras" },
      ],
      children: [
        { id: "c1", name: "T-Shirts", price: 2, description: "Kids casual t-shirts" },
        { id: "c2", name: "Pants/Shorts", price: 3, description: "Kids pants and shorts" },
        { id: "c3", name: "Dresses", price: 4, description: "Girls dresses" },
        { id: "c4", name: "School Uniforms", price: 5, description: "School shirts, pants" },
        { id: "c5", name: "Pajamas", price: 3, description: "Sleepwear, nightwear" },
        { id: "c6", name: "Underwear", price: 1, description: "Kids undergarments" },
      ],
    },
  },
  {
    slug: "dry-cleaning-services",
    title: "Dry Cleaning Services",
    description: "Professional dry cleaning for delicate and formal garments",
    fullDescription:
      "Our dry cleaning services use eco-friendly solvents to clean delicate fabrics that cannot be washed with water. Perfect for suits, dresses, and specialty items.",
    rating: 4.9,
    reviews: 189,
    duration: "2-3 days",
    items: {
      men: [
        { id: "m1", name: "Suits", price: 20, description: "Two-piece business suits" },
        { id: "m2", name: "Blazers", price: 15, description: "Sport coats, blazers" },
        { id: "m3", name: "Dress Shirts", price: 8, description: "Formal dress shirts" },
        { id: "m4", name: "Ties", price: 5, description: "Neckties, bow ties" },
        { id: "m5", name: "Coats/Jackets", price: 25, description: "Winter coats, leather jackets" },
      ],
      women: [
        { id: "w1", name: "Dresses", price: 18, description: "Formal and cocktail dresses" },
        { id: "w2", name: "Blouses", price: 10, description: "Silk and delicate blouses" },
        { id: "w3", name: "Skirts", price: 12, description: "Formal and business skirts" },
        { id: "w4", name: "Coats", price: 30, description: "Winter coats, fur coats" },
        { id: "w5", name: "Evening Gowns", price: 35, description: "Formal evening wear" },
      ],
      children: [
        { id: "c1", name: "Formal Wear", price: 12, description: "Kids formal suits, dresses" },
        { id: "c2", name: "Coats", price: 15, description: "Kids winter coats" },
        { id: "c3", name: "School Blazers", price: 10, description: "School uniform blazers" },
      ],
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
  {
    slug: "luxury-shoe-cleaning",
    title: "Luxury Shoe Cleaning",
    description: "Premium shoe cleaning and restoration services",
    fullDescription:
      "Our luxury shoe cleaning service restores your footwear to like-new condition using specialized techniques and premium products.",
    rating: 4.9,
    reviews: 98,
    duration: "3-5 days",
    items: {
      men: [
        {
          id: "1",
          name: "Men's Leather Shoe Deep Clean",
          description: "Premium cleaning and conditioning for men's leather shoes to restore shine and remove dirt.",
          price: 350,
          image: "/images/shoes/men-leather.jpg",
        },
        {
          id: "2",
          name: "Men's Suede Shoe Treatment",
          description: "Gentle suede cleaning to remove stains while preserving texture and color.",
          price: 400,
          image: "/images/shoes/men-suede.jpg",
        },
        {
          id: "3",
          name: "Men's Sneakers Restoration",
          description: "Deep cleaning and whitening for men's sneakers, removing dirt and yellowing.",
          price: 300,
          image: "/images/shoes/men-sneakers.jpg",
        },
      ],
      women: [
        {
          id: "4",
          name: "Women's High Heel Cleaning",
          description: "Specialized cleaning for delicate high heels and designer shoes.",
          price: 380,
          image: "/images/shoes/women-heels.jpg",
        },
        {
          id: "5",
          name: "Women's Suede Boot Care",
          description: "Luxury treatment for suede boots, including stain removal and texture preservation.",
          price: 420,
          image: "/images/shoes/women-suede-boots.jpg",
        },
        {
          id: "6",
          name: "Women's Designer Sneakers Cleaning",
          description: "Gentle yet effective cleaning for premium women's sneakers.",
          price: 350,
          image: "/images/shoes/women-sneakers.jpg",
        },
      ],
      children: [
        {
          id: "7",
          name: "Kids' School Shoe Cleaning",
          description: "Durable and safe cleaning for children's school shoes.",
          price: 250,
          image: "/images/shoes/kids-school.jpg",
        },
        {
          id: "8",
          name: "Kids' Sports Shoes Cleaning",
          description: "Deep cleaning for children's sports and activity shoes.",
          price: 220,
          image: "/images/shoes/kids-sports.jpg",
        },
        {
          id: "9",
          name: "Kids' Party Shoes Shine",
          description: "Gentle cleaning for kids' formal and party shoes.",
          price: 260,
          image: "/images/shoes/kids-party.jpg",
        },
      ],
    },
  },
  {
    slug: "commercial-laundry-service",
    title: "Commercial Laundry Service",
    description: "Bulk laundry services for businesses and institutions",
    fullDescription:
      "Professional commercial laundry services for businesses, hotels, restaurants, and institutions. We handle large volumes with quick turnaround times.",
    rating: 4.8,
    reviews: 67,
    duration: "1-2 days",
    items: {
      men: [
        {
          id: "10",
          name: "Men's Uniform Wash & Press",
          description:
            "Professional washing and pressing for men's office and industrial uniforms. Perfect for bulk corporate cleaning needs.",
          price: 150,
          image: "/images/laundry/men-uniform.jpg",
        },
        {
          id: "11",
          name: "Men's Workwear Deep Clean",
          description: "Heavy-duty deep cleaning for men's workwear, removing oil, grease, and industrial stains.",
          price: 180,
          image: "/images/laundry/men-workwear.jpg",
        },
        {
          id: "12",
          name: "Men's Sportswear Sanitization",
          description: "Odor-free sanitization for men's sports gear and jerseys, ideal for gyms and sports clubs.",
          price: 140,
          image: "/images/laundry/men-sportswear.jpg",
        },
      ],
      women: [
        {
          id: "13",
          name: "Women's Uniform Wash & Press",
          description: "Corporate and industrial women's uniform laundry with professional pressing.",
          price: 150,
          image: "/images/laundry/women-uniform.jpg",
        },
        {
          id: "14",
          name: "Women's Work Apron Cleaning",
          description: "Deep cleaning service for women's aprons used in hospitality and food services.",
          price: 130,
          image: "/images/laundry/women-apron.jpg",
        },
        {
          id: "15",
          name: "Women's Sportswear Bulk Cleaning",
          description: "Bulk cleaning and sanitization for women's sports uniforms and training gear.",
          price: 140,
          image: "/images/laundry/women-sportswear.jpg",
        },
      ],
      children: [
        {
          id: "16",
          name: "Children's School Uniform Cleaning",
          description: "Washing and pressing for children's school uniforms, available in bulk for institutions.",
          price: 120,
          image: "/images/laundry/kids-uniform.jpg",
        },
        {
          id: "17",
          name: "Children's Sports Kit Laundry",
          description: "Thorough cleaning for kids' sports kits and activity uniforms.",
          price: 110,
          image: "/images/laundry/kids-sportskit.jpg",
        },
        {
          id: "18",
          name: "Children's Costume Cleaning",
          description: "Specialized cleaning for kids' event costumes and performance wear.",
          price: 130,
          image: "/images/laundry/kids-costume.jpg",
        },
      ],
    },
  },
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
