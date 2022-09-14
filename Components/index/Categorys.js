import { useState } from "react";
import ProductList from "./ProductList";
import Image from "next/image";
import shoeicon from "../../public/shoeicon.png";
import tieicon from "../../public/tieicon.png";
import suteicon from "../../public/suteicon.png";
import tshirticon from "../../public/tshirticon.png";
import shirticon from "../../public/shirticon.png";
import pansicon from "../../public/pansicon.png";
import accessoryicon from "../../public/accessoryicon.png";
import filtericon from "../../public/filtericon.png";


const categorys = [
  { id: 1, name: "کت شلوار", icon: suteicon },
  { id: 2, name: "اکسسوری", icon: accessoryicon },
  { id: 3, name: "پیراهن", icon: shirticon },
  { id: 4, name: "تی شرت", icon: tshirticon },
  { id: 5, name: "شلوار", icon: pansicon },
  { id: 6, name: "کفش", icon: shoeicon },
  { id: 7, name: "کراوات", icon: tieicon }
];

export default function Categorys() {
  const [selectedCategory, setSelectedCategory] = useState(categorys[0].id);
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
          <div className="relative grid grid-cols-7">
            <div className="absolute left-0 -top-12 p-2 bg-gray-800 text-white cursor-pointer">
              <Image src={filtericon} alt="" width={32} height={32} />
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
      </div>
      <ProductList />
    </>
  );
}
