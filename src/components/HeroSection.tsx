import React from "react";
import Image from "next/image";

const Bags = () => {
  return (
    <div>
      <h1 className='text-center text-pink-700 text-[30px] font-semibold flex justify-center mt-12 mb-12'>Responsive devices assignment</h1>

    <div className="flex flex-wrap justify-center bg-black w-full">
     
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#f5eef1] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag1.webp" 
            alt="Bag 1" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 2,999</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>

      
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#f4ebee] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag2.webp" 
            alt="Bag 2" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 3,500</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>

      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#ede6e8] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag3.webp" 
            alt="Bag 3" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 2,500</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>

     
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#ede6e8] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag4.webp" 
            alt="Bag 4" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 1,999</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>

      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#ede6e8] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag5.webp" 
            alt="Bag 5" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
            />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 2,999</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>

           
      <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-5">
        <div className="border-2 border-[#ede6e8] rounded-md p-4 w-full max-w-sm">
          <Image 
            src="/products/bag6.webp" 
            alt="Bag 6" 
            width={600} 
            height={600} 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
        <p className="text-white text-center pt-4 text-lg sm:text-xl">PKR 3,500</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl mt-4 w-4/5 sm:w-3/4">
          Buy Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default Bags;
