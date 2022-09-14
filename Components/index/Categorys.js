import CategoryCard from "../Common/cards/CategoryCard";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useState } from "react";
import ProductList from "./ProductList";
import Image from "next/image";
import shoeicon from "../../public/shoeicon.png";

const categorys = [
  { id: 1, name: "کتونی", icon: shoeicon },
  { id: 2, name: "کت شلوار", icon: shoeicon },
  { id: 3, name: "اکسسوری", icon: shoeicon },
  { id: 4, name: "کیف", icon: shoeicon },
  { id: 5, name: "تی شرت", icon: shoeicon },
  { id: 6, name: "شلوار", icon: shoeicon },
  { id: 7, name: "کفش", icon: shoeicon },
  { id: 8, name: "کراوات", icon: shoeicon }
];

export default function Categorys() {
  const [selectedCategory, setSelectedCategory] = useState(categorys[0].id);
  console.log(selectedCategory);
  return (
    <>
      <div className="h-32 mt-20 relative">
        <div
          className=" bg-gray-700 absolute -right-24 -top-72 w-72 h-72 rotate-45 blur-xl
          -z-50"
        />
        <h2 className="text-3xl font-light mb-10"> دسته بندی ها</h2>
        <div>
          {/*  chose a category  */}
          <div className="relative grid grid-cols-8">
            <div className="absolute left-0 -top-12 p-2 bg-gray-800 text-white cursor-pointer">
              <GlobeAltIcon className="w-8 h-8" />
            </div>
            {categorys.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 cursor-pointer hover:shadow-inner bg-zinc-50 text-light
                    ${category.id === selectedCategory ? "bg-gray-500 text-white" : "text-gray-700" }`
                }
              >
                <div className="h-10 w-10 mx-auto my-2">
                  <Image width={32} height={32} src={category.icon} alt="" />
                </div>
                <h2 className="flex justify-center">{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <CategoryCard />
      </div>
      <ProductList />
    </>
  );
}
