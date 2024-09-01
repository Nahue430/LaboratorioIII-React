import {Form, InputGroup, Button} from 'react-bootstrap';
import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const validateUsername = () =>{
        
        if (!username.trim() || /\s/.test(username) ){ //trim valida que el input no este vacio. /\s/ valida que el usuario no ponga espacios vacios en toda la cadena 
            alert("Nombre de usuario inválido");
            return false;
        }
        if (username.includes('o') || username.includes('O') ) { //includes verifica el array y entre () si contiene el valor que queres evaluar
            alert('El nombre de usuario no debe contener las letras "o" u "O"');
            return false;
        }
        return true;
    };

    const handlerRegister = () => { // acá se registra el usuario, previamente validando los anteriores y lo registra
        if (validateUsername()) {
          alert('¡Usuario registrado correctamente!');
        }
      };

      return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text style={{ margin: '15px' }} id="basic-addon2">
                    Ingrese su nombre de usuario
                </InputGroup.Text>
                <Form.Control
                    placeholder="Nombre de usuario"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </InputGroup>
            <Button
                style={{ margin: '15px' }}
                variant="primary"
                onClick={handlerRegister} 
            >
                Registrarse
            </Button>
            <p>Valor ingresado: {username}</p> {}
        </>
    );
}

export default Login