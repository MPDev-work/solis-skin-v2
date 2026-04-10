import { DataCenter } from '../data/DataCenter';
import { Fragment } from 'react';
import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';

function ShopAll() {
  // to filter data and sorting
  //   const filteredData = data.filter((item) => item.storeID === 'store0001');
  const filteredData = DataCenter.filter(
    (item) => item.stock > 0 || item.stock === null,
  );
  //   const sortedData = [...filteredData].sort((a, b) => b.sold - a.sold);

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
      <section
        id="bg-linear"
        className="relative z-10 w-screen flex flex-col items-center gap-8 px-5 mt-[150px]"
      >
        {/* Products */}
        <div className="w-full grid grid-cols-4 gap-y-10 gap-x-5 justify-items-stretch items-center">
          {filteredData.map((shopAll) => (
            <div
              key={shopAll.id}
              className="relative flex flex-col justify-center items-start gap-1"
            >
              {/* Image */}
              <div className="relative w-full h-max flex justify-center items-center">
                <img
                  className="w-full aspect-square object-cover"
                  src={shopAll.src}
                  alt={shopAll.alt}
                />
                <div className="absolute left-0 bottom-0">
                  {getDeliveryStatus(shopAll.deliveryStatus)}
                </div>
              </div>

              {/* Info */}
              <div className="h-full pl-2.5 pt-2.5 ">
                <h1 className="w-[280px] text-lg font-medium truncate">
                  {shopAll.title}
                </h1>

                {/* Rating + Stock */}
                <div className="flex items-center">
                  <div className="text-[14px] flex items-center gap-0.5">
                    {shopAll.ratting}
                    <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                  </div>
                  <i className="bi bi-dot text-gray-600/70"></i>
                  <p className="text-[12px] text-gray-600/70">
                    {formatCount(shopAll.sold)} sold
                  </p>

                  {/*Dynamic Stock Status */}
                </div>
                {stockStatus(shopAll.stock)}
                {/* delivery */}
                {/* {getDeliveryStatus(shopAll.deliveryStatus)} */}
                {/* Price */}
                <div className="flex gap-3">
                  <p className="text-2xl text-red-500 font-medium">
                    $
                    {getDiscountPrice(
                      shopAll.discountPercent,
                      shopAll.fullPrice,
                    )}
                  </p>
                  <p className="text-[14px] line-through text-gray-500">
                    ${shopAll.fullPrice}
                  </p>
                </div>
              </div>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                <span className="text-white text-sm">
                  -{shopAll.discountPercent}%
                </span>
              </div>
              {/* botton */}
              <button
                disabled={shopAll.stock === 0}
                className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      shopAll.stock === 0
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
      {/* <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div> */}
    </Fragment>
  );
}

export default ShopAll;
