import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import CategoryMap from "../category/CategoryMap";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <div className="card-header">
        <div className="text-header">Crear Producto</div>
      </div>
      <div className="card-body">
        <form action="#">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" required="" className="form-control" />
          </div>
          <div className="form-group">
            <label>Descripcion:</label>
            <input type="text" required="" className="form-control" />
          </div>
          <div className="form-group">
            <label>price:</label>
            <input
              type="text"
              required=""
              className="form-control"
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label>Stock:</label>
            <input type="text" required="" className="form-control" />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <DropdownButton id="category" title="Seleccionar">
              <Dropdown.Item href="#/action-1">
                <CategoryMap/>
              </Dropdown.Item>
            </DropdownButton>
            {/* <input type="text" required="" className="form-control" /> */}
          </div>
          <div className="form-group">
            <label>Imagen:</label>
            <input type="file" required="" className="form-control" />
          </div>
          <div className="form-group">
            <label>Descuento:</label>
            <input type="text" required="" className="form-control" />
          </div>
          <button className="btn">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
