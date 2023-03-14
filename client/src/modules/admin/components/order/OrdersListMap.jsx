import React, { useState } from 'react'
import OrderList from './OrdersList'
import { useGetAllOrdersQuery } from '../../../../redux/service/order.service';


const OrdersListMap = () => {
  const { data:results = [], isLoading, error } = useGetAllOrdersQuery()
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState("");
  
  const handleSearch = (e) => {
    setQuery(e.target.value)
  }
  const handleSelect = (e) => {
    setSelect(e.target.value)
    console.log(e.target.value);
  }

  const searchDate = (data) => {
    return data.filter((item) => new Date(item.orderDate).toLocaleDateString().toLowerCase().includes(query))
  };

  const searchShipment = (data) => {
    return data.filter((item) => item.shipmentState.toLowerCase().startsWith(select))
  };
  if(!error) {
  return !isLoading && ( <OrderList data = {searchDate(searchShipment(results.results))} handleSearch={handleSearch} handleSelect={handleSelect} />
  )
  }
}

export default OrdersListMap
