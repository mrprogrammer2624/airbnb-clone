import React from "react";
import { Container, CategoryBox } from "@/components"; // Adjust the import path if needed
import { TbBeach } from "react-icons/tb";
import { GiWindmill, GiForest } from "react-icons/gi";
import {
  FaMountain,
  FaCity,
  FaSpa,
  FaUtensils,
  FaSwimmingPool,
} from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BiCycling } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { IoRestaurant } from "react-icons/io5";
import { SiAirbnb } from "react-icons/si";
import { RiHotelFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmill",
    icon: GiWindmill,
    description: "This property is close to the windmill!",
  },
  {
    label: "Forest",
    icon: GiForest,
    description: "Experience nature in the forest!",
  },
  {
    label: "Mountain",
    icon: FaMountain,
    description: "Enjoy the majestic mountains!",
  },
  {
    label: "City",
    icon: FaCity,
    description: "Discover the city's vibrancy!",
  },
  {
    label: "Spa",
    icon: FaSpa,
    description: "Relax at our spa facilities!",
  },
  {
    label: "Dining",
    icon: FaUtensils,
    description: "Savor delicious meals!",
  },
  {
    label: "Pool",
    icon: FaSwimmingPool,
    description: "Take a dip in our pool!",
  },
  {
    label: "Shopping",
    icon: MdShoppingCart,
    description: "Shop till you drop!",
  },
  {
    label: "Cycling",
    icon: BiCycling,
    description: "Enjoy cycling around the area!",
  },
  {
    label: "Home",
    icon: AiFillHome,
    description: "Feel at home in our properties!",
  },
  {
    label: "Restaurant",
    icon: IoRestaurant,
    description: "Experience gourmet dining!",
  },
  {
    label: "Airbnb",
    icon: SiAirbnb,
    description: "Stay in an Airbnb property!",
  },
  {
    label: "Hotel",
    icon: RiHotelFill,
    description: "Enjoy luxury hotel amenities!",
  },
  {
    label: "Adventure",
    icon: GiWindmill,
    description: "Thrilling adventures await!",
  },
  {
    label: "Relaxation",
    icon: FaSpa,
    description: "Unwind and relax!",
  },
  {
    label: "Nature",
    icon: GiForest,
    description: "Explore beautiful nature!",
  },
  {
    label: "Culture",
    icon: FaCity,
    description: "Dive into rich cultural experiences!",
  },
  {
    label: "Wellness",
    icon: FaSpa,
    description: "Focus on your wellness journey!",
  },
  {
    label: "Beachfront",
    icon: TbBeach,
    description: "Stay right by the beach!",
  },
  {
    label: "Countryside",
    icon: GiForest,
    description: "Enjoy the serene countryside!",
  },
];

export const Categories = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const isMainPage = location.pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};
