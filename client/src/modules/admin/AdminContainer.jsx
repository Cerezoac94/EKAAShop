import { useNavigate } from "react-router-dom";
import CreateProduct from "./components/product/CreateProduct";
import CategoryMap from "./components/category/CategoryMap";
import Accordion from "react-bootstrap/Accordion";
import CreateCategory from "./components/category/CreateCategory";
import CreateState from "./components/state/CreateState";
import ProductMap from "./components/product/ProductMap";
import StateMap from "./components/state/StateMap";

const AdminContainer = () => {
  const navigate = useNavigate()
  return (
    <section className="accordion_section">
    <Accordion className="acordeon" defaultActiveKey={0}>
      <Accordion.Item className="panel__item" eventKey="0">
        <Accordion.Header>Categorias</Accordion.Header>
        <Accordion.Body>
          <CreateCategory />
          <section className="formAdminProduct">
            <h3>Todas las Categorias</h3>
            <CategoryMap />
          </section>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="panel__item" eventKey="1">
        <Accordion.Header>Estados</Accordion.Header>
        <Accordion.Body>
          <CreateState />
          <section className="formAdminProduct">
            <h3>Estados de la Republica</h3>
            <StateMap />
          </section>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="panel__item" eventKey="2">
        <Accordion.Header>Productos</Accordion.Header>
        <Accordion.Body>
          <CreateProduct />
          <section className="formAdminProduct">
            <h3>Productos</h3>
                <section className="product_list">
                <ProductMap />
                </section>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <button className="prop__button" onClick={() => {navigate("orders_list")}}>View orders</button>
    </section>
  );
};

export default AdminContainer;
