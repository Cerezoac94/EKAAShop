import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Orders } from "./orders";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const OrderList = ({ data, handleChange }) => {
  return (
    <Container fluid className="orders_list_container">
      <Container fluid className="list_header_container">
        <Form.Control
          type="search"
          aria-label="search"
          onChange={handleChange}
          className="input_search_order"
          placeholder="order, name"
        />
        <select name="select" className="status_filter">
          <option value="value1">Complete</option>
          <option value="value2" selected>
         In Progress
          </option>
          <option value="value3">Sent</option>
        </select>
      </Container>
      <Table hover responsive="xl" className="table_container"> {/* responsive = "sm" */}
        <tbody className="table_body">
          <tr>
            <th>Order #</th>
            <th>Bill name</th>
            <th>Subtotal</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

          {data.map((item) => (
            <tr key={item.order_id}>
              <td>{item.order_id}</td>
              <td>{item.bill_name}</td>
              <td>$ {item.subtotal}</td>
              <td>{item.status}</td>
              <td className="buttons_container">
                <button className="view_order_btn">View</button>
                <button className="shipped_order_btn">Shipped</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderList;
