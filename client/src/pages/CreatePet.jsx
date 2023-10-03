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

        axios.post("https://pet-shelter-backend-9vfu.onrender.com/pets", Data)
        .then(res => {
            navigate("/");
        });
    };

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
            <form onSubmit={onSubmitHandler} style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "40%" }}>
                    <div>
                        <label>PetName:</label>
                        <input type="string" onChange={(e) => { setPetName(e.target.value) }} value={PetName} />
                    </div>
                    <div>
                        <label>PetType:</label>
                        <input type="string" onChange={(e) => { setPetType(e.target.value) }} value={PetType} />
                    </div>
                    <div>
                        <label>PetDescription:</label>
                        <input type="string" onChange={(e) => { setPetDescription(e.target.value) }} value={PetDescription} />
                    </div>
                </div>
                <div style={{ width: "40%" }}>
                    <div>
                        <label>Skill 1 (optional):</label>
                        <input type="string" onChange={(e) => { setSkill1(e.target.value) }} value={Skill1} />
                    </div>
                    <div>
                        <label>Skill 2 (optional):</label>
                        <input type="string" onChange={(e) => { setSkill2(e.target.value) }} value={Skill2} />
                    </div>
                    <div>
                        <label>Skill 3 (optional):</label>
                        <input type="string" onChange={(e) => { setSkill3(e.target.value) }} value={Skill3} />
                    </div>
                </div>
                <div>
                    <button style={{ border: "1px solid black", backgroundColor: "blue", boxShadow: "2px 2px 2px black", width: "120px", height: "30px" }}>
                        <i className="bi bi-box-arrow-down"></i> Add Pet
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePet;
