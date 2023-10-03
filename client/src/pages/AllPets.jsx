import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom'

const AllPets = () => {
const navigate = useNavigate();
const [cookies, removeCookie] = useCookies([]);
const [username, setUsername] = useState("");
useEffect(() => {
    const verifyCookie = async () => {
        if (!cookies.token) {
            navigate("/login");
        }
        const { data } = await axios.post(
            "http://localhost:5000",
            {},
            { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        
        return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
        })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
}, [cookies, navigate, removeCookie]);
const Logout = () => {
    removeCookie("token");
    navigate("/signup");
};

const [allPets, setAllPets] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/pets");
            setAllPets(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    fetchData();
}, []);

return (
    <>
    <div className="home_page">
        <h4>
        {" "}
        Welcome <span>{username}</span>
        </h4>
        <button className="button" onClick={Logout}>LOGOUT</button>
    </div>
    <div>
    <div style={{ textAlign: "left" }}>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a good home</h2>
            <div className="link-container">
            <Link to="/createpet">Add a pet to the shelter</Link>
            </div>
        </div>
        <br />
        <br />
        <div className="table-container">

        <table style={{ fontSize: "3rem", borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black" }}>Name</th>
                    <th style={{ border: "1px solid black" }}>Type</th>
                    <th style={{ border: "1px solid black" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {allPets.map((pet, index) => (
                    <tr key={index}>
                        <td style={{ border: "1px solid black" }}>{pet.PetName}</td>
                        <td style={{ border: "1px solid black" }}>{pet.PetType}</td>
                        <td style={{ border: "1px solid black" }}>
                            <div className="link-container">

                            <Link to={`/pets/update/${pet._id}`}>Edit /</Link> &nbsp; 
                            <Link to={`/pets/${pet._id}`}>Details</Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    <ToastContainer />
    </>
);
};

export default AllPets;