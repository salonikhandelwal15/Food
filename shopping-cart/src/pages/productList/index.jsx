import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTitle from "../../components";

function ProductListPage(){


    const {listOfProducts,loading}=useContext(ShoppingCartContext);
    console.log(listOfProducts);

    if(loading) return <h1>Loading data! Please Wait...</h1>


    //console.log(getContextValue);
    return(
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7x1">
                <div className="max-w-md mx-auto text-centre">
                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
                        Our featured Products</h2>
                </div>
                <div className ="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">

                    {
                        listOfProducts && listOfProducts.length > 0 ?
                        listOfProducts.map((singleProductTile)=><ProductTitle singleProductTile={singleProductTile}/>
                    ):(
                        <h3>No Products Found</h3>
                    )}
                    
                </div>
            </div>
        </section>
    );
}
export default ProductListPage;