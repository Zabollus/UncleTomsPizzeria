import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap"

function Pizza({pizza}) {
    return (
        <Col>
            <Card className='shadow-sm rounded m-3 p-2'>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    Mała: {pizza.price_small}<br/>
                    Średnia: {pizza.price_medium}<br/>
                    Duża: {pizza.price_large}<br/>
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