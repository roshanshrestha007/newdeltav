import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';


function Conversion(props) {
    const [signupForm, setSignupForm] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userPassword2: "",
        userPhone: ""
    })
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const getDatafromLS = () => {
        const data = localStorage.getItem('allUsers');
        if (data) {
            return JSON.parse(data) || '[]';
        }
        else {
            return [];
        }
    }

    const [users, setUsers] = useState(getDatafromLS());

    function HandleSpeedtoVelocity(e) {
        // e.preventDefault();

        // var username = document.getElementById("uname").value;
        // var emailVerify = document.getElementById("email").value;

        // var password = document.getElementById("psw1").value;
        // var confirmPassword = document.getElementById("psw2").value;
        // var phno = document.getElementById("phoneno").value;

        // if (!username || !emailVerify || !password || !phno || password !== confirmPassword) {
        //     alert("Password Doesnot match")
        // } else {
        //     var allUsers = JSON.parse(localStorage.getItem('allUsers') || "[]")
        //     allUsers.push(signupForm)
        //     localStorage.setItem('allUsers', JSON.stringify(allUsers))
        //     const i = users.length;
        //     localStorage.setItem("UserIndex", i);
        //     props.toggleState();
        //     navigate('/AccountPage');
        // }
        navigate('/SpeedToVelocityPage')
    }

    return (

        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <form className="was-validated">
                    <h2 className="display-4 page-header mt-3 mb-3 d-flex ">Conversion Formulas</h2>
                    
                    <div>
                    <button type="button" class="btn btn-dark" onClick={HandleSpeedtoVelocity}>Convert Speed to Velocity</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Convert Velocity to Speed</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>




      {/* <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>

      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br>
      <button className="btn btn-primary" type="button">Kinetic Energy Equivalent Speed Loss/Gain</button><br></br><br></br> */}


      </div>



                </form>
            </div>
        </div>
    )
}

export default Conversion;