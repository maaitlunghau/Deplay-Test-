import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddFood({data}) {
    const [active, setActive] = useState(false);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [errorId, setErrorId] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorPrice, setErrorPrice] = useState("");

    const nav = useNavigate();

    const checkId = (event) => {
        const valId = event.target.value;

        if(valId === "")
        {
            setErrorId("Id must be required");
        }
        else{
            setId(valId);
            setActive(false);
        }
        
    }

    const checkName = (event) => {
        const valName = event.target.value;

        if(valName === "")
        {
            setErrorName("Name must be required");
        }
        else{
            setName(valName);
            setActive(false);
        }
        
    }

    const checkPrice = (event) => {
        const valPrice = event.target.value;
        
        if(valPrice === "")
        {
            setErrorPrice("Price must be required");
        }
        else{
            setPrice(valPrice);
            setActive(false);
        }
        
    }

    const submitAdd = (e) =>
    {
        e.preventDefault();

        if(id === "" || name === "" || price === "")
        {
            alert("All field must be required");
            setActive(true);          
        }

        else{
            //tao doi tuong Food moi
            let newFood = {"id": id, "name": name, "price": price};
            //them vao ds
            data.push(newFood);

            alert("Add food successfully");

            //chuyen ve trang FoodList
            nav("/food");

        }       
    }
    return ( 
        <div className='container__addFood'>
            <h1>Add New Food</h1>

            <form action="" onSubmit={submitAdd}>
                ID: <br />
                <input type="text" name="id" pattern="^F\d{2}$" title="Format: FXX" 
                    onChange={checkId}
                /> 
                <span style={{color: "red"}}>{errorId}</span>
                <br />

                Name: <br />
                <input type="text" name="name" onChange={checkName} /> 
                <span>{errorName}</span>
                <br />

                Price: <br />
                <input type="text" name="price" onChange={checkPrice} /> 
                <span>{errorPrice}</span>
                <br />

                <input className='btn' type="submit" value="Add" disabled={active}/>
            </form>
        </div>
     );
}

export default AddFood;