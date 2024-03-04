import React, { useContext, useState } from 'react';
import Calendar from '../components/Calendar'
import TaskList from '../components/TaskList';
import { ToDoContext, ToDoProvider } from '../contexts/ContextsToDos'
import WeatherWidget from '../components/WeatherWidget';
import { Row, Col } from 'antd';
import { LocationProvider, LocationContext } from '../contexts/ContextLocation'
import '../../src/index.css'
import SearchBar from '../components/SearchBar';

function WateringLog() {

    const { toDos, setToDos } = useContext(ToDoContext); 
    const { location, setLocation } = useContext(LocationContext)
    const [name, setName] = useState('');

return (
    <>
    {/* Wrap the components in the Providers */}
    <ToDoProvider>
    <LocationProvider>
    <SearchBar name={name} setName={setName}/>
        <div className="gridContainerWateringLog">
            <Calendar toDos={toDos} setToDos={setToDos} />
            <TaskList toDos={toDos} setToDos={setToDos} />
        </div>
        <WeatherWidget location={location} setLocation={setLocation}/>
        </LocationProvider>
    </ToDoProvider>
    </>
)
}

export default WateringLog;
