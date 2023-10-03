import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const OnePet = (props) => {
const { id } = useParams();
const [onePet, setOnePet] = useState({});
const navigate = useNavigate();

const deletePet = () => {
    axios
    .delete(`https://pet-shelter-backend-9vfu.onrender.com/pets/${id}`)
    .then((response) => {
        if (response.status === 200) {
        const updatedOnePet = { ...onePet };
        delete updatedOnePet._id;
        setOnePet(updatedOnePet);
        } else {
        console.error("Failed to delete pet.");
        }
        navigate("/");
    })
    .catch((err) => {
        console.error(err);
    });
};

useEffect(() => {
    axios
    .get(`https://pet-shelter-backend-9vfu.onrender.com/pets/${id}`)
    .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data && res.data.length > 0) {
        setOnePet(res.data[0]);
        }
    })
    .catch((err) => console.log(err));
}, [id]);

return (
    <div className='onePet-component'>
        
    <h1>Pet Shelter</h1>
    <h2>Details about: {onePet.PetName} </h2>
    <Link style={{ float: "right" }} to={"/"}>
        Go home
    </Link>
    <br /> <br />
    <button
            onClick={() => deletePet()}
            style={{
            float: "right",
            border: "1px solid black",
            backgroundColor: "red",
            boxShadow: "2px 2px 2px black",
            width: "200px",
            height: "30px",
            marginTop: "10px",
            }}
        >
            <i class="bi bi-house"></i> Adopt {onePet.PetName}
        </button>
    <div style={{ display: "flex", border: "2px solid black", padding: "10px", width: "80%", margin: "0 auto ", fontSize: "2rem" }}>
        <div style={{flex: 8 }}>
        <p> Pet Type : {onePet.PetType} </p>
        <p> Pet Description: {onePet.PetDescription} </p>
        <p>
            Pet Skills: <br /> {onePet.Skill1} <br /> {onePet.Skill2}
            <br /> {onePet.Skill3}
        </p>
        </div>
        <div style={{ flex: 1 }}>
        
        </div>
    </div>
    </div>
);
};

export default OnePet;
