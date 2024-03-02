import { Modal, DatePicker, Space } from 'antd';

// internal imports
import SearchBar from "../SearchBar";
import PlantCard from '../PlantCard';

function AddPlantModal( {addPlantModal, toggleAddPlantModal} ) {

  // plant variable for dev testing
  const plant = {
    name: "Fiddle Leaf Fig Tree",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicvOgUqADLbz5MRj1Xgn0Z-RwzLrc3ZTnyQ&usqp=CAU"
  } 


  const handleOk = () => {
    toggleAddPlantModal(false);
    // todo: function to add new plant to collection

  };

  const handleCancel = () => {
    toggleAddPlantModal(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  return (
    <>
      <Modal title="Add New Plant" 
      open={addPlantModal} 
      onOk={handleOk} 
      onCancel={handleCancel}
      okText="Add Plant">
        {/* insert SEARCH BAR here */}
        <SearchBar />

        <p>Date of collection</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>

        {/* <PlantCard plant={plant}/>  */}

      </Modal>
    </>
  );

}

export default AddPlantModal;