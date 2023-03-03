import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ListCart = () => {
  return (
    <section className="listCart">
      <Card border="primary" className="card">
        <Card.Body>
          <Card.Text>
            <h2>
              Subtotal: <span>$980.00</span>
            </h2>
            <div>
              {" "}
              <button className="listCart__btn">Proceed to checkout </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" className="card">
        <Card.Header>Header</Card.Header>

        <Card.Body>
          <Card.Img variant="top" src="holder.js/100px160" />
          {/*   <Card.Title>Primary Card Title</Card.Title> */}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card__footer">
          <div className="card__containerBtn">
            <button>-</button>
            <input type="text" />
            <button>+</button>
          </div>

          <div className="card__btn">
            <div>
              {" "}
              <button className="btn">delete</button>
            </div>
            <div>
              <button className="btn">Safe for later</button>
            </div>
          </div>

          {/* 
          <small className="text-muted">Last updated 3 mins ago</small> */}
        </Card.Footer>
      </Card>
    </section>
  );
};

export default ListCart;
