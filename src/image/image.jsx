import React, { useState } from 'react';
import axios from 'axios';



const ImageUpload = () => {


    const [image, setImage] = useState(null);


    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);


        try {
            const res = await axios.post('/upload', formData, {

                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };



    return (
        <form onSubmit={handleSubmit}>

            <input type="file" onChange={handleImageChange} />
            
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default ImageUpload;
