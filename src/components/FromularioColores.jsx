import { Button, Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import ItemColor from "./ItemColor";


const FromularioColores = () => {
    const [color, setColor]= useState('');
    const coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || []
    const [colores, setColores]= useState(coloresLocalStorage);
    const borrarColor = (nombreColor)=>{
        const copiaColor =colores.filter((color)=> color!== nombreColor);
        setColores(copiaColor);
    }

    useEffect(
        ()=> {
            localStorage.setItem('listaColores', JSON.stringify(colores))
        },[colores]
    )

    const handleSubmit = (e)=> {
        e.preventDefault()
        setColores([...colores, color])
        setColor('')
    }
    
  return (
   
   <Container>
    <Form onSubmit={handleSubmit}>
    
        <Form.Group
          className="mb-3 d-flex"
        >
          <Form.Label><h5>Enter a color:</h5></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Blue "
            minLength={3}
            maxLength={10}
            onChange={(e)=> setColor (e.target.value)}
            value={color}
                     
          />
          <Button className="mx-2" type="submit" variant="info">
            Accept
          </Button>
        </Form.Group>
        
      </Form>
      <ItemColor colores={colores} borrarColor={borrarColor}></ItemColor>
     
      </Container>
   
   
  );
};

export default FromularioColores;
