import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Weyoung from '../layout/Weyoung';
import Anua from '../layout/Anua';
import Skin1004 from '../layout/Skin1004';
import Phka from '../layout/Phka';
import Medicube from '../layout/Medicube';
import Gradian from '../layout/Gadian';
function Brand() {
  const BrandList = [
    { id: 'BRAND01', brandName: 'Skin 1004', link: '/' },
    { id: 'BRAND02', brandName: 'Miss Sunflower', link: '/' },
    { id: 'BRAND03', brandName: 'Weyoung', link: '/' },
    { id: 'BRAND04', brandName: 'Phka Blush', link: '/' },
    { id: 'BRAND05', brandName: 'Phka Blush', link: '/' },
    { id: 'BRAND06', brandName: 'Phka Blush', link: '/' },
    { id: 'BRAND07', brandName: 'Phka Blush', link: '/' },
  ];

  return (
    <Fragment>
      {/* <ul className="w-full h-max flex flex-row justify-start items-center px-5 py-5 mt-32 gap-8 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
        {BrandList.map((brand) => {
          return (
            <Link
              className="shrink-0 py-3.5 px-8 flex justify-center items-center rounded-tl-lg rounded-tr-4xl rounded-bl-4xl rounded-br-lg text-white bg-[#dc3545] text-2xl border-2 border-amber-300"
              key={brand.id}
              to={brand.link}
            >
              {brand.brandName}
            </Link>
          );
        })}
      </ul> */}
      <section className="relative mt-[130px]">
        {/* Weyoung */}
        <Weyoung />
        {/* Anua */}
        <Anua />
        {/* skin1004 */}
        <Skin1004 />
        {/* phka */}
        <Phka />
        {/* medicube */}
        <Medicube />
        {/* gradian */}
        <Gradian />
        <p className="absolute z-[999] left-[50%] translate-x-[-50%] bottom-0 bg-white text-[#d6d6d6] text-sm px-1.5">
          That's all for now
        </p>
      </section>
    </Fragment>
  );
}
export default Brand;
