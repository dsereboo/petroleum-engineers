import Image from "next/image"


const ProductCard=({data})=>{
   return(
    <div className="container ml-2 mr-2">
        <figure>
          <Image src={data.image} width={335} height={398}  alt="petroleum product"/>
        </figure> 
        <article>
            <div className="level mb-0 is-mobile">
                <div className="level-left">
                    <div className="level-item">
                    <p className="is-size-5 mr-2 has-text-white has-text-weight-semibold">{data.name}</p>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                      <p className="is-size-5 mr-2 has-text-white has-text-weight-semibold">GHS {data.price}</p>
                    </div>
                </div>     
            </div>
            <p className="is-size-6 has-text-white">Product Code:LWEOIDJSN</p>
            <p className="is-size-6 has-text-white">Manufacturer: Lanfeign</p>
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