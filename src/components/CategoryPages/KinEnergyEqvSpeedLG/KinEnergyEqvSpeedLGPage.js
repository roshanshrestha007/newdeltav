import { useNavigate } from 'react-router-dom';


function KinEnergyEqvSpeedLG(props) {
    
    const navigate = useNavigate();
    


    function SpeedStoS(e) {
        navigate('/SpeedSlidingToStop')
    }
    function VelocityStoS(e) {
        navigate('/VelocitySlidingToStop')
    }



    return (

        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <form className="was-validated">
                    <h2 className="display-4 page-header mt-3 mb-3 d-flex ">Kinetic Energy Equivalent Speed Loss/Gain</h2>
                    
                    <div>
                    <button type="button" class="btn btn-dark" onClick={SpeedStoS}>Speed Sliding to Stop</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark" onClick={VelocityStoS}>Velocity Sliding to Stop</button>
                    <br></br><br></br>
                    {/* <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button>
                    <br></br><br></br>
                    <button type="button" class="btn btn-dark">Dark</button> */}




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

export default KinEnergyEqvSpeedLG;