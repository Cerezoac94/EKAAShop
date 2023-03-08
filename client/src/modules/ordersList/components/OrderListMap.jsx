import React, { useState } from 'react'
import OrderList from './OrderList'
import { Orders } from './orders'


const OrderListMap = () => {

  const data = Orders;
  const [query, setQuery] = useState("");
  //console.log("Data",data);
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const search = (data) => {
    return data.filter((item) => item.bill_name.toLowerCase().includes(query))
  };

  return (
    <OrderList data = {search(Orders)} handleChange={handleChange}/>
  )
}

export default OrderListMap