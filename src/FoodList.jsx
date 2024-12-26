import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodList({data}) {
    const nav = useNavigate();

    const [sProduct, setsProduct] = useState("");
    
    const [reData, setReData] = useState(data);

    const searchProduct = () => {
        const newData = data.filter((item) => item.name.toLowerCase().search(sProduct.toLowerCase()) !== -1);
        // newData = data.filter((item) => item.id.toLowerCase().search(sProduct.toLowerCase()) !== -1);
        // newData = data.filter((item) => item.price.search(sProduct) !== -1);

        // console.log(`newData : ${newData}`); 
        setReData(newData);
    }

    // delete by id
    const deleteById = (itemId) => {
        if (window.confirm(`Are you sure to delete this food ?`)) {

            // tao ra array moi chi bao gom id
            let newDataID = reData.map((f) => f.id)

            // console.log(newDataID) // {"FO1", "FO2", "FO3", "F04"}

            // tim vi tri cua phan tu can xoa
            let index = newDataID.indexOf(itemId);

            // alert(`index: ${index}`)

            // xoa phan tu tai vi tri index
            reData.splice(index, 1);
            
            // console.log(reData);

            // set lai gia tri cho reData
            setReData(reData);

            nav("/food");
        }
    }
    

    return ( 
        <div>
            <h1 style={{textAlign: "center"}}>Food List</h1>

            {/* Search by Name */}
            <div className="box">
                <input type="text" name="searchName" placeholder="Enter food name" 
                    onChange={(e) => setsProduct(e.target.value)}/>
                <button onClick={searchProduct}>Search</button>
            </div>
           
            <table border={2} cellPadding={8}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reData.map((f, index)=>
                        <tr key={index}>
                            <td>{f.id}</td>
                            <td>{f.name}</td>
                            <td>{f.price}</td>
                            <td>
                                <button onClick={() => nav(`/edit/${f.id}`)}>Edit</button>
                                <button onClick={() => deleteById(f.id)}>Delete</button>
                            </td>
                        </tr>                       
                    )}
                </tbody>
            </table>
        </div>
     );
}

export default FoodList;