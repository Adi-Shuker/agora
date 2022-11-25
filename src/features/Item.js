import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { buyItem } from "./Inventory/InventorySlice";
import { useDispatch } from "react-redux";

export default function Item({ name, price, maxAmount }) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={2}>
                        <p className="m-0">{name}</p>
                    </Col>
                    <Col xs={2}>
                        <p className="m-0">{price}$</p>
                    </Col>
                    <Col xs={2}>
                        <p className="m-0">{maxAmount}</p>
                    </Col>
                    <Col xs={2}>
                        <Button
                            className="m-1"
                            variant="light"
                            aria-label="Decrement value"
                            onClick={() => {
                                if (amount > 0) {
                                    setAmount(amount - 1);
                                }
                            }}
                        >
                            -
                        </Button>
                        <span>{amount}</span>
                        <Button
                            className="m-1"
                            variant="light"
                            aria-label="Increment value"
                            onClick={() => {
                                if (amount < maxAmount) {
                                    setAmount(amount + 1);
                                }
                            }}
                        >
                            +
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            className="mb-2"
                            variant="success"
                            onClick={() => dispatch(buyItem({ name, amount }))}
                        >
                            Buy Item
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
