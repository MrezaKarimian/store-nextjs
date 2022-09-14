import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from "@heroicons/react/outline";

const features = [
  {
    name: "از مزایای سایت",
    description:
      " اینجا برای توضیج کوتاه در مورد مزایاینجا برای توضیج کوتاه در مورد مزایاینجا برای توضیج کوتاه در مورد مزایااینجا برای توضیح کوتاه این مزایا ",
    href: "#",
    icon: GlobeAltIcon
  },
  {
    name: "از مزایای سایت",
    description:
      "اینجا برای توضیح کوتاه این مزایینجا برای توضیج کوتاه در مورد مزایا  ینجا برای توضیج کوتاه در مورد مزایاا",
    href: "#",
    icon: ScaleIcon
  },
  {
    name: "از مزایای سایت",
    description:
      "اینجا برای توضیح کوینجا برای توضیج کوتاه در مورد مزایاتاه این مزایا",
    href: "#",
    icon: LightningBoltIcon
  }
];

export default function Feature() {
  return (
    <>
      <div className="bg-zinc-50">
        <div className="w-3/5 mx-auto py-24">
          <div className="flex justify-center mb-10 font-bold text-2xl ">
            <h2 className="mx-auto">تکستی برای مزایا</h2>
          </div>
          <div className="grid grid-cols-3 gap-x-10">
            {features.map((feature , i) => (
              <div
                className="relative bg-white font-semibold p-8 rounded-lg shadow-lg"
                key={i}
              >
                <div className="flex items-center justify-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md border text-gray-700">
                    <feature.icon
                      className="flex justify-center h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="flex mx-4 justify-center text-base font-mediujm text-gray-900">
                    {feature.name}
                  </p>
                </div>
                <div className="my-10 text-base font-extralight text-gray-400">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
