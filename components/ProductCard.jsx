import Image from "next/image"
import image from "../public/images/item.png"

const ProductCard=({data})=>{
   return(
    //    <div className="card">
    //        <div className="card-image">
    //            <figure>
    //                 <Image src={image}/>
    //            </figure>
    //        </div>
    //        <div className="card-content">
    //             <h1>Product</h1>
    //        </div>


    //    </div>
    <div className="container ml-2 mr-2">
        <figure>
          <Image src={image}/>
        </figure> 
        <article>
            <div className="level is-mobile">
                <div className="level-left">
                    <div className="level-item">
                    <p className="is-size-5 mr-2 has-text-weight-semibold">{data.name}</p>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                      <p className="is-size-5 mr-2 has-text-weight-semibold">GHS {data.price}</p>
                    </div>
                </div>     
            </div>
            <p className="is-size-6">Product Code:LWEOIDJSN</p>
            <p className="is-size-6 ">Manufacturer: Lanfeign</p>
            {/* <div className="level is-mobile has-background-info">
                <div className="level-left">
                    <div className="level-item">
                        <p>Product Code</p>
                    </div>

                </div>

            </div> */}
        </article>
    </div>
   )
}


export default ProductCard