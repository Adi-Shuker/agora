import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { addItems } from "./Inventory/InventorySlice";
import { useDispatch } from "react-redux";

export default function AddItem() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <>
            <div>
                <Container className="shadow-sm p-2 m-3 bg-white rounded mx-auto">
                    <Col xs lg="5">
                        <Row>
                            <InputGroup className="m-3">
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="item name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup className="m-3">
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="item price"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            alert("Only digits are allowed");
                                        }
                                    }}
                                    onChange={(e) => {
                                        setPrice(parseInt(e.target.value));
                                    }}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup className="m-3">
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="item amount"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            alert("Only digits are allowed");
                                        }
                                    }}
                                    onChange={(e) => {
                                        setAmount(parseInt(e.target.value));
                                    }}
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <Button
                                    type="submit"
                                    variant="success"
                                    onClick={() =>
                                        dispatch(
                                            addItems({ name, price, amount })
                                        )
                                    }
                                >
                                    Add Item
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    );
}
