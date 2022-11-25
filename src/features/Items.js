import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

export function Items() {
    const { items } = useSelector((state) => state.inventory);

    return (
        <div>
            <Container>
                <Row className="m-4">
                    <Col xs={2}>
                        <p>Item</p>
                    </Col>
                    <Col xs={2}>
                        <p>Price</p>
                    </Col>
                    <Col xs={2}>
                        <p>Max Amount</p>
                    </Col>
                    <Col xs={2}>
                        <p>Amount</p>
                    </Col>
                </Row>
                <div>
                    <div>
                        {Object.keys(items).length > 0
                            ? Object.keys(items).map((item) => {
                                  return (
                                      <Row
                                          key={item}
                                          className="shadow-sm p-2 mb-3 bg-white rounded"
                                      >
                                          <Item
                                              name={items[item].name}
                                              price={items[item].price}
                                              maxAmount={items[item].amount}
                                          ></Item>
                                      </Row>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </Container>
        </div>
    );
}
