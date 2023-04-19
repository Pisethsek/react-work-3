import { useState } from "react"

let ProductListItem = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProduct = () => {
         fetch("https://api.escuelajs.co/api/v1/products")
         .then(resp => resp.json())
         .then(resp => {
            setProducts(resp)
            setLoading(false)
            console.log(products)
         }) 
    }
    useEffect(() => {
        console.log("First Lanuch")
        fetchProduct()
    }, [])
    return (
        <h1>Product List Item</h1>
    )
}