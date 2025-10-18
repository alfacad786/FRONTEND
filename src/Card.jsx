import "../src/css/Card.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
// const HOST_3000 = import.meta.env.HOST_3000;

const HOST_3000 = import.meta.env.VITE_HOST_3000;
console.log("Current HOST_3000:", HOST_3000, "card.jsx");
function Card() {
  const [Objects, setObjects] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
    const [loading, setLoading] = useState(true);

  // ------------------list from aws s3 bucket-------------
  const [bucket, setbuckets] = useState("aaliya-1721126150278");
  const [bucket_Mumbai, setbuckets_Mumbai] = useState("rizwana-1724849048961");
  // temperari close call api ListObject

  // useEffect(() => {
  //   setLoading(true);
  //   axios

  //     .get(
  //       `${HOST_3000}/api/ListObject/`,
  //       {
  //         params: { bucketName: bucket },
  //         headers: { "Cache-Control": "no-cache" },
  //       },
  //       console.log(`${HOST_3000}/api/ListObject/per request gy`)
  //     )
  //     .then((response) => {
  //       console.log("aws s3=", response.data); // Debugging purpose
  //       setObjects(response.data);
  //       // console.log("bucket list:", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "thar was an error fetching the data",
  //         error,
  //         error.message,
  //         "os"
  //       );
  //     });
  // }, [bucket]);



      // ===========================================
useEffect(() => {
    const fetchCards = async () => {
      console.log("Fetching AWS S3 data for bucket:", bucket);

      try {
        setLoading(true);
        const response = await axios.get(`${HOST_3000}/api/ListObject/`, {
          params: { bucketName: bucket },
          headers: { "Cache-Control": "no-cache" }, // avoid stale cache
        });

        console.log("AWS S3 response:", response.data);
        setObjects(response.data);
      } catch (error) {
        console.error("Error fetching card data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [location.key]); // <-- re-fetch every time page is revisited


// =================================================


useEffect(() => {
  console.log("Rendering cards:");
  console.log("Objects array:", Objects);
}, [Objects]);
  // ++++++++++++++++==========================++++++++++++++++++

  // const fetchCardList = async () => {
  //   try {
  //     const response = await axios.get(`${HOST_3000}/api/ListObject/`, {
  //       params: { bucketName: bucket_Mumbai },
  //     });
  //     console.log("S3 response data:", response.data);
  //     setObjects(response.data);
  //   } catch (error) {
  //     console.log("Error fetching cards:", error.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchCardList();
  // }, []);
  // ++++++++++++++++==========================++++++++++++++++++



  // ------------------read object from aws s3 bucket-------------
  
  
  const [id, setid] = useState(null);
  const [Data, setData] = useState([]);
  const goToCardDetail = (Object) => {
    setid(Object.Key);
    console.log("Clicked key:", Object.Key);

    axios
      .get(`${HOST_3000}/api/Read/`, {
        params: { bucketName: bucket, objectKey: `${Object.Key}` },
      })

      .then((response) => {
        const id = Object.Key;
        const Data = response.data.data;
        console.log("Object data mila:", Data);

        // setData(response.data.data);
        console.log("THIS", Data, "data");
        navigate("/CardDetail", { state: { Data, id } });
        console.log(
          "Navigating to CardDetail with data:",
          Data,
          "clickedKey:",
          id
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // ===========================================================
  // useEffect(() => {
  //   if (Data && id) {
  //     navigate("/CardDetail", { state: { Data, id } });
  //     console.log(
  //       "Navigating to CardDetail with data:",
  //       Data,
  //       "clickedKey:",
  //       id
  //     );
  //   }
  // }, [Data, id]);
  // ===========================================================
  const car =
    Objects.length > 0 ? (
      Objects.map((Object) => (
        <div id="Card" key={Object.Key} onClick={() => goToCardDetail(Object)}>
          <img src={Object.imageUrl} alt="image" />
        </div>
      ))
    ) : (
      <p style={{ color: "white" }}>Loading cards...</p>
    );
  // return < >{Items }</>;
  return <>{car}</>;
  // ================================================================================*****************
  // return (
  //   <div >
  //     {Objects.length > 0 ? (
  //       Objects.map((obj) => (
  //         <div key={obj.Key} className="Card" onClick={() => goToCardDetail(obj)}>
  //           <img src={obj.imageUrl} alt={obj.projectName} />
  //         </div>
  //       ))
  //     ) : (
  //       <p style={{ color: "white" }}>Loading cards...</p>
  //     )}
  //   </div>
  // );
  // ================================================================================*****************
  //  return (<>  {Objects.length > 0 ? (Objects.map((Object) => (
  //   <div id="Card" key={Object.Key} onClick={() => goToCardDetail(Object)}>
  //     <img src={Object.imageUrl} alt="image" />
  //   </div>
  // ))): (
  //     <p style={{ color: "white" }}>Loading cards...</p>
  //   )}
  // </>)
}

export default Card;
