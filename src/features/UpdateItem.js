import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { updateItemPrice } from "./Inventory/InventorySlice";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateItem() {
    const { items } = useSelector((state) => state.inventory);
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");

    return (
        <>
            <div>
                <Container className="shadow-sm p-2 m-3 mx-auto bg-white rounded">
                    <Col xs lg="5">
                        <Row>
                            <Form.Select
                                className="m-4"
                                value={itemName}
                                onChange={(e) => {
                                    setItemName(e.target.value);
                                }}
                            >
                                <option>choose item</option>
                                {Object.keys(items).map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3 ms-3">
                                <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="update price"
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
                            <Col xs={3}>
                                <Button
                                    type="submit"
                                    variant="success"
                                    onClick={() =>
                                        dispatch(
                                            updateItemPrice({
                                                name: itemName,
                                                price,
                                            })
                                        )
                                    }
                                >
                                    update
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    );
}
