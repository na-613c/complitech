import React, { useEffect, useState } from 'react';
import './App.css';
import FloorPlan from './components/FloorPlan/FloorPlan';
import UserList from './components/UserList/UserList';
import { Row, Col } from 'antd';

const App = ({ floor, api }) => {
  const { getAllPeople, getImage, getToken } = api;

  const [allPeople, setAllPeople] = useState([])

  useEffect(async () => {
    await getToken()
    setAllPeople(await getAllPeople())
  }, [])

  return (
    <div className="App">
      <h1>Complitech</h1>
      <Row justify="space-between">
        <Col span={7}>
          <UserList allPeople={[...allPeople]} getImage={getImage} />

        </Col>
        <Col span={14}>
          <FloorPlan floor={floor} />
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
