import { redirect, useLocation } from "react-router-dom";
import "./Page.css";



function CardDetail() {

  const location = useLocation();
  const { id, products } = location.state || {};


  // const id = useLocation().state.id;
  // const products= useLocation().state.products


   console.log(id,products);

  const Items = products.filter((products) => products._id == id);
 
  console.log(Items[0]);
  return (
    <div className="CardDetail">
      <h4>{Items[0].projectName}</h4>
      <div className="CardDetail1">
        <div className="imagdiv"><img src={Items[0].image} alt="img" /></div>
        <div className="Detail">
          <button >{Items[0].projectName} </button>
          <p>Id:{Items[0]._id} </p>
          <p>{Items[0].discription} </p>
          {/* <a href={Items[0].image}>link</a>{" "} */}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;



