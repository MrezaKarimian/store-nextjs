import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <>
      <div key={product.id} className="group relative ">
        <div className="w-full aspect-w-1 aspect-h-1">
          <Image
            layout="fill"
            src={product.imageSrc}
            alt={product.imageAlt}
            className="group-hover:bg-gray-900"
          />
          <div className=" inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur group-hover:block hidden">
            <h2 className="absolute top-5 p-2 text-base text-light text-white">{product.description}</h2>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <div>
            <h3 className="text-base my-2">{product.name}</h3>
            <p className="text-base text-gray-500 font-light">{product.price}</p>
          </div>
          <button
            className="px-4 h-10 my-auto text-gray-900 text-base font-light hover:text-gray-400 cursor-pointer"
            onClick={()=>product.href}
          >
            خرید
          </button>
        </div>
      </div>
    </>
  );
}
