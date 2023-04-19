import { useEffect, useState } from "react";

export const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fechData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
        console.log(products);
      });
  };

  useEffect(() => {
    fechData();
  }, []);

  //     return loading ? <WaitingData /> : products.map(product => (
  //     <h1 key={product.id}>{product.title}</h1>
  // ))
  //   return loading ? <CardLoading /> : products.map(product => (
  //                 <Card imgLink={product.images} title={product.title}/>
  //   ))

  return loading ? (
    products.map((products) => <CardLoading />)
    
  ) : (
    products.map((product) => (
      <div className="col-xl-3">
        <div className="card">
          <div
            className="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img src={product.images} className="img-fluid" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    ))
  );
  // <div className="container">
  //     <div className="row">

  //     </div>
  // </div>
};

// function Card({imgLink, title}) {
//   return (

//   );
// }

function CardLoading() {
  return (
    <div className="col-xl-3">
      <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" aria-hidden="true">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
    </div>
  </div>
    </div>
    
  )
}
