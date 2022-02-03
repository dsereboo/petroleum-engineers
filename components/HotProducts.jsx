import ProductCard from "./ProductCard"  
const HotProducts=()=>{

    const data=[
        {id:"217hjxs", name:"Lanfeign", price:"800", productCode:"LFW50D2241", manufacturer:"Lanfeng"},
        {id:"245hjxs", name:"Ghana", price:"600", productCode:"LFW50D2241", manufacturer:"Lanfeng"},
        {id:"348hjxs", name:"Hiawei", price:"1200", productCode:"LFW50D2241", manufacturer:"Lanfeng"},
    ]
    return(
        <section className="hero is-danger">
            <div className="container pr-3 pl-3 pb-6">
                <p className="has-text-white has-text-weight-bold is-size-3 mt-6 mb-5">Hot Products</p>
                <div className="columns"> 
             
                {
                    data.map(
                        item=>{
                            return(
                                <div className="column is-4" key={item.id}>
                                    <ProductCard data={item} />
                                </div>
                            )
                        }
                    )
                }
            
                </div>
            </div>
        </section>
    )
}

export default HotProducts