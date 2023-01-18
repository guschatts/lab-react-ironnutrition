import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodData, setFoodData] = useState(foodsJSON);
  const [foods, setFood] = useState(foodsJSON);

  const [filtered, setFiltered] = useState('')


  const addNewFood = (newFood) => {
    const updatedFoodData = [...foodData, newFood];
    const updatedFood = [...foods, newFood];
  
    setFoodData(updatedFoodData);
    setFood(updatedFood);
  }

  const filteredFoods = foods.filter((food) => {
    return food.name.includes(filtered());
  });


  const handleSearchChange = function (search) {
    setFiltered(filteredFoods);
  };

  

  function deleteItem(name) {
    const filteredFoods = foods.filter((item) => {
      return item.name !== name;
    });
    setFood(filteredFoods);
  };
  




  return (
    <div className="App">
    <AddFoodForm addNewFood={addNewFood} />
    
    <Search handleSearchChange={handleSearchChange}
    setFiltered={setFiltered} />

    <Divider> <h1>Food List</h1></Divider>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {filteredFoods.map((food) => {
      return (
        <FoodBox food={food} deleteItem={deleteItem} />
       
    
      );
    })}

    </Row>
  
   </div>

  );
};

export default App;
