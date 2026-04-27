import {
    Award,
    CalendarDays,
    Car,
    CircleDollarSign,
    Clock,
    Compass,
    ConciergeBell,
    Crown,
    Gem,
    Globe2,
    Headphones,
    Hotel,
    Languages,
    MapPin,
    Mountain,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
    Utensils,
    Wine
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

export type TourCategory = "Culture" | "Adventure" | "Wine" | "Relax";
export type TourType = "Private" | "Group";

export type Destination = {
    name: string;
    region: string;
    image: string;
    summary: string;
};

export type Tour = {
    id: number;
    title: string;
    region: string;
    duration: string;
    days: number;
    price: number;
    category: TourCategory;
    type: TourType;
    rating: number;
    image: string;
    summary: string;
};

export type IconCard = {
    title: string;
    copy: string;
    icon: LucideIcon;
};

export const navItems = ["Home", "Tours", "Destinations", "Experiences", "About", "Testimonials", "Contact"];

export const trustSignals = [
    {label: "Rated by Travelers", value: 5, suffix: "/5", icon: Star},
    {label: "Happy Guests", value: 500, suffix: "+", icon: Users},
    {label: "Years Experience", value: 10, suffix: "+", icon: Award},
    {label: "Private & Group Tours", value: 42, suffix: "+", icon: Compass},
    {label: "Support", value: 24, suffix: "/7", icon: Headphones},
    {label: "Local Experts", value: 18, suffix: "+", icon: ShieldCheck}
];

export const destinations: Destination[] = [
    {
        name: "Tbilisi",
        region: "Capital of warmth",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1200&q=85",
        summary: "Balconied old streets, sulfur baths, contemporary dining and private after-hours cultural access."
    },
    {
        name: "Kazbegi",
        region: "Greater Caucasus",
        image: "https://images.unsplash.com/photo-1563284223-333497472e88?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Helicopter-like vistas by road, Gergeti Trinity, alpine picnics and boutique mountain lodges."
    },
    {
        name: "Kakheti",
        region: "Wine country",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85",
        summary: "Private qvevri tastings, vineyard estates, Sighnaghi terraces and refined Georgian tables."
    },
    {
        name: "Svaneti",
        region: "UNESCO highlands",
        image: "https://images.unsplash.com/photo-1569498283068-140e58143192?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Medieval towers, glacier drives, chef-led mountain dinners and rare Caucasus silence."
    },
    {
        name: "Batumi",
        region: "Black Sea coast",
        image: "https://images.unsplash.com/photo-1625566906959-ad8c031ee593?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Seafront suites, subtropical gardens, modern architecture and polished coastal evenings."
    },
    {
        name: "Tusheti",
        region: "Remote wilderness",
        image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=85",
        summary: "Ridge roads, stone villages, equestrian routes and private expedition-grade support."
    }
];

export const tours: Tour[] = [
    {
        id: 1,
        title: "Tbilisi Royal Escape",
        region: "Tbilisi",
        duration: "2 Days",
        days: 2,
        price: 220,
        category: "Culture",
        type: "Private",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=1200&q=85",
        summary: "A refined city immersion with private guides, hidden courtyards, fine dining and sulfur bath rituals."
    },
    {
        id: 2,
        title: "Kazbegi Scenic Drive",
        region: "Kazbegi",
        duration: "1 Day",
        days: 1,
        price: 150,
        category: "Adventure",
        type: "Private",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563284223-333497472e88?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "A cinematic route to Gergeti Trinity with panoramic stops, mountain lunch and premium transport."
    },
    {
        id: 3,
        title: "Kakheti Wine Prestige",
        region: "Kakheti",
        duration: "3 Days",
        days: 3,
        price: 340,
        category: "Wine",
        type: "Private",
        rating: 5,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
        summary: "Estate stays, sommelier-led qvevri tastings, Sighnaghi sunsets and family-hosted feasts."
    },
    {
        id: 4,
        title: "Svaneti Alpine Luxury",
        region: "Svaneti",
        duration: "5 Days",
        days: 5,
        price: 790,
        category: "Adventure",
        type: "Private",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        summary: "Mestia, Ushguli and glacier viewpoints with expert logistics, boutique stays and private drivers."
    },
    {
        id: 5,
        title: "Batumi Coast Retreat",
        region: "Batumi",
        duration: "3 Days",
        days: 3,
        price: 280,
        category: "Relax",
        type: "Private",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1723325823570-d57282e5f599?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Black Sea leisure, botanical gardens, design hotels and curated seafood evenings."
    },
    {
        id: 6,
        title: "Tusheti Adventure Elite",
        region: "Tusheti",
        duration: "6 Days",
        days: 6,
        price: 990,
        category: "Adventure",
        type: "Private",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1666620502339-337d6e378f38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Remote ridge routes, fortified villages and polished expedition planning for discerning explorers."
    },
    {
        id: 7,
        title: "Borjomi Wellness Journey",
        region: "Borjomi",
        duration: "2 Days",
        days: 2,
        price: 210,
        category: "Relax",
        type: "Group",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
        summary: "Mineral springs, forest spa rituals, restorative walks and a quiet resort escape."
    },
    {
        id: 8,
        title: "Mtskheta Heritage Route",
        region: "Mtskheta",
        duration: "1 Day",
        days: 1,
        price: 120,
        category: "Culture",
        type: "Group",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
        summary: "UNESCO monasteries, sacred hilltop views and a refined introduction to Georgia's spiritual capital."
    },
    {
        id: 9,
        title: "Gudauri Snow Privilege",
        region: "Kazbegi",
        duration: "4 Days",
        days: 4,
        price: 640,
        category: "Adventure",
        type: "Private",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563284223-333497472e88?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "Ski concierge, slope transfers, mountain-view suites and après-ski tasting dinners."
    },
    {
        id: 10,
        title: "Georgian Table & Wine",
        region: "Tbilisi",
        duration: "1 Day",
        days: 1,
        price: 135,
        category: "Wine",
        type: "Group",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85",
        summary: "Market walk, chef's table, supra traditions and private cellar pours in the old city."
    }
];

export const whyChooseUs: IconCard[] = [
    {
        title: "Private Drivers",
        copy: "Mercedes-class comfort, punctual routes and polished English-speaking chauffeurs.",
        icon: Car
    },
    {
        title: "Handpicked Hotels",
        copy: "Boutique lodges, vineyard estates and suites inspected by our local team.",
        icon: Hotel
    },
    {
        title: "Local Experts",
        copy: "Guides with deep regional access, cultural fluency and warm Georgian hospitality.",
        icon: Globe2
    },
    {
        title: "Flexible Routes",
        copy: "Every journey can adapt to pace, mood, weather and private interests.",
        icon: Compass
    },
    {
        title: "VIP Service",
        copy: "Restaurant reservations, airport fast-track support and discreet concierge care.",
        icon: Crown
    },
    {
        title: "Instant Support",
        copy: "Responsive trip managers available before, during and after your journey.",
        icon: Headphones
    }
];

export const tourFacts = [
    {label: "Duration", value: "3 Days", icon: Clock},
    {label: "Meeting Point", value: "Tbilisi hotel lobby", icon: MapPin},
    {label: "Languages", value: "English, German, Russian", icon: Languages},
    {label: "Group Size", value: "2-8 guests", icon: Users},
    {label: "Difficulty", value: "Easy to moderate", icon: Mountain},
    {label: "Schedule", value: "Daily on request", icon: CalendarDays},
    {label: "Includes", value: "Guide, tastings, transport", icon: Gem},
    {label: "Transport", value: "Luxury SUV or van", icon: Car},
    {label: "Tour Type", value: "Private wine escape", icon: Wine}
];

export const itinerary = [
    {
        day: "Day 1",
        title: "Tbilisi to Telavi",
        image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=85",
        copy: "Depart after breakfast for Gombori Pass, visit a family qvevri cellar, and settle into a vineyard estate."
    },
    {
        day: "Day 2",
        title: "Sighnaghi & Private Tastings",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=85",
        copy: "Explore Sighnaghi's balconies, lunch with a local host, and enjoy a reserve tasting at sunset."
    },
    {
        day: "Day 3",
        title: "Monasteries & Return",
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=85",
        copy: "Visit Alaverdi and Ikalto before a slow countryside lunch and private transfer back to Tbilisi."
    }
];

export const testimonials = [
    {
        name: "Emma",
        country: "United Kingdom",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
        quote: "Every detail felt considered. Georgia was beautiful, but their access and taste made it unforgettable."
    },
    {
        name: "Daniel",
        country: "Germany",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
        quote: "The Kazbegi drive, wine dinners and hotels were beyond expectation. Premium without feeling staged."
    },
    {
        name: "Luca",
        country: "Italy",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85",
        quote: "A rare mix of luxury and authenticity. Our guide opened doors we never could have found alone."
    }
];

export const galleryImages = [
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=85"
];

export const guideCards: IconCard[] = [
    {
        title: "Best Seasons",
        copy: "May-June and September-October offer warm days, green valleys and elegant touring weather.",
        icon: Sparkles
    },
    {
        title: "What to Pack",
        copy: "Layered clothing, refined casual wear, mountain shoes and a light jacket for evenings.",
        icon: ConciergeBell
    },
    {
        title: "Weather Tips",
        copy: "Georgia changes by region; our concierge adjusts timing around mountain and coast forecasts.",
        icon: Mountain
    },
    {
        title: "Visa Info",
        copy: "Many travelers enter visa-free for extended stays; we confirm requirements before you depart.",
        icon: Globe2
    },
    {
        title: "Currency Tips",
        copy: "Georgian lari is local currency; cards are common in cities and cash is helpful in villages.",
        icon: CircleDollarSign
    },
    {
        title: "Airport Transfer",
        copy: "Private arrivals are arranged with meet-and-greet, luggage support and hotel coordination.",
        icon: Car
    }
];

export const faqs = [
    {
        question: "Best time to visit Georgia?",
        answer: "Spring and autumn are ideal for wine, culture and mountain views. Summer is excellent for highland routes, while winter suits Gudauri and cozy city escapes."
    },
    {
        question: "Is Georgia safe?",
        answer: "Georgia is widely regarded as welcoming and safe for travelers. Our private tours add vetted drivers, local guidance and 24/7 support for additional ease."
    },
    {
        question: "Do I need visa?",
        answer: "Many nationalities can enter Georgia visa-free, but requirements depend on your passport. We verify the latest entry guidance during trip planning."
    },
    {
        question: "Private tours available?",
        answer: "Yes. Every itinerary can be built privately with custom pacing, premium transport, upgraded hotels and tailored dining."
    },
    {
        question: "Payment methods?",
        answer: "We accept secure card payments, bank transfers and staged deposits for longer bespoke journeys."
    }
];

export const articles = [
    {
        title: "A First-Class Weekend in Tbilisi",
        tag: "City Guide",
        image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&w=900&q=85",
        copy: "Where to stay, dine and wander when the capital is your private stage."
    },
    {
        title: "The Quiet Luxury of Kakheti",
        tag: "Wine",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85",
        copy: "Ancient qvevri, family tables and the vineyard estates worth slowing down for."
    },
    {
        title: "Kazbegi Without the Rush",
        tag: "Mountains",
        image: "https://images.unsplash.com/photo-1565008576618-223e7e6b98de?auto=format&fit=crop&w=900&q=85",
        copy: "How to experience Georgia's iconic highland route with comfort and space."
    }
];
