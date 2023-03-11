import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import stanley from "../../../../assets/stanley_tumbler.svg";

const OrdernAdminView = ({ order }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="view_order_btn">
        View
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <label htmlFor="modal_header_title">Order Number: 4534534</label>
            <label htmlFor="modal_header_date" className="modal_header_date">Order created: 2023-03-11</label>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table hover responsive="xl" className="table_container">
            <tbody className="table_body">
              <tr className="table_header">
                <th className="item_sumary">Item Sumary</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
              <tr>
                <td colSpan={2} className="order_image_container">
                  <Image src={stanley} className="image_order_detail" />
                  <label className="order_item_name">
                    Stanley Quencher 40oz
                  </label>
                </td>
                <td className="order_item_container"> 1 </td>
                <td className="order_item_container">$ 350</td>
              </tr>
            </tbody>
          </Table>
          <Table hover responsive="xl"className="table_container customer_details">
            <tbody className="table_body">
            <tr className="table_header">
                <th className="item_sumary">Customer and Order details</th>
              </tr>
              <tr className="order_details_container">
                  <td className="order_label_detail">
                    <label htmlFor="order_title_item">Customer name</label>
                    <label htmlFor="order_title_item">Ana Cecilia Sánchez Covarrubias</label>
                  </td>
              </tr>
              <tr className="order_details_container">
                  <td className="order_label_detail">
                    <label htmlFor="order_title_item">Contact info</label>
                    <label htmlFor="order_title_item">8293847598</label>
                  </td>
              </tr>
              <tr className="order_details_container">
                  <td className="order_label_detail">
                    <label htmlFor="order_title_item">Address</label>
                    <label htmlFor="order_title_item" className="order_address_label">Galean 345, Antonio I Villarreal, Monterrey, Nuevo León, México</label>
                  </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="view_order_btn">
           Mark as complete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrdernAdminView;
