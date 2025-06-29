function ProductTile({singleProductTile}){
    return(
        //<div>
          //  This is one single Product title
        //</div>
        <div className="relative group border border-cyan-700 p-6 cursor-pointer">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img 
                src={singleProductTile?.thumbnail}
                alt={singleProductTile?.title}
                className="object-cover w-full h-full transaction-all duration-300 group-hover:scale-125"
                />

            </div>
            <div className="flex item-start justify-between mt-4 space-x-4">
                <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >{singleProductTile?.title}</p>

                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text[14px]">${singleProductTile?.price}</p>

                </div>
                </div>
        <button cassName="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">View Details</button>
        </div>

    )

}
export default ProductTile;