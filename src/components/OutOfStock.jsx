function OutOfStock() {
  return (
    <div className="w-max flex flex-row justify-start items-center px-1 py-0.5 my-0.5 rounded-full bg-red-600/10 gap-1">
      <i className="bi bi-x-circle text-[12px] text-red-600"></i>
      <p className="text-[10px] text-red-600 pr-0.5">Out of stock</p>
    </div>
  );
}
export default OutOfStock;
