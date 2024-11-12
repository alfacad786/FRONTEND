import React, { useState } from "react";
import "../css/component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from "@mui/material";
import { Button, Input, Text } from "@chakra-ui/react";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";

const HOST_3000 = import.meta.env.HOST_3000;

const Add_User = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------

  const validFileType = ["image/jpeg", "image/jpg", "image/png", "image/pdf"];
  const [error, setError] = useState("");
  const [Image, setImage] = useState("");

  const [formData, setFormData] = useState({
    // Name: "",
    // Mobile: "",
    // Email: "",
    // UserName: "",
    // Password: "",
    imageInput: "",
  });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleUpload = (e) => {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    if (!validFileType.find((type) => type === file.type)) {
      setError("File must be jpeg/jpg/png/pdf  format");
      return;
    }
    setImage(file);
    setFormData({
      ...formData,
      [e.target.name]: Image
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formDataToSend = new FormData();
    // for (let key in formData) {
    //   formDataToSend.append(key, formData[key]);
    // }

    axios
      .post("http://localhost:3000/api/newUser/"||`${HOST_3000}/api/newUser/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((response) => {
        console.log("this is", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // const formDataToSend = new FormData();
    // for (let key in formData) {
    //   formDataToSend.append(key, formData[key]);
    // }
    // formDataToSend.append('Image', Image);

    // try {
    //   const response = await axios.post("http://localhost:3000/api/newUser/", formDataToSend, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   console.log("this is", response.data, "data");
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    navigate("/");
  };
  return (
    <>
    <Top />
    <Nabar />
    <div className="component">
      <form onSubmit={handleSubmit} className="form">
        {/* <div>
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" name="Mobile" value={formData.Mobile} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
              name="UserName"
            value={formData.UserName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div> */}
        <div>
          {/* <label htmlFor ="Image">Image:</label> */}
          {/* <input  type="file"
            name="Image"
            value={formData.Image}
            onChange={handleChange}
          /> */}
          <Input
            id="imageInput"
            type="file"
            value={formData.imageInput}
            // name="Image"
            // value={formData.Image}
            hidden
            onChange={handleUpload}
          />
          <Button
            as="label"
            htmlFor="imageInput"
            colorScheme="blue"
            variant="outline"
            mb={4}
            cursor="pointer"
          >
            Uplode
          </Button>
          {error && <Text color="red.500">{error}</Text>}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
    </>
  );
};

export default Add_User;

// const Add_User = () => {
//   const navigate = useNavigate();

//   const validFileType = ['image/jpeg', 'image/jpg', 'image/png', 'image/pdf'];
//   const [error, setError] = useState("");
//   const [image, setImage] = useState(null);

//   const [formData, setFormData] = useState({
//     Name: "",
//     Mobile: "",
//     Email: "",
//     UserName: "",
//     Password: "",
//     Image: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!validFileType.includes(file.type)) {
//       setError("File must be jpeg/jpg/png/pdf format");
//       return;
//     }
//     setError(""); // Clear error if file type is valid
//     setImage(file);
//     setFormData({
//       ...formData,
//       Image: file
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     for (let key in formData) {
//       formDataToSend.append(key, formData[key]);
//     }
//     if (image) {
//       formDataToSend.append('Image', image);
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/api/newUser/", formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log("Response data:", response.data);
//       navigate("/");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="component">
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <label>Name:</label>
//           <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input type="text" name="Mobile" value={formData.Mobile} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder="Password" />
//         </div>
//         <div>
//           <Input
//             id="imageInput"
//             type="file"
//             hidden
//             onChange={handleUpload}
//           />
//           <Button
//             as="label"
//             htmlFor="imageInput"
//             colorScheme='blue'
//             variant='outline'
//             mb={4}
//             cursor='pointer'>
//             Upload
//           </Button>
//           {error && <Text color="red.500">{error}</Text>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Add_User;
