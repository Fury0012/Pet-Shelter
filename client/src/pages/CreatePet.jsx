import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePet = () => {
    const [PetName, setPetName] = useState("");
    const [PetType, setPetType] = useState("");
    const [PetDescription, setPetDescription] = useState("");
    const [Skill1, setSkill1] = useState("");
    const [Skill2, setSkill2] = useState("");
    const [Skill3, setSkill3] = useState("");

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!PetName || !PetType || !PetDescription) {
            alert("Pet Name, Pet Type, and Pet Description are required fields. Please fill them in.");
            return;
        }

        console.log(PetName, PetType, PetDescription, Skill1, Skill2, Skill3);
        const Data = {
            PetName,
            PetType,
            PetDescription,
            Skill1,
            Skill2,
            Skill3,
        };

        axios.post("http://localhost:5000/pets", Data)
        .then(res => {
            navigate("/");
        });
    };

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
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
            <button id="create-pet">
            <i className="bi bi-box-arrow-down"></i> Add Pet
            </button>
        </div>
        </form>
        </div>
    )
}

export default CreatePet;