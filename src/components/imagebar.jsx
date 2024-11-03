import React, { useState } from "react";
import "../css/Home.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Add_User from "./Add_User";
import CreatBucket from "./createBacket";
import Add_Image from "./Add_image";
import Button from "@mui/material/Button";



// const ProjectPhoto = () => {
//   const navigate = useNavigate();

//   const handleCheckedRight = () => {
//     let img= document.getElementById("img");
//     console.log(img)
//     return(img.style.position=-)
 
    
//    };
 
//    const handleCheckedLeft = () => {
//     console.log(img)
//    };
//   return (
   
//     <>
//       <Button
//           sx={{ my: 0.5, bgcolor: "silver" }}
//           style={{ color: "white", fontSize: 20, fontWeight: 5 }}
//           variant="outlined"
//           size="small"
//           onClick={handleCheckedLeft}
//           // disabled={rightChecked.length === 0}
//           aria-label="move selected left"
//         >
//           &gt;
//         </Button> 
//       <img id="img" src="/MAYURI1.jpg" alt="image" />
//       <img id="img" src="/MAYURI1.jpg" alt="image" />
//       <img id="img" src="/MAYURI1.jpg" alt="image" />
//       <img id="img" src="/MAYURI1.jpg" alt="image" />
//          <Button
//           sx={{ my: 0.5, bgcolor: "silver" }}
//           style={{ color: "white", fontSize: 20, fontWeight: 5 }}
//           variant="outlined"
//           onClick={handleCheckedRight}
//           // disabled={rightChecked.length === 0}
//           aria-label="move selected left"
//         >
//           &lt;
//         </Button> 
//         </>
   
//   );
// };
// export default ProjectPhoto;





const ProjectPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/MAYURI1.jpg",
    "/SULEKH1.jpg",
    "/SUNRISE1.jpg",
    "/VRAJ-BHUMI7.jpg",
  ];

  const handleCheckedRight = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCheckedLeft = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Button
        sx={{ my: 0.5, bgcolor: "silver" }}
        style={{ color: "white", fontSize: 20, fontWeight: 5 }}
        variant="outlined"
        size="small"
        onClick={handleCheckedLeft}
        aria-label="move selected left"
      >
        &lt;
      </Button>
      
      <img id="img" src={images[currentIndex]} alt="image" />
     

      <Button
        sx={{ my: 0.5, bgcolor: "silver" }}
        style={{ color: "white", fontSize: 20, fontWeight: 5 }}
        variant="outlined"
        onClick={handleCheckedRight}
        aria-label="move selected right"
      >
        &gt;
      </Button>
    </>
  );
};

export default ProjectPhoto;
