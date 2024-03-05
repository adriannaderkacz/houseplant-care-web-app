import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

import NewPlantProfile from '../NewPlantProfile/index.jsx';

import './style.css'
import plantDetailsFetch from '../../utils/plantDetailsFetch'




const PlantOfTheDay = () => {
    // State to hold the currently selected plant for display in the modal
    const [selectedPlantModal, setSelectedPlantModal] = useState({ isVisible: false, plant: null });
    


    runOncePerDay()

    useEffect(() => {

    });


    function hasOneDayPassed() {
        var date = new Date().toLocaleDateString();

        if (localStorage.yourapp_date == date)
            return false;

        localStorage.yourapp_date = date;
        return true;
    }



    function runOncePerDay() {
        if (!hasOneDayPassed()) return false;

        plantDetailsFetch.getPlantDetails(Math.floor(Math.random() * 3000))
            .then((data) => {

                console.log(data.data)
                localStorage.setItem("nameKey", data.data.common_name)
                localStorage.setItem("descKey", data.data.type)
                localStorage.setItem("imgKey", data.data.default_image.original_url)
                window.location.reload();
                localStorage.setItem("plantDataKey", JSON.stringify(data.data));
                
            })
            .catch(() => {
                console.error();
            });
    }

    const handlePlantClick = () => {
        console.log(JSON.parse(localStorage.getItem("plantDataKey")))
        setSelectedPlantModal({ isVisible: true, plant: JSON.parse(localStorage.getItem("plantDataKey")) });
    }

    const toggleNewPlantProfVisi = (isvisible) => {
        setSelectedPlantModal({ ...selectedPlantModal, isVisible: isvisible });
    }

    return (
        <>
        <a type="link" onClick={() => handlePlantClick()} style={{ cursor: 'pointer' }}>
        <Card
            title="Plant of the Day"
            cover={<img alt={localStorage.getItem("nameKey")} src={localStorage.getItem("imgKey")} className="plant-image-cover" />}
        >
            <Card.Meta title={localStorage.getItem("nameKey")} description={localStorage.getItem("descKey")} />
        </Card>
        {/* plant profile modal (hidden at first) */}
        {selectedPlantModal.isVisible && selectedPlantModal.plant && (
                <NewPlantProfile
                    selectedPlantModalVisible={selectedPlantModal.isVisible}
                    toggleNewPlantProfVisi={toggleNewPlantProfVisi}
                    selectedPlantModalPlant={selectedPlantModal.plant}
                    onClose={() => setSelectedPlantModal({ ...selectedPlantModal, isVisible: false })}
                />
            )}
        </a> 
        </>
    );
};

export default PlantOfTheDay;