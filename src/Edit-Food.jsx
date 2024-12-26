import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditFood({data}) {
    const { id } = useParams();

    // lay index phan tu chua id
    const index = data.map((f) => f.id).indexOf(id);

    // tra ve phan tu can index
    const item = data[index];

    // ---------------------------------------------
    
    const [active, setActive] = useState(false);

    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);

    const [errorName, setErrorName] = useState("");
    const [errorPrice, setErrorPrice] = useState("");

    const nav = useNavigate();

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

        // setName(valName); // Cập nhật trạng thái
        
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

        // setPrice(valPrice); // Cập nhật trạng thái
        
    }

    const submitAdd = (event) =>
    {
        event.preventDefault();

        if(name === "" || price === "")
        {
            alert("All field must be required");
            setActive(true);          
        }

        else{
            item.name = name;
            item.price = price;

            alert("Edit food successfully");

            //chuyen ve trang FoodList
            nav("/food");

        }       
    }
    return ( 
        <div className='container__addFood'>
            <h1>Edit Food</h1>

            <form action="" onSubmit={submitAdd}>
                ID: <br />
                <input type="text" name="id" pattern="^F\d{2}$" title="Format: FXX" value={id}
                    readOnly
                /> 
                <br />

                Name: <br />
                <input type="text" name="name" onChange={checkName} value={name}/> 
                <span>{errorName}</span>
                <br />

                Price: <br />
                <input type="text" name="price" onChange={checkPrice} value={price}/> 
                <span>{errorPrice}</span>
                <br />

                <input className='btn' type="submit" value="Edit" disabled={active}/>
            </form>
        </div>
     );
}

export default EditFood;