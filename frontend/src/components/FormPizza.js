import React, {useState, useEffect} from 'react'
import {Container, Row, Form, Button, InputGroup} from 'react-bootstrap'

const DEFAULT_FORM_STATE = {name: '', price_small: '', price_medium: '', price_large: '', toppings_id:[]}

function FormPizza(props) {
    const [form, setForm] = useState(DEFAULT_FORM_STATE)
    const [toppings, setToppings] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:8000/toppings/')
            const data = await response.json()

            setToppings(data);
        }

        fetchData();
    }, []);

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSelectedMultiple = e => {
        const values = [...e.target.selectedOptions].map(option => option.value);
        setForm(prevState => {
            return {
                ...prevState,
                toppings_id: values
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        let url = 'http://localhost:8000/pizzas/'
        fetch(url, {
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(form)
        }).then((response) => {
            console.log('Udało się dodać pizzę')
        }).catch(function(error){
            console.log(error);
        })
    }

    return (
        <Container className='my-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup className='m-2'>
                        <Form.Label className='m-1 w-25'>Nazwa:</Form.Label>
                        <Form.Control type='text' name='name' value={form.name} onChange={handleChange}/>
                    </InputGroup>

                    <InputGroup className='m-2'>
                        <Form.Label className='m-1 w-25'>Ceny:</Form.Label>
                        <Form.Control placeholder='Mała' type='number' name='price_small' value={form.price_small} onChange={handleChange}/>
                        <Form.Control placeholder='Średnia' type='number' name='price_medium' value={form.price_medium} onChange={handleChange}/>
                        <Form.Control placeholder='Duża' type='number' name='price_large' value={form.price_large} onChange={handleChange}/>
                    </InputGroup>

                    <InputGroup className='m-2'>
                        <Form.Label className='m-2'>Składniki</Form.Label>
                        <Form.Select multiple name='toppings_id' value={form.toppings_id} onChange={handleSelectedMultiple}>
                        {toppings.map((topping) => {
                            return <option value={topping.id} key={topping.id}>{topping.name}</option>
                        })}
                        </Form.Select>
                    </InputGroup>
                    <Button type='submit' variant='primary'>Dodaj pizzę</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default FormPizza;