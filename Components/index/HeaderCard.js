import Image from "next/image";
import clothe from "../../public/clothe3.png";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";

const product = {
  name: "پیراهن لی مدل XXX",
  collection: "summer collection",
  price: "400 هزار تومان",
  rating: 3.3,
  reviewCount: 117,
  href: "#",
  imageSrc: "",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-300" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-300" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-500" },
    { name: "Blue", class: "bg-indigo-700", selectedClass: "ring-indigo-300" }
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false }
  ]
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderCard() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end w-full h-full mx-auto sm:px-6 lg:px-8">
          <div className="w-2/4 my-auto px-10">
            <div className="py-8">
              <h2 className="text-5xl text-gray-700 font-thin uppercase tracking-tight">
                {product.collection}
              </h2>

              <p className="text-gray-500 font-extralight py-4">
                اینجا برای توضیح کوتاه اینجا برای توضیح کوتاه اینجا برای توضیح
                کوتاه اینجا برای توضیح کوتاه اینجا برای توضیح کوتاه اینجا برای
                توضیح کوتاه
              </p>
            </div>
            <div className="w-3/4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h2>
                <p className="text-lg  text-gray-900">{product.price}</p>
              </div>

              <div className="flex items-center justify-start mt-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-gray-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
              </div>

              <section aria-labelledby="options-heading" className="mt-10">
                <form>
                  {/* Colors */}
                  <div className="flex py-2 items-center justify-between">
                    <div>
                      <h4 className="text-sm mb-2 text-gray-500 font-medium">
                        رنگ:
                      </h4>
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                      >
                        {/*    chose a color    */}
                        <div className="flex">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ checked }) =>
                                classNames(
                                  color.selectedClass,
                                  checked ? "ring ring-offset-2" : "",
                                  "my-2 ml-4 relative rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                )
                              }
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  "h-4 w-4 border border-black border-opacity-10 rounded-full"
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      {/*    Sizes    */}
                      <h4 className="text-sm mb-2 text-gray-500 font-medium">
                        سایز:
                      </h4>
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                      >
                        {/*    Choose a size    */}
                        <div className="flex">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? "ml-8 my-2 text-gray-400 cursor-pointer"
                                  : "ml-8 my-2 p-1 rounded-md text-gray-200 cursor-not-allowed",
                                "relative flex items-center justify-center text-sm font-medium uppercase hover:text-gray-300 sm:flex-1 focus:outline-none"
                              )}
                            >
                              {({ checked }) => (
                                <>
                                  <RadioGroup.Label
                                    as="p"
                                    className={classNames(
                                      checked ? "text-gray-900" : ""
                                    )}
                                  >
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    ""
                                  ) : (
                                    <div
                                      aria-hidden="true"
                                      className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                    >
                                      <svg
                                        className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </div>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 border border-gray-700 py-2 px-16 flex items-center justify-center text-base font-light text-gray-700 hover:bg-gray-200"
                  >
                    خرید
                  </button>
                </form>
              </section>
            </div>
          </div>

          <div className="w-2/4 sm:overflow-hidden">
            <div className=" inset-0">
              <Image
                width="100%"
                height="100%"
                layout="responsive"
                className="object-cover"
                src={clothe}
                alt="People working on laptops"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
