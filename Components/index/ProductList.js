import ProductCard from "../Common/cards/ProductCard";

const products = [
  {
    id: 1,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 2,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 3,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  },
  {
    id: 5,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 6,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 7,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 8,
    name: "اسم محصول",
    href: "#",
    price: "100/000 تومان",
    description: "توضیحی در کیفیت و متریال محصول",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top."
  }
];

export default function ProductList() {
  return (
    <>
      <div className="">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-4 gap-x-2 gap-y-4">
            {products.map((product) =>
              <ProductCard product={product} key={product.id}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
