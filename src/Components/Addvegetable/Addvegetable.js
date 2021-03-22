import React, { useState } from 'react';
import './Addvegetable.css';


const Addvegetable = (props) => {
    const [data, setData] = useState({})



    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, data, { [name]: value })
        setData(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewVegetable(data);
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-4'>
                    <div className='vegetables'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label htmlFor="vegetableName">Vegetable Name</label>
                                <input type="text" required className="form-control" onChange={handleChange} name='vegetablename' id="vegetableName" placeholder="Enter Vegetable Name"></input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="quantity">Quantity Grams</label>
                                <input type="number" required className="form-control" onChange={handleChange} name='quantity' id="quantity" placeholder="Enter Quantity"></input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="price">Price</label>
                                <input type="number" required className="form-control" onChange={handleChange} name='price' id="price" placeholder="Enter Price"></input>
                            </div>
                            <button type="submit" onClick={props.cover} className="btn btn-danger mt-3">Cancel</button>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3 blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addvegetable