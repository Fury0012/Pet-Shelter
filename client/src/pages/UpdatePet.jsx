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
                const petData = res.data; 
                setPetName(petData.PetName);
                setPetType(petData.PetType);
                setPetDescription(petData.PetDescription);
                setSkill1(petData.Skill1 || "");
                setSkill2(petData.Skill2 || "");
                setSkill3(petData.Skill3 || "");
                console.log(PetName);
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
                        <i className="bi bi-pen"></i> Update Pet
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdatePet;