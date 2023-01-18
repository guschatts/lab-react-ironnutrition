import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        props.addFood(newFood);     
};

return (
    <form onSubmit={handleSubmit}>
        <Divider> Add Food Entry </Divider>

        <label> Name </label>
        <Input value={name} type="text" onChange={(e) => setName(e.target.value) } />

        <label> Image </label>
        <Input value={image} type="text" placeholder='Image URL' onChange={(e) => setImage(e.target.value)} />

        <label> Calories </label>
        <Input value={calories} type="text" onChange={(e) => setCalories(e.target.value)} />

        <label> Servings </label>
        <Input value={servings} type="text" onChange={(e) => setServings(e.target.value)} />

        <Button type="primary" Type="submit"> Create </Button>

    </form>
);

}
export default AddFoodForm;