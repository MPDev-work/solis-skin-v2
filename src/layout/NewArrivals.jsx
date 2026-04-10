import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';
import product1 from '../assets/CardIMG/product1.png';
import product2 from '../assets/CardIMG/product2.png';
import product3 from '../assets/CardIMG/product3.png';
import product4 from '../assets/CardIMG/product4.png';
import { Fragment } from 'react';

function NewArrivals() {
  const newArrivals = [
    {
      id: 'best001',
      fullPrice: 14.99,
      title: 'Light cleaning oil',
      discountPrice: 8.99,
      discountPercent: 12,
      src: product1,
      alt: 'best sell 1',
      sold: 786,
      ratting: 4.5,
      stock: 200,
      deliveryStatus: true,
      availableSize: [50, 100, 200, 250, 300, 500],
    },
    {
      id: 'best002',
      fullPrice: 27.89,
      title: 'Getsby foam for men & women',
      discountPrice: 8.99,
      discountPercent: 50,
      src: product2,
      alt: 'best sell 2',
      sold: 12040,
      ratting: 4.5,
      stock: 200,
      deliveryStatus: true,
      availableSize: [50, 100, 200, 250, 300, 500],
    },
    {
      id: 'best003',
      fullPrice: 12.67,
      title: 'Skin 1004 - Sunscreen',
      discountPrice: 8.99,
      discountPercent: 12,
      src: product3,
      alt: 'best sell 3',
      sold: 1090,
      ratting: 5,
      stock: 200,
      deliveryStatus: true,
      availableSize: [50, 100, 200, 250, 300, 500],
    },
    {
      id: 'best004',
      fullPrice: 10.99,
      title: 'Lip oil best for slayy girl',
      discountPrice: 8.99,
      discountPercent: 12,
      src: product4,
      alt: 'best sell 4',
      sold: 5000,
      ratting: 4,
      stock: 200,
      deliveryStatus: true,
      availableSize: [50, 100, 200, 250, 300, 500],
    },
  ];
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
          {newArrivals.map((newArrives) => (
            <div
              key={newArrives.id}
              className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
            >
              {/* Image */}
              <div className="relative w-full h-max flex justify-center items-center">
                <img
                  className="w-full aspect-square object-cover"
                  src={newArrives.src}
                  alt={newArrives.alt}
                />
                <div className="absolute left-0 bottom-0">
                  {getDeliveryStatus(newArrives.deliveryStatus)}
                </div>
              </div>

              {/* Info */}
              <div className="h-full pl-2.5 pt-2.5 ">
                <h1 className="text-lg font-medium truncate">
                  {newArrives.title}
                </h1>

                {/* Rating + Stock */}
                <div className="flex items-center">
                  <div className="text-[14px] flex items-center gap-0.5">
                    {newArrives.ratting}
                    <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                  </div>
                  <i className="bi bi-dot text-gray-600/70"></i>
                  <p className="text-[12px] text-gray-600/70">
                    {formatCount(newArrives.sold)} sold
                  </p>

                  {/*Dynamic Stock Status */}
                </div>
                {stockStatus(newArrives.stock)}
                {/* delivery */}
                {/* {getDeliveryStatus(newArrives.deliveryStatus)} */}
                {/* Price */}
                <div className="flex gap-3">
                  <p className="text-2xl text-red-500 font-medium">
                    $
                    {getDiscountPrice(
                      newArrives.discountPercent,
                      newArrives.fullPrice,
                    )}
                  </p>
                  <p className="text-[14px] line-through text-gray-500">
                    ${newArrives.fullPrice}
                  </p>
                </div>
              </div>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 h-6.5 w-12 bg-[#dc3545] flex justify-center items-center">
                <span className="text-white text-sm">
                  -{newArrives.discountPercent}%
                </span>
              </div>
              {/* botton */}
              <button
                disabled={newArrives.stock === 0}
                className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      newArrives.stock === 0
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'text-[#dc3545] border-1 border-[#dc3545] hover:bg-[#dc3545] hover:text-white hover:border-transparent active:bg-red-300 active:border-transparent'
                    }`}
              >
                <i className="bi bi-bag-plus text-lg"></i>
                {/* {bestSell.stock === 0 ? 'Out of stock' : 'Add to bag'} */}
              </button>

              {/* Heart */}
              <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-red-400/20 flex justify-center items-center">
                <i className="bi bi-heart text-lg text-[#dc3545]"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default NewArrivals;
