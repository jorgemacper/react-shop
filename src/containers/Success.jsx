import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import usePositionAddress from "../hooks/usePositionAddress";
import "../styles/components/Success.css";

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = usePositionAddress(buyer[0].address);
    console.log('location -> ', location);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
                <div className="Success-map">
                    {location && Object.keys(location).length!==0 && (
                        <Map 
                        data={location}
                    />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Success;