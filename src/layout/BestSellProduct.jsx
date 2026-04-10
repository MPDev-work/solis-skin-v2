import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';
import { DataCenter } from '../data/DataCenter';
import { Fragment } from 'react';

function BestSellProduct() {
  const BestSeller = DataCenter.sort((a, b) => b.sold - a.sold);

  const formatCount = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
    return num;
  };

  const getDiscountPrice = (discountPercent, fullPrice) => {
    let DiscountPrice = fullPrice - (fullPrice * discountPercent) / 100;
    return DiscountPrice.toFixed(2);
  };
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
      {/* new arrivals section */}
      <section className="w-screen flex flex-col items-center gap-8 px-5 mt-6">
        {/* Header */}
        <div className="w-full flex flex-col items-start gap-3">
          <h1 className="uppercase text-4xl tracking-tight font-semibold text-black">
            new arrivals ⚡️
          </h1>
          <p className="text-sm text-gray-500">
            Ads - Click to explore & Add to bag
          </p>
        </div>

        {/* Products */}
        <div className="relative w-full flex justify-between items-start">
          {BestSeller.slice(0, 4).map((bestsell) => (
            <div
              key={bestsell.id}
              className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
            >
              {/* Image */}
              <div className="relative w-full h-max flex justify-center items-center">
                <img
                  className="w-full aspect-square object-cover"
                  src={bestsell.src}
                  alt={bestsell.alt}
                />
                <div className="absolute left-0 bottom-0">
                  {getDeliveryStatus(bestsell.deliveryStatus)}
                </div>
              </div>

              {/* Info */}
              <div className="h-full pl-2.5 pt-2.5 ">
                <h1 className="text-lg font-medium truncate">
                  {bestsell.title}
                </h1>

                {/* Rating + Stock */}
                <div className="flex items-center">
                  <div className="text-[14px] flex items-center gap-0.5">
                    {bestsell.ratting}
                    <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                  </div>
                  <i className="bi bi-dot text-gray-600/70"></i>
                  <p className="text-[12px] text-gray-600/70">
                    {formatCount(bestsell.sold)} sold
                  </p>

                  {/*Dynamic Stock Status */}
                </div>
                {stockStatus(bestsell.stock)}
                {/* delivery */}
                {/* {getDeliveryStatus(bestsell.deliveryStatus)} */}
                {/* Price */}
                <div className="flex gap-3">
                  <p className="text-2xl text-red-500 font-medium">
                    $
                    {getDiscountPrice(
                      bestsell.discountPercent,
                      bestsell.fullPrice,
                    )}
                  </p>
                  <p className="text-[14px] line-through text-gray-500">
                    ${bestsell.fullPrice}
                  </p>
                </div>
              </div>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                <span className="text-white text-sm">
                  -{bestsell.discountPercent}%
                </span>
              </div>
              {/* botton */}
              <button
                disabled={bestsell.stock === 0}
                className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      bestsell.stock === 0
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'text-[var(--primary-color)] border-1 border-[] hover:bg-[var(--primary-color)] hover:text-white hover:border-transparent active:bg-red-300 active:border-transparent'
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
      </section>
    </Fragment>
  );
}

export default BestSellProduct;
