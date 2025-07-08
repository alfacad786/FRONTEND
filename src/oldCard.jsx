import "../src/css/oldCard.css";
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

  // ------------------list from aws s3 bucket-------------
  const [bucket, setbuckets] = useState("aaliya-1721126150278");
  const [bucket_Mumbai, setbuckets_Mumbai] = useState("rizwana-1724849048961");
  // temperari close call api ListObject

  useEffect(() => {
    const controller = new AbortController(); // 🔴 Add abort controller
    console.log("ye link per request gi=" + `${HOST_3000}/api/ListObject/`);

    axios

      .get(`${HOST_3000}/api/ListObject/`, {
        params: { bucketName: bucket },
        signal: controller.signal,
      },console.log (`ye link per request gi=${HOST_3000}/api/ListObject/`))
      .then((response) => {
        console.log("aws s3=",response.data); // Debugging purpose
        setObjects(response.data);
        console.log("bucket list:", response.data);
      })
      // .catch((error) => {
      //   console.log(
      //     "thar was an error fetching the data",
      //     error,
      //     error.message,
      //     "os"
      //   );
      // });
      .catch((err) => {
      if (axios.isCancel(err)) {
        console.warn("Request cancelled:", err.message);
      } else {
        console.error("thar was an error fetching the data", err);
      }
    });
      return () => {
      controller.abort(); // ✅ Abort old request if component unmounts or re-renders
    };
  }, []);
//   useEffect(() => {
//   console.log("Rendering cards:");
//   console.log("Objects array:", Objects);
// }, [Objects]);

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
  const car = Objects.map((Object) => (
    <div id="Card" key={Object.Key} onClick={() => goToCardDetail(Object)}>
      {/* <p style={{ color: "white" }}>{Object.Key} </p> */}
      <img src={Object.imageUrl} alt="image" />
      {/* <p>{Object.projectName}</p> */}
      {/* <p>{Object.discription}</p> */}
    </div>
  ));

  // return < >{Items }</>;
  return <>{car}</>;
}

export default Card;