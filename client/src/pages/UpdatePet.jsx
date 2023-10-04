import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdatePet = () => {
    const { id } = useParams();
    const [PetName, setPetName] = useState("");
    const [PetType, setPetType] = useState("");
    const [PetDescription, setPetDescription] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:5000/pets/${id}`)
            .then(res => {
                
                const petData = res.data[0]; 
                setPetName(petData.PetName);
                setPetType(petData.PetType);
                setPetDescription(petData.PetDescription);
                setSkill1(petData.Skill1 || "");
                setSkill2(petData.Skill2 || "");
                setSkill3(petData.Skill3 || "");

            })
            .catch(error => {
                console.error("Error fetching pet data:", error);
            });
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(PetName, PetType, PetDescription, Skill1, Skill2, Skill3);
        const Data = {
            PetName,
            PetType,
            PetDescription,
            Skill1,
            Skill2,
            Skill3,
        };

        axios.put(`http://localhost:5000/pets/${id}`, Data)
            .then(res => {
                navigate("/");
            })
            .catch(error => {
                console.error("Error updating pet data:", error);
            });
    };

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Update information about this pet</h2>
                <form onSubmit={onSubmitHandler} style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
    <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <div className="input-wrapper">
        <label htmlFor="PetName">Pet Name:</label>
        <input type="text" id="PetName" onChange={(e) => setPetName(e.target.value)} value={PetName} />
        </div>
        <div className="input-wrapper">
        <label htmlFor="PetType">Pet Type:</label>
        <input type="text" id="PetType" onChange={(e) => setPetType(e.target.value)} value={PetType} />
        </div>
        <div className="input-wrapper">
        <label htmlFor="PetDescription">Pet Description:</label>
        <input type="text" id="PetDescription" onChange={(e) => setPetDescription(e.target.value)} value={PetDescription} />
        </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <div className="input-wrapper">
        <label htmlFor="Skill1">Skill 1 (optional):</label>
        <input type="text" id="Skill1" onChange={(e) => setSkill1(e.target.value)} value={Skill1} />
        </div>
        <div className="input-wrapper">
        <label htmlFor="Skill2">Skill 2 (optional):</label>
        <input type="text" id="Skill2" onChange={(e) => setSkill2(e.target.value)} value={Skill2} />
        </div>
        <div className="input-wrapper">
        <label htmlFor="Skill3">Skill 3 (optional):</label>
        <input type="text" id="Skill3" onChange={(e) => setSkill3(e.target.value)} value={Skill3} />
        </div>
    </div>
    <div style={{ width: "20%", display: "flex", alignItems: "flex-end" }}>
        <button id="update-pet">
        <i className="bi bi-box-arrow-down"></i> Add Pet
        </button>
    </div>
    </form>
        </div>
    );
}

export default UpdatePet;