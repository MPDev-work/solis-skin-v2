import { DataCenter } from '../data/DataCenter';
import { Link } from 'react-router-dom';
import Available from '../components/Available';
import OutOfStock from '../components/OutOfStock';
import NotUpdated from '../components/NotUpdated';

function Categroy() {
  const getSerum = DataCenter.filter(
    (item) => item.productCategory === 'serum',
  );
  const getSunscreen = DataCenter.filter(
    (item) => item.productCategory === 'sunscreen',
  );
  const getBlush = DataCenter.filter(
    (item) => item.productCategory === 'blush',
  );
  const getToner = DataCenter.filter(
    (item) => item.productCategory === 'toner',
  );
  const getCollection = DataCenter.filter(
    (item) => item.productCategory === 'collection',
  );
  const getCleanser = DataCenter.filter(
    (item) => item.productCategory === 'cleanser',
  );
  const getOther = DataCenter.filter(
    (item) =>
      item.productCategory != 'serum' &&
      item.productCategory != 'blush' &&
      item.productCategory != 'sunscreen' &&
      item.productCategory != 'toner' &&
      item.productCategory != 'collection' &&
      item.productCategory != 'cleanser',
  );

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
    <>
      {/* Blush */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-[120px] px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Blush 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        {/* items */}
        <div className="w-full h-max flex flex-row justify-between items-center">
          {getBlush.slice(0, 4).map((items) => {
            return (
              <div
                key={items.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={items.src}
                    alt={items.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(items.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {items.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {items.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(items.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(items.stock)}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(items.discountPercent, items.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${items.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{items.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={items.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      items.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* cleanser */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Cleanser 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        <div className="w-full h-max flex flex-row justify-between items-center">
          {getCleanser.slice(0, 4).map((items) => {
            return (
              <div
                key={items.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={items.src}
                    alt={items.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(items.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {items.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {items.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(items.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(items.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(items.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(items.discountPercent, items.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${items.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{items.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={items.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      items.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* toner */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Toner 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        <div className="w-full h-max flex flex-row justify-between items-center">
          {getToner.slice(0, 4).map((items) => {
            return (
              <div
                key={items.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={items.src}
                    alt={items.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(items.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {items.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {items.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(items.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(items.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(items.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(items.discountPercent, items.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${items.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{items.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={items.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      items.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* sunscreen */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Sunscreen 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        {/* items */}
        <div className="w-full h-max flex flex-row justify-between items-center">
          {getSunscreen.slice(0, 4).map((serum) => {
            return (
              <div
                key={serum.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={serum.src}
                    alt={serum.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(serum.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {serum.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {serum.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(serum.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(serum.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(serum.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(serum.discountPercent, serum.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${serum.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{serum.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={serum.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      serum.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* Serum */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Serum 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        {/* items */}
        <div className="w-full h-max flex flex-row justify-start items-center gap-2.5">
          {getSerum.slice(0, 4).map((serum) => {
            return (
              <div
                key={serum.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={serum.src}
                    alt={serum.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(serum.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {serum.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {serum.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(serum.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(serum.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(serum.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(serum.discountPercent, serum.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${serum.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{serum.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={serum.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      serum.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* collection */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Collection 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        {/* items */}
        <div className="w-full h-max flex flex-row justify-start items-center gap-4">
          {getCollection.slice(0, 4).map((items) => {
            return (
              <div
                key={items.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={items.src}
                    alt={items.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(items.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {items.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {items.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(items.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(items.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(items.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(items.discountPercent, items.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${items.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{items.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={items.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      items.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
      {/* other */}
      <section className="w-screen flex flex-col justify-start items-start gap-5 mt-8 px-5 pb-5">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="uppercase font-semibold text-4xl">Other product 📌</p>
          <Link className="underline text-xl font-medium" to="">
            Shop more
          </Link>
        </div>
        {/* items */}
        <div className="w-full h-max flex flex-row justify-start items-center gap-4">
          {getOther.slice(0, 4).map((serum) => {
            return (
              <div
                key={serum.id}
                className="relative w-[calc(100%/4-50px/4)] flex flex-col gap-1"
              >
                {/* Image */}
                <div className="relative w-full h-max flex justify-center items-center">
                  <img
                    className="w-full aspect-square object-cover"
                    src={serum.src}
                    alt={serum.alt}
                  />
                  <div className="absolute left-0 bottom-0">
                    {getDeliveryStatus(serum.deliveryStatus)}
                  </div>
                </div>

                {/* Info */}
                <div className="h-full pl-2.5 pt-2.5 ">
                  <h1 className="text-lg font-medium truncate">
                    {serum.title}
                  </h1>

                  {/* Rating + Stock */}
                  <div className="flex items-center">
                    <div className="text-[14px] flex items-center gap-0.5">
                      {serum.ratting}
                      <i className="bi bi-star-fill text-[10px] text-amber-500"></i>
                    </div>
                    <i className="bi bi-dot text-gray-600/70"></i>
                    <p className="text-[12px] text-gray-600/70">
                      {formatCount(serum.sold)} sold
                    </p>

                    {/*Dynamic Stock Status */}
                  </div>
                  {stockStatus(serum.stock)}
                  {/* delivery */}
                  {/* {getDeliveryStatus(serum.deliveryStatus)} */}
                  {/* Price */}
                  <div className="flex gap-3">
                    <p className="text-2xl text-red-500 font-medium">
                      $
                      {getDiscountPrice(serum.discountPercent, serum.fullPrice)}
                    </p>
                    <p className="text-[14px] line-through text-gray-500">
                      ${serum.fullPrice}
                    </p>
                  </div>
                </div>
                {/* Discount badge */}
                <div className="absolute top-2 left-2 h-6.5 w-12 bg-[var(--primary-color)] flex justify-center items-center">
                  <span className="text-white text-sm">
                    -{serum.discountPercent}%
                  </span>
                </div>
                {/* botton */}
                <button
                  disabled={serum.stock === 0}
                  className={`absolute right-0.5 bottom-0 h-10 px-10 flex justify-center items-center rounded-full text-sm transition duration-200
                    ${
                      serum.stock === 0
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
            );
          })}
        </div>
      </section>
      <div className="w-full h-[1px] mt-[5px] mb-[10px] bg-[repeating-linear-gradient(to_right,#d6d6d6_0px,#d6d6d6_4px,transparent_5px,transparent_8px)]"></div>
    </>
  );
}
export default Categroy;
