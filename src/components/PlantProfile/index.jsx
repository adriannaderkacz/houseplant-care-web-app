import React, { useState } from 'react';
import { Tabs, Divider, Space, Tag, Button, Modal } from 'antd';

// todo: capitalise name of plant


function PlantProfile({ selectedPlantModalVisible, selectedPlantModalPlant, onClose }) {
  console.log(selectedPlantModalVisible)
  console.log(selectedPlantModalPlant)
  
  let plantData = selectedPlantModalPlant;
  
  // const [open, setOpen] = useState(false); 
  const isIndoor = "Indoor";
  
  const handleClose = () => {
    onClose();    
  };
  
  // const onChange = (date, dateString) => {
    //   console.log(date, dateString);
    // };
    
    // todo: function to render   "maintenance": "Low", tag
    // todo: function to render indoor/outdoor tag - magenta
    // todo: function to render is pet friendly tag
    function renderIsIndoorTag() {
      return (
        <Tag bordered={false} color="success">
      {isIndoor}
      </Tag>
    )
  }
  
  return (
    <>

    <Modal
    
    title={plantData.common_name}
    centered
    open={selectedPlantModalVisible}
    onCancel={handleClose}
    width={1000}
    footer={[
      <Button key="submit" type="primary" onClick={handleClose}>
        Close
      </Button>,
    ]}
    >

    <img src={plantData.default_image.small_url} alt={`Picture of ${plantData.common_name} plant`} style={{ maxWidth: '100%' }} />

    <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: 'Basic Overview',
            key: '1',
            children: 
            (<div>
              <p>Indoor: {plantData.indoor}</p> 
              <p>Maintennace: {plantData.maintenance}</p> 
              <p>Watering: {plantData.watering}, every {plantData.watering_general_benchmark.value} {plantData.watering_general_benchmark.unit}</p>
              <p>Sunlight: {plantData.sunlight}</p> 
              <p>Cycle: {plantData.cycle}</p> 
              <p>Origin: {plantData.origin}</p>
              <p>Description: {plantData.description}</p>
            </div>),
          },
          {
            label: 'Growth & care',
            key: '2',
            children: (
              <div>
                <h4>Care</h4>
                <p>Hardiness: {plantData.hardiness.min} - {plantData.hardiness.max}</p>
                <p>Best watering period: {plantData.watering_period ? plantData.watering_period : "n/a"}</p>
                <p>Tropical: {plantData.tropical}</p>

                <h4>Growth</h4>
                <p>Cycle: {plantData.cycle}</p> 
                <p>Flowering season: {plantData.flowering_season}</p>
                <p>Growth rate: {plantData.growth_rate}</p>

                <p>Recommended pruning month: {plantData.pruning_month}</p> 
                <p>Proppogationg: {plantData.propagation} </p> 
              </div>
            )
          },
          {
            label: 'Additional info',
            key: '3',
            children: (
              <div>
                <p>Scientific name: {plantData.scientific_name}</p> 
                <p>Family: {plantData.family}</p>
                <p>Type: {plantData.type}</p> 


              </div>
            )
          }
        ]}
        />
      <p></p>


    </Modal>
    
    <Divider />
    <Space size={[0, 'small']} wrap>

      <Tag bordered={false} color="magenta">
        magenta
      </Tag>
      <Tag bordered={false} color="geekblue">
        geekblue
      </Tag>

    </Space>
    </>

  );
}

export default PlantProfile;