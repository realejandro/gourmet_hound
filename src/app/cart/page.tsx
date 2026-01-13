import React from 'react'
import FormPickupSection from './components/FormPickupSection';

const CartPage = () => {
  return (
    <div className="grid grid-cols-2 w-[80%] m-auto">
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>
                            <button 
                                className="btn btn-primary"
                                >
                                    x
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td> 
                            <button 
                                className="btn btn-primary"
                                >
                                    x
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>
                            <button 
                                className="btn btn-primary"
                                >
                                    x
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <FormPickupSection/>
    </div>
  )
}

export default CartPage; 