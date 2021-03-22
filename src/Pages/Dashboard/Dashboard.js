import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Jsondata } from '../Dashboard/jsondata';
import Addvegetable from '../../Components/Addvegetable/Addvegetable';

const Dashboard = (props) => {


    const [showVegetableForm, setShowVegetableForm] = useState(false)
    const [isAsc, setisAsc] = useState(false)
    const [isSearch, setSearch] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [vegetables, setVegetables] = useState([])
    const [vegetableList, setVegetableList] = useState([])

    const viewVegetableForm = () => {
        setShowVegetableForm(true)
    }

    const hideVegetableForm = () => {
        setShowVegetableForm(false)
    }


    const handleClick = (data) => {
        const vegetablesList = [...vegetables, data]
        setVegetables(vegetablesList);
        hideVegetableForm()
    }

    const handleChange = ({ target }) => {
        const { value } = target
        setSearch(true)
        const vegetablesList = [...vegetables].filter(ele => ele.vegetablename.includes(value))
        setVegetableList(vegetablesList);
    }

    const sortData = () => {
        setisAsc(!isAsc)
        if (isAsc) {
            const vegetablesList = [...vegetableList].sort((a, b) => +a.price - +b.price)
            return setVegetableList(vegetablesList);
        }
        const vegetablesList = [...vegetableList].sort((a, b) => +b.price - +a.price)
        setVegetableList(vegetablesList);
    }

    useEffect(() => {
        setVegetables(Jsondata)
        let veg = [...Jsondata].splice(0,10)
        setVegetableList(veg);
    }, [])

    const handleDelete = (index) => {
            let list = [...vegetableList]
            list.splice(index, 1);
            setVegetableList(list);
    }

    const handlePageClick = (index) => {
        setCurrentIndex(index)
        let veg = [...vegetables].splice((index * 10),10)
        setVegetableList(veg);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3 search mt-3 mb-3'>
                    <input type='search' onChange={handleChange} placeholder='search' name='search' ></input>
                </div>

                <div className='col-3 addItem mt-2'>
                    <button onClick={viewVegetableForm} className='btn btn-primary'>Add Item</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className='list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>So No</th>
                                    <th>Vegetables</th>
                                    <th>Quantity (Grams)</th>
                                    <th onClick={sortData}>Price <i className="fa fa-sort sort fa-2x"></i></th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        vegetableList.map((ele, index) => {
                                            return <tr key={ele.id}>
                                                <td>{index + 1}</td>
                                                <td>{ele.vegetablename}</td>
                                                <td>{ele.quantity}</td>
                                                <td>{ele.price}</td>
                                                <td><button onClick={() => handleDelete(index)} className='btn btn-danger'>Delete</button></td>
                                            </tr>
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                showVegetableForm ? <Addvegetable cover={hideVegetableForm} addNewVegetable={(data) => handleClick(data)}></Addvegetable> : ''
            }

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" onClick={() => handlePageClick(0)}>Previous</a></li>
                    {
                       Array(Math.ceil(vegetables.length/10)).fill(1).map((ele, index) => {
                        return (<li className="page-item"><a className="page-link" onClick={() => handlePageClick(index)}>{index + 1}</a></li>)
                       })
                    }
                    {
                      Math.ceil(vegetables.length/10) <= (currentIndex + 1) ? null :
                    <li className="page-item"><a className="page-link" onClick={() => handlePageClick(currentIndex+1)}>Next</a></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard