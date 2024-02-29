import { React, useState } from 'react';
import { Button, Input, Select, Space } from 'antd';
import { Divider, List, Typography, Checkbox } from 'antd';

const TaskList = () => {

    const [toDos, setToDos] = useState([
        'Re-pot pothos',
        'Clean dust off leaves of weeping fig tree',
        'Give peace lily fertilizer'
    ]);

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
    setInputValue(e.target.value);
}

    const handleSave = () => {
        if (inputValue.trim() !== '') {
            setToDos([...toDos, inputValue]);
            setInputValue('')
        }
    }

    const onChange = (e, i) => {
        if (e.target.checked === true) {
            const updatedToDos = [...toDos];
            updatedToDos.splice(i, 1);
            setToDos(updatedToDos);
            checked === false;
        }
    };

return (
<>
        <Divider orientation="left">Plant Tasks</Divider>
        <Space.Compact style={{ width: '100%' }}>

            <Input 
            placeholder="Add a task here..." 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}/>

            <Button type="primary" onClick={handleSave}>Save task</Button>
        </Space.Compact>
        <List style={{width: '100%'}}
            bordered
            dataSource={toDos}
            renderItem={(item, i) => (
                <List.Item>
                    <Typography.Text mark>- </Typography.Text> {item}
                    <Checkbox value={item} onChange={(e) => onChange(e, i)} />
                </List.Item>
            )}
        />
</>
)
}

export default TaskList