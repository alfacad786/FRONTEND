import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


// const products = [
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif",
//     title: "alfa",
//     id: 1,
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ex doloribus, sequi voluptates quae quos ut. Illo, blanditiis. Fuga magnam eligendi, asperiores ab facere aliquid laudantium molestias ipsam quas alias at, doloremque fugiat debitis sequi aspernatur et amet commodi dolorum perferendis. Fugit accusantium numquam quia ab vel, accusamus impedit facilis"
//   },
//   {
//     img: "./SULEKH1.jpg",
//     link: "https://www.google.com/",
//     name: "ayan",
//     title: "alfa",
//     id: 2,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus eaque aliquid cumque minus at porro dicta, veritatis natus obcaecati quas rem, eveniet veniam possimus doloremque vel unde sint minima adipisci. Illo, fuga! Hic cum quos vero iure accusamus eligendi. Possimus ea tempore quam quae dignissimos ducimus quos provident numquam ab delectus, cupiditate et dolores animi incidunt. Natus labore, doloribus quis facere culpa laborum officia ipsam reiciendis porro necessitatibus similique"
//   },
//   {
//     img: "./SUNRISE1.jpg",
//     link: "https://www.google.com/",
//     name: "aaliya",
//     title: "alfa",
//     id: 3,
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quas repudiandae perferendis pariatur reiciendis voluptas, explicabo ad recusandae ab praesentium quam necessitatibus ut obcaecati veniam non nemo quaerat ex suscipit."
//   },
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif",
//     title: "alfa",
//     id: 4,
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure totam obcaecati exercitationem consectetur sunt ab quod, quibusdam atque nemo."
//   },
//   { name: "ayan", title: "alfa", id: 5 , description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cumque accusamus quod sunt ipsum qui impedit vel placeat saepe ullam eius ipsa ea dolore dolorum, tempore accusantium, autem, reprehenderit odio delectus corporis sit? Mollitia sit, magni adipisci corporis hic molestias."
//   },
//   { name: "aaliya", title: "alfa", id: 6, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur itaque saepe quaerat voluptas, provident voluptate?"

//    },
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif1",
//     title: "alfa",
//     id: 7,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque obcaecati molestiae commodi fugit sequi tempora nobis placeat eaque facilis."
//   },
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif2",
//     title: "alfa",
//     id: 8,
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt modi iste deleniti? Esse voluptates laudantium nulla cum. Quas laborum repudiandae alias repellendus. Iure repellendus placeat aliquam! Molestiae reiciendis dolor iusto culpa quaerat, error at voluptatem aliquid? Autem saepe ab non ducimus placeat, sint est amet?"
//   },
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif3",
//     title: "alfa",
//     id: 9,
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eius, consequatur perspiciatis commodi voluptas deleniti, quo incidunt ut laboriosam impedit maxime expedita accusantium iure nihil enim est aperiam reiciendis velit ad voluptatum."
//   },
//   {
//     img: "./MAYURI1.jpg",
//     link: "https://www.google.com/",
//     name: "asif4",
//     title: "alfa",
//     id: 10,
//     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae reiciendis, eum sunt obcaecati, quibusdam, iusto porro facere a consequatur ipsam veritatis facilis. Magni nisi reiciendis accusantium totam expedita cumque quae, ratione ex praesentium ut vel officiis officia ea minima at molestias veniam aliquid. Quasi eos labore est animi!"
//   }
// ];





// let product = async () => {
    
//   let data =  await fetch ("http://localhost:3000/api/product")
//   let jsondata = await data.json() ;
//   try {     
   
//     console.log(jsondata);
//     console.log(jsondata.projectName);
//     console.log(jsondata.discription);
//     console.log(jsondata.image);
//     console.log(jsondata._id);
 
//      let result = {
//       projectName:jsondata.projectName,  
//       discription:jsondata.discription,
//       image:jsondata.image,
//       id:jsondata._id
       
//      };
//          return result;
  
//  } catch (error) {console.log(jsondata.message);
//   let err=jsondata.message
//   return err; 
  
//  }


// };




function Card  () {

  const[products, setProducts]= useState([]);
  
useEffect(()=>{
  axios
  .get("http://localhost:3000/api/product/data")
  .then(response=>{
    setProducts(response.data);
    // console.log("this:",response.data,"from card")
  })
    .catch(
      error=>{
        console.log('thar was an error fetching the data',error)
      });
  },[]);




  const navigate = useNavigate();
  function goToCardDetail(id) {
    navigate("/CardDetail", { state: { id, products } });
  }


  // function goToCardDetail(id) {
  //   navigate("/CardDetail", { state: { id, products } });
  // }





const Items = products.map((products) => ( 
    <div className="Card" key={products._id} onClick={()=>goToCardDetail(products._id)}  >
      
      <img src={products.projectName} alt="img" /> 
      <p>{products.discription} </p>     
      <p>{products.image} </p>
      <p>{products._id} </p>
    </div>  
   
));

  return < >{Items }</>;
  
}

export default Card;
