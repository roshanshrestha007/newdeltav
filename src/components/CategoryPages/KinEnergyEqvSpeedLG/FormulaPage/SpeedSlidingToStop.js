import {useState} from 'react'

const SpeedSlidingToStop = () => {
    const [speed, setSpeed] = useState(0);
    const [friction_coeff, setFrictionCoeff] = useState(0);
    const [skid_distance, setSkid_Distance] = useState(0);
    
    const calculateSpeed = () => {
        const calculatedSpeed = Math.sqrt(30 * skid_distance * friction_coeff);
        setSpeed(calculatedSpeed);

    };

    return (
        <div>
            <h2>Speed of vehicle sliding to stop</h2>
            <div className='mb-1 mt-1'>
                <label for = "distance" className='form-label'><h2> Skid (slide to stop) distance </h2></label>
                <input type = "number" className='form-control' id = 'distanceInput' placeholder='Enter distance in feet' value = {skid_distance} onChange={(e) => setSkid_Distance(parseFloat(e.target.value))} required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>
        </div>
    )
}