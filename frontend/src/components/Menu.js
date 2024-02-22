import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Pizza({pizza}) {
    return (
        <Col>
            <Card className='shadow-sm rounded m-3 p-2'>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    <ul>
                        {pizza.toppings.map((topping) => {
                            return <li key={topping.id}>{topping.name}</li>
                        })}
                    </ul>
                    <br/>
                    Mała: {pizza.price_small} <Button>Zamów</Button> <br/>
                    Średnia: {pizza.price_medium} <Button>Zamów</Button> <br/>
                    Duża: {pizza.price_large} <Button>Zamów</Button> <br/>
                </Card.Text>
            </Card>
        </Col>
    )
}

function Menu() {
    const [pizzas, setPizzas] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:8000/pizzas/')
            const data = await response.json()

            setPizzas(data);
        }

        fetchData();
    }, []);
    return (
        <>
            {!pizzas && <h1>Ładowanie...</h1>}
            {pizzas && <Container className='my-3'>
                <Row>
                    {pizzas.map((pizza) => {
                        return <Pizza key={pizza.id} pizza={pizza} />
                    })}
                </Row>
            </Container>}
        </>
    )
}

export default Menu;