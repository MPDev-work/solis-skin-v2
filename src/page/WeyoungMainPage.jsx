import { Fragment } from 'react';
import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';
import weyoungBanner from '../assets/weyoungProduct/weyoungbanner.jpg';
import weyoungLogo from '../assets/weyoungProduct/weyounglogo.jpg';
import { DataCenter } from '../data/DataCenter';
import BlueTick from '../assets/blue-checkmark-validation-social-media-png.png';
function WeyoungMainPage() {
  const getWeyoung = DataCenter.filter(
    (weyoung) => weyoung.storeID === 'weyoung',
  );
  const storeInformation = {
    id: 'weyoung',
    name: 'weyoung',
    logo: weyoungLogo,
    followerCount: 240067,
    productCount: 97,
    storeVerified: true,
  };
  const storeCategory = [
    { id: 'CT01', category: 'Water Cleansing' },
    { id: 'CT02', category: 'Sun Screen' },
    { id: 'CT03', category: 'Serum' },
    { id: 'CT04', category: 'Make Up' },
    { id: 'CT05', category: 'Glowing' },
    { id: 'CT06', category: 'Female' },
    { id: 'CT07', category: 'Male' },
    { id: 'CT08', category: 'Korea' },
  ];
  const productCategory = [
    { id: 1, type: 'All Product' },
    { id: 2, type: 'New Arrivals' },
    { id: 3, type: 'Best Seller' },
    { id: 4, type: 'Free Delivery' },
  ];
  // formart number
  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
  };
  // calculate dicount price
  const getDiscountPrice = (discountPercent, fullPrice) => {
    let DiscountPrice = fullPrice - (fullPrice * discountPercent) / 100;
    return DiscountPrice.toFixed(2);
  };
  // product count
  const ProductCount = getWeyoung.length;
  // check delivery status
  const getDeliveryStatus = (deliveryStatus) => {
    if (deliveryStatus === true) {
      return (
        <p className="text-[10px] text-amber-300 px-1 bg-green-700 rounded-tr-sm">
          Free <span className="text-white">Delivery</span>
        </p>
      );
    } else {
      return;
    }
  };
  // get store verification
  const storeVerification = (verified) => {
    if (verified === true) {
      return (
        <img
          className="w-10 h-auto aspect-square object-cover rounded-full"
          src={BlueTick}
        />
      );
    } else {
      return;
    }
  };
  // check stock and update
  const stockStatus = (stock) => {
    if (stock > 0) {
      return <Available />;
    } else if (stock === 0) {
      return <OutOfStock />;
    } else {
      return <NotUpdated />;
    }
  };

  return (
    <Fragment>
      {/* banner */}
      <img
        className="absolute z-[1] top-[100px] w-screen h-[350px] object-cover"
        src={weyoungBanner}
      />
      {/* new arrivals section */}
      <section
        // id="bg-linear"
        className="relative z-10 w-screen flex flex-col items-center px-5 mt-[370px]"
      >
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start">
          <div
            id="brand-parent2"
            className="w-full flex flex-row justify-between items-start px-2.5 py-2.5 rounded-[26px] bg-white"
          >
            {/* left container */}
            <div className="relative w-full z-50 flex flex-row justify-start items-start">
              <div className="flex flex-row justify-start items-center gap-5">
                <img
                  className="w-[200px] h-auto aspect-square object-cover rounded-2xl"
                  src={storeInformation.logo}
                />
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-4xl font-semibold uppercase tracking-tight ">
                      {storeInformation.name}
                    </p>
                    {/* store verify */}
                    {storeVerification(storeInformation.storeVerified)}
                  </div>
                  <p className="text-sm font-normal tracking-tight leading-5 text-gray-600">
                    Store ID : {storeInformation.id}
                  </p>
                  <p className="text-sm font-medium tracking-tight leading-5 text-green-700">
                    {formatCount(storeInformation.followerCount)} Follower -{' '}
                    {formatCount(ProductCount)} Products
                  </p>
                  <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-xl font-medium leading-5 text-gray-700">
                      Store category 🛒
                    </p>
                    <div className="w-[450px] flex flex-row flex-wrap justify-start items-start gap-2">
                      {storeCategory.map((categorys) => {
                        return (
                          <div
                            key={categorys.id}
                            className="text-[10px] px-2.5 py-0.5 rounded-full  border-1 border-[var(--primary-color)] text-[var(--primary-color)] cursor-pointer"
                          >
                            {categorys.category}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right container */}
            <div className="flex flex-row justify-start items-start gap-2">
              <div className="h-10 px-8 flex justify-center items-center rounded-full bg-[var(--primary-color)] text-white cursor-pointer">
                Follow
              </div>
              <div className="h-10 px-8 flex justify-center items-center text-nowrap rounded-full bg-[var(--primary-color)] cursor-pointer text-white">
                Share{' '}
                <i className="bi bi-reply text-white text-xl ml-1 scale-x-[-1]"></i>
              </div>
              <div className="h-10 px-4 flex justify-center items-center border-1 border-[var(--primary-color)] rounded-full cursor-pointer">
                <i className="bi bi-heart text-[var(--primary-color)] text-lg"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Category and sorting */}
        <div className="sticky w-full h-max flex flex-row justify-between items-center p-5">
          <div className="flex flex-row justify-start items-center gap-5">
            {productCategory.map((product) => {
              return (
                <div
                  key={product.id}
                  className="h-10 px-5 flex justify-center items-center transition duration-200 hover:bg-[var(--primary-color)] focus:bg-[var(--primary-color)] rounded-full border-1 border-[var(--primary-color)] hover:border-transparent cursor-pointer"
                >
                  <span className="text-[var(--primary-color)] transition duration-200 hover:text-white text-sm text-nowrap">
                    {product.type}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="h-10 px-5 flex justify-center items-center transition duration-200 hover:bg-[var(--primary-color)] focus:bg-[var(--primary-color)] rounded-full border-1 border-[var(--primary-color)] hover:border-transparent cursor-pointer">
            <span className="text-[var(--primary-color)] transition duration-200 hover:text-white text-sm text-nowrap">
              Other
            </span>
          </div>
        </div>
        {/* Products */}
        <div className="w-full grid grid-cols-4 gap-y-10 gap-x-5 justify-items-stretch items-center mt-3">
          {getWeyoung.map((weyoung) => (
            <div
              key={weyoung.id}
              className="relative flex flex-col justify-center items-start gap-1"
            >
              {/* Image */}
              <div className="relative w-full h-max flex justify-center items-center">
                <img
                  className="w-full aspect-square object-cover"
                  src={weyoung.src}
                  alt={weyoung.alt}
                />
                <div className="absolute left-0 bottom-0">
                  {getDeliveryStatus(weyoung.deliveryStatus)}
                </div>
              </div>

              {/* Info */}
              <div className="h-full pl-2.5 pt-2.5 ">
                <h1 className="w-[280px] text-lg font-medium truncate">
                  {weyoung.title}
                </h1>

                {/* Rating + Stock */}
                <div className="flex items-center">
                  <div className="text-[14px] flex items-center gap-0.5">
                    {weyoung.ratting}
                    <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                  </div>
                  <i className="bi bi-dot text-gray-600/70"></i>
                  <p className="text-[12px] text-gray-600/70">
                    {formatCount(weyoung.sold)} sold
                  </p>

                  {/*Dynamic Stock Status */}
                </div>
                {stockStatus(weyoung.stock)}
                {/* delivery */}
                {/* {getDeliveryStatus(weyoung.deliveryStatus)} */}
                {/* Price */}
                <div className="flex gap-3">
                  <p className="text-2xl text-red-500 font-medium">
                    $
                    {getDiscountPrice(
                      weyoung.discountPercent,
                      weyoung.fullPrice,
                    )}
                  </p>
                  <p className="text-[14px] line-through text-gray-500">
                    ${weyoung.fullPrice}
                  </p>
                </div>
              </div>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                <span className="text-white text-sm">
                  -{weyoung.discountPercent}%
                </span>
              </div>
              {/* botton */}
              <button
                disabled={weyoung.stock === 0}
                className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      weyoung.stock === 0
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'text-[var(--primary-color)] border-1 border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white hover:border-transparent active:bg-red-300 active:border-transparent'
                    }`}
              >
                <i className="bi bi-bag-plus text-lg"></i>
                {/* {bestSell.stock === 0 ? 'Out of stock' : 'Add to bag'} */}
              </button>

              {/* Heart */}
              <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-red-400/20 flex justify-center items-center">
                <i className="bi bi-heart text-lg text-[var(--primary-color)]"></i>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div> */}
      </section>
    </Fragment>
  );
}
export default WeyoungMainPage;
