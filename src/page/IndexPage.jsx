import Ads2 from '../assets/ads2.jpg';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewArrivals from '../layout/NewArrivals';
import BestSellProduct from '../layout/BestSellProduct';
import gatsbybanner from '../assets/gatsby/gatsbybanner.png';
import Ads1 from '../assets/gradian/gradiancollection.jpg';
import phkaproduct from '../assets/Phka/phkaslacollection.jpg';
import skin1004banner from '../assets/skin1004/skin1004banner.webp';
import ImageSlider from '../components/ImageSlider';
function indexPage() {
  const categoryAds = [
    { id: 1, category: 'Blush' },
    { id: 2, category: 'Serum' },
    { id: 3, category: 'Cleanser' },
    { id: 4, category: 'Sunscreen' },
    { id: 5, category: 'Toner' },
    { id: 6, category: 'Mask' },
    { id: 7, category: 'Cream' },
    { id: 8, category: 'Leap Stick' },
    { id: 9, category: 'Other' },
  ];
  return (
    <Fragment>
      {/* image slider section */}
      {/* <section className="relative w-screen h-max flex justify-start items-center mt-[100px]">
        <div className="flex flex-row justify-start items-center">
          {imageSlider.map((image) => {
            return (
              <img
                className="h-[450px] w-screen object-cover"
                key={image.id}
                src={image.src}
                alt={image.alt}
              />
            );
          })}
        </div>
        <div className="absolute w-full z-[2] justify-between items-center">
          <div className="absolute right-4 w-10 h-10 rounded-full bg-gray-800/50 flex justify-center items-center">
            <i className="bi bi-chevron-right text-white text-lg"></i>
          </div>
          <div className="absolute left-4 w-10 h-10 rounded-full bg-gray-800/50 flex justify-center items-center">
            <i className="bi bi-chevron-left text-white text-lg "></i>
          </div>
        </div>
      </section> */}
      <ImageSlider />
      {/* brand flex */}
      <div className="w-full whitespace-nowrap flex flex-row justify-start items-center px-[20px] overflow-x-auto overflow-y-hidden no-scrollbar mt-10">
        {categoryAds.map((categorys) => {
          return (
            <Fragment key={categorys.id}>
              <Link
                to="/"
                className="shrink-0 px-[20px] py-[10px] rounded-full text-lg border-1 border-gray-300 text-black font-light  transition duration-300 hover:bg-[#dc3545] hover:border-transparent hover:text-white focus:bg-[#dc3545] focus:text-white focus:border-transparent cursor-pointer"
              >
                {categorys.category}
              </Link>
              <div className="mx-[20px] h-[30px] w-[1px] border-l-1 border-gray-300"></div>
            </Fragment>
          );
        })}
      </div>
      <BestSellProduct />
      {/* new arrivals sect */}
      <NewArrivals />
      {/* Explore product */}
      {/* <section className="w-screen flex flex-col justify-center items-center mt-[60px]">
        <h1 className="uppercase text-[58px] font-semibold mb-[60px] bg-gradient-to-r from-blue-400/80 to-gray-400 bg-clip-text text-transparent">
          top sold product in our collection
        </h1>
        <div className="h-max w-[90%] flex flex-row justify-between items-center pr-12">
          <img
            className="h-[450px] w-auto aspect-square object-cover rounded-[40px]"
            src={Ads1}
            alt="ordairy"
          />
          <div className="w-[500px] flex flex-col gap-3 justify-center items-center">
            <h1 className=" uppercase font-semibold text-[42px] text-center leading-14">
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
          <div className="w-[600px]  flex flex-col gap-3 justify-center items-center">
            <h1 className="uppercase font-semibold text-[42px] text-center leading-14">
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
      </section> */}
      <section className="w-screen grid grid-cols-6 gap-3 px-3 mt-16">
        <img
          className="col-span-6 object-cover w-full h-[450px]"
          src={gatsbybanner}
        />

        <img
          className="row-[2] col-[1/4] object-cover w-full h-[450px]"
          src={Ads1}
        />

        <img
          className="row-[2] col-[4/7] object-cover w-full h-[450px]"
          src={phkaproduct}
        />

        <img
          className="col-span-6 object-cover w-full h-[450px]"
          src={skin1004banner}
        />
      </section>
    </Fragment>
  );
}

export default indexPage;
