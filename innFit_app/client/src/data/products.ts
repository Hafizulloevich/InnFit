import shoesImg from "@assets/stock_images/athletic_running_sho_57896830.jpg";
import dressImg from "@assets/stock_images/summer_floral_dress__e7bf676c.jpg";
import bagImg from "@assets/stock_images/leather_crossbody_ba_d8ead09c.jpg";
import watchImg from "@assets/stock_images/fitness_smartwatch_t_e6210776.jpg";
import tshirtImg from "@assets/stock_images/women_casual_t-shirt_5b03e4eb.jpg";
import formalShoesImg from "@assets/stock_images/men_formal_shoes_b7115c70.jpg";
import beanieImg from "@assets/stock_images/winter_beanie_cap_e1835964.jpg";
import yogaPantsImg from "@assets/stock_images/sports_yoga_pants_wo_81a14451.jpg";

export interface Product {
  id: number;
  name: string;
  desc: string;
  fullDescription: string;
  price: number;
  rating: number;
  fit: number;
  image: string;
  category: string;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Sneakers",
    desc: "Nike Air Jordan Retro 1 - Premium basketball shoes",
    fullDescription: "Experience ultimate comfort with Nike Air Jordan Retro 1. Premium basketball shoes with heritage design and modern comfort technology. Perfect for casual wear or court performance. Features cushioned sole, breathable upper, and timeless style.",
    price: 1900,
    rating: 4.5,
    fit: 92,
    image: shoesImg,
    category: "shoes",
    reviews: 345
  },
  {
    id: 2,
    name: "Summer Dress",
    desc: "Floral Print Maxi dress perfect for summer",
    fullDescription: "Beautiful floral print maxi dress designed for warm summer days. Made from breathable cotton blend fabric with vibrant colors. Features adjustable straps, comfortable fit, and elegant flowing design. Perfect for casual outings or beach vacation.",
    price: 890,
    rating: 4.8,
    fit: 88,
    image: dressImg,
    category: "clothing",
    reviews: 512
  },
  {
    id: 3,
    name: "Leather Bag",
    desc: "Premium Crossbody leather bag with adjustable strap",
    fullDescription: "Handcrafted premium leather crossbody bag perfect for everyday use. Features genuine Italian leather, adjustable shoulder strap, and multiple compartments for organization. Timeless design that complements any outfit.",
    price: 450,
    rating: 4.6,
    fit: 85,
    image: bagImg,
    category: "bags",
    reviews: 278
  },
  {
    id: 4,
    name: "Smart Watch",
    desc: "Fitness Tracker Pro with heart rate monitor",
    fullDescription: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and workout modes. Features AMOLED display, 7-day battery life, and water resistance. Perfect for tracking your health and fitness goals with style.",
    price: 299,
    rating: 4.7,
    fit: 91,
    image: watchImg,
    category: "accessories",
    reviews: 623
  },
  {
    id: 5,
    name: "Performance Running Shoes",
    desc: "Professional grade athletic shoes for runners",
    fullDescription: "Premium running shoes designed for competitive athletes. Lightweight design with advanced cushioning technology, breathable mesh upper, and superior grip. Ideal for track running, trail running, or everyday workouts.",
    price: 1200,
    rating: 4.4,
    fit: 89,
    image: formalShoesImg,
    category: "shoes",
    reviews: 421
  },
  {
    id: 6,
    name: "Winter Coat",
    desc: "Premium Wool winter coat with insulation",
    fullDescription: "Luxurious wool winter coat with thermal insulation technology. Keeps you warm in extreme cold while maintaining elegant style. Features water-resistant outer layer, internal pockets, and adjustable waist belt.",
    price: 2100,
    rating: 4.9,
    fit: 87,
    image: dressImg,
    category: "clothing",
    reviews: 189
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    desc: "Soft cotton unisex casual t-shirt",
    fullDescription: "Premium quality cotton t-shirt perfect for casual everyday wear. Comfortable fit, breathable fabric, and durable stitching. Available in multiple colors and sizes for the perfect casual look.",
    price: 45,
    rating: 4.3,
    fit: 86,
    image: tshirtImg,
    category: "clothing",
    reviews: 892
  },
  {
    id: 8,
    name: "Formal Dress Shoes",
    desc: "Men's elegant formal leather shoes",
    fullDescription: "Classic formal dress shoes in genuine leather. Perfect for business meetings, weddings, or formal events. Features comfortable insole, classic Oxford design, and professional shine finish.",
    price: 320,
    rating: 4.6,
    fit: 90,
    image: formalShoesImg,
    category: "shoes",
    reviews: 267
  },
  {
    id: 9,
    name: "Winter Beanie",
    desc: "Warm wool knit winter beanie cap",
    fullDescription: "Cozy knit beanie perfect for cold winter days. Made from soft wool blend that provides warmth without bulk. Features ribbed knit pattern and comfortable fit for most head sizes.",
    price: 35,
    rating: 4.2,
    fit: 84,
    image: beanieImg,
    category: "accessories",
    reviews: 445
  },
  {
    id: 10,
    name: "Yoga Leggings",
    desc: "High-waist yoga pants with pockets",
    fullDescription: "Premium yoga leggings with high-waist design and functional pockets. Made from stretchy, breathable fabric that moves with you. Perfect for yoga, gym, or casual wear with superior comfort.",
    price: 85,
    rating: 4.7,
    fit: 93,
    image: yogaPantsImg,
    category: "clothing",
    reviews: 734
  }
];

export const getRandomFit = (id: number) => {
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const baseValue = Math.floor(seededRandom(id * 123) * 16) + 80;
  return Math.min(Math.max(baseValue, 80), 99);
};
