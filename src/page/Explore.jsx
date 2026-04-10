import Poster1 from '../assets/post1.png';
import Poster2 from '../assets/post2.png';
import Poster3 from '../assets/post3.png';
import Poster4 from '../assets/post4.png';
import Poster5 from '../assets/post5.png';
import Poster6 from '../assets/post6.png';
import Poster7 from '../assets/post7.png';
import Ads1 from '../assets/ads1.jpg';
import Ads2 from '../assets/ads2.jpg';
import weyoung from '../assets/weyoung.png';
import misssunflower from '../assets/misssunflower.png';
import phakblush from '../assets/phkablush.png';
import Collection1 from '../assets/anua/anua-banner.webp';
import Collection2 from '../assets/collection2.png';
import Collection3 from '../assets/collection3.png';
import Collection4 from '../assets/collection4.png';
import { Fragment } from 'react';

function Explore() {
  const posters = [
    { id: 'NV001', src: Poster1 },
    { id: 'NV002', src: Poster2 },
    { id: 'NV003', src: Poster3 },
    { id: 'NV004', src: Poster4 },
    { id: 'NV006', src: Poster5 },
    { id: 'NV007', src: Poster6 },
    { id: 'NV008', src: Poster7 },
  ];
  const vendors = [
    {
      id: 1,
      name: 'Weyoung',
      btnName: 'Weyoung',
      src: weyoung,
      alt: 'weyoung logo',
    },
    {
      id: 2,
      name: 'Miss Sunflower',
      btnName: 'Sunflower',
      src: misssunflower,
      alt: 'misssuflower logo',
    },
    {
      id: 3,
      name: 'Phka Blush',
      btnName: 'Phka Blush',
      src: phakblush,
      alt: 'phkablush logo',
    },
  ];
  const Collections = [
    {
      id: 'COL001',
      src: Collection2,
      alt: 'Collectio1',
      brand: 'Innisfree',
      title: 'Sey Hello To Our New Product With New Ingredient',
    },
    {
      id: 'COL002',
      src: Collection3,
      alt: 'Collectio2',
      brand: 'Torriden',
      title: 'Never Choose Wrong Again Now Check This Out',
    },
    {
      id: 'COL003',
      src: Collection4,
      alt: 'Collectio3',
      brand: 'Cosnori',
      title: 'Everything Is Now In One Collection With 3 Products',
    },
  ];

  return (
    <Fragment>
      {/* new product */}
      <section className="h-max w-screen flex flex-col gap-4 mt-[120px]">
        <h1 className="uppercase font-semibold text-4xl pl-[20px]">
          all new product now available
        </h1>
        <p className="text-sm text-gray-500 pl-[20px]">
          Ads - Swap left to explore & Click to add to bag
        </p>
        <div className="flex flex-row justify-start items-center gap-[20px] overflow-x-auto overflow-y-hidden px-[20px] mt-[8px] no-scrollbar">
          {posters.map((poster) => (
            <img
              className="h-[400px] w-auto rounded-2xl"
              key={poster.id}
              src={poster.src}
              alt="Poster"
            />
          ))}
        </div>
      </section>
      {/* top vendors */}
      <section
        className="h-max w-screen flex flex-col gap-[10px] mt-[50px]"
        id="bestSeller"
      >
        <h1 className="uppercase font-semibold text-4xl pl-[20px]">
          best store of the year
        </h1>
        <div className="flex flex-row justify-between items-center px-[20px] mt-[40px]">
          {/* Loop all vendor */}
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="w-[400px] h-max flex flex-col gap-5 pb-[20px]"
            >
              <img
                className="h-auto w-full aspect-square object-cover rounded-t-3xl"
                src={vendor.src}
                alt={vendor.alt}
              />
              <div className="flex flex-col justify-start items-start px-[20px] gap-3">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <img
                    className="h-[60px] aspect-square rounded-full"
                    src={vendor.src}
                    alt={vendor.alt}
                  />
                  <h1 className="text-3xl font-semibold">{vendor.name}</h1>
                </div>
                <p className="text-xl leading-6.5">
                  Sold up to 25K+ sold of their Product and got best seller
                  award of th year.
                </p>
                <div className="w-full flex flex-row justify-center items-center gap-6 mt-[6px]">
                  <button className="px-[20px] py-[15px] rounded-full text-white bg-[#dc3545] cursor-pointer">
                    Visit {vendor.btnName}
                  </button>
                  <button className="px-[20px] py-[15px] rounded-full text-[#dc3545] border-1 border-[#dc3545] cursor-pointer ">
                    Explore product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Product Ads section */}
      <section className="w-screen flex flex-col justify-center items-center mt-[60px]">
        <h1 className="uppercase text-[58px] font-semibold mb-[60px] bg-gradient-to-r from-orange-200 to-stone-500 bg-clip-text text-transparent">
          take a look with our new product
        </h1>
        <div className="h-max w-[90%] flex flex-row justify-between items-center">
          <img
            className="h-[450px] w-auto aspect-square object-cover rounded-[40px]"
            src={Ads1}
            alt="ordairy"
          />
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className=" uppercase text-balance font-semibold text-[42px] text-center leading-14">
              get a new experience with <span>ORDINARY</span>
            </h1>
            <p className="text-[28px] font-medium leading-10">
              Available in stock now
            </p>
            <p className=" text-[20px] text-amber-600">Pre order start 12.03</p>
            <div className="flex flex-row justify-center items-center gap-5 mt-3">
              <button className="px-[24px] py-[14px] rounded-full border-1 border-[#dc3545] bg-[#dc3545] text-white">
                Learn more
              </button>
              <button className="px-[24px] py-[14px] rounded-full border-1 border-[#dc3545] text-[#dc3545]">
                Add to bag
              </button>
            </div>
          </div>
        </div>
        <div className="h-max w-[90%] flex flex-row justify-between items-center mt-[50px] gap-12">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="uppercase text-balance font-semibold text-[42px] text-center leading-14">
              small thing still important just like <span>NUEBIOME</span>.
            </h1>
            <p className="text-[28px] font-medium leading-10">
              All product is now available
            </p>
            <p className="text-[20px] text-amber-600">Pre order start 12.03</p>
            <div className="flex flex-row justify-center items-center gap-5 mt-3">
              <button className="px-[24px] py-[14px] rounded-full border-1 border-[#dc3545] bg-[#dc3545] text-white">
                Learn more
              </button>
              <button className="px-[24px] py-[14px] rounded-full border-1 border-[#dc3545] text-[#dc3545]">
                Add to bag
              </button>
            </div>
          </div>
          <img
            className="h-[450px] w-auto aspect-square object-cover rounded-[40px]"
            src={Ads2}
            alt="ordairy"
          />
        </div>
      </section>
      {/* top collection */}
      <section className="h-max w-screen flex flex-col mt-[80px] justify-center items-center px-5">
        <h1 className="uppercase text-[58px] font-semibold mb-[60px] bg-gradient-to-r from-teal-800/60 to-gray-300 bg-clip-text text-transparent">
          explore our collection line up
        </h1>
        <img
          className="w-full h-[700px] rounded-[50px] object-cover"
          src={Collection1}
          alt="product collection"
        />
      </section>
      {/* local collection */}
      <section className="h-max w-screen flex flex-col justify-center items-center px-5 rounded-[50px]">
        <h1 className="uppercase text-[58px] font-semibold my-[50px] bg-gradient-to-r from-[#ECCCCD] to-[#70B0C2] bg-clip-text text-transparent">
          best local collection of the year
        </h1>
        <div className="w-full h-max flex flex-row justify-between items-center px-[20px] gap-[20px] bg-gray-100 rounded-[70px] pt-5">
          {/* Loop all vendor */}
          {Collections.map((collection) => (
            <div
              key={collection.id}
              className="h-max w-[calc(100%/3-40px/3)] flex flex-col gap-5 pb-[20px] justify-center items-center"
            >
              <img
                className="h-auto w-full aspect-square object-cover rounded-[50px]"
                src={collection.src}
                alt={collection.alt}
              />
              <div className="flex flex-col justify-center items-center px-[20px] gap-3">
                <p className="text-4xl font-semibold">{collection.brand}</p>
                <p className="text-xl leading-6.5 text-center font-medium capitalize text-balance">
                  {collection.title}
                </p>
                <p className="text-[16px] text-amber-600">Available in stock</p>
                <div className="flex flex-row justify-start items-center gap-6 mt-[6px]">
                  <button className="px-[20px] py-[14px] rounded-full text-white bg-[#dc3545] cursor-pointer">
                    Learn more
                  </button>
                  <button className="px-[20px] py-[14px] rounded-full text-[#dc3545] border-1 border-[#dc3545] cursor-pointer ">
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default Explore;
