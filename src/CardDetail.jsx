import { redirect, useLocation } from "react-router-dom";
import "./Page.css";



function CardDetail() {
  const id = useLocation().state.id;
  const product= useLocation().state.product


   console.log(id,product);

  const Items = product.filter((product) => product.id == id);
 
  console.log(Items[0].name);
  return (
    <div className="CardDetail">
      <h4>{Items[0].title}</h4>
      <div className="CardDetail1">
        <div className="imagdiv"><img src={Items[0].img} alt="img" /></div>
        <div className="Detail">
          <button >{Items[0].name} </button>
          <p>Id:{Items[0].id} </p>
          <p>{Items[0].description} </p>
          <a href={Items[0].link}>link</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
