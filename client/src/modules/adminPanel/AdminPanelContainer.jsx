import React from "react";
import Product from "./components/product/CreateProduct";
import CategoryMap from "./components/category/CategoryMap";
import Accordion from "react-bootstrap/Accordion";
import CreateCategory from "./components/category/CreateCategory";
import CreateState from "./components/state/CreateState";
import ProductMap from "./components/product/ProductMap";
import StateMap from "./components/state/StateMap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AdminPanelContainer = () => {
  return (
    <Accordion className="acordeon" defaultActiveKey={0}>
      <Accordion.Item className="panel__item" eventKey="0">
        <Accordion.Header>Categorias</Accordion.Header>
        <Accordion.Body>
          <CreateCategory />
          <section>
            <h3>Todas las Categorias</h3>
            <CategoryMap />
          </section>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="panel__item" eventKey="1">
        <Accordion.Header>Estados</Accordion.Header>
        <Accordion.Body>
          <CreateState />
          <section>
            <h3>Estados de la Republica</h3>
            <StateMap />
          </section>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="panel__item" eventKey="2">
        <Accordion.Header>Productos</Accordion.Header>
        <Accordion.Body>
          <Product />
          <section>
            <h3>Productos</h3>
            <DropdownButton title="Lista de Productos">
              <Dropdown.Item>
                <ProductMap />
              </Dropdown.Item>
            </DropdownButton>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AdminPanelContainer;
