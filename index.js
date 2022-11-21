const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT;

// Where we will keep books
let books = [];

app.use(cors());


app.use(express.json());

app.get('/mascotas', (req, res) => {
    return res.json(
        {
            data:[
                {
                    nombre:"Pelusa",
                    tipo:"Gato",
                    pais:"Mexico",
                    color:"Amarillo",
                    propietario:"Rachel Cervantes"
                },
                {
                    nombre:"coffe",
                    tipo:"Perro",
                    pais:"Mexico",
                    color:"cafe",
                    propietario:"Mariana Palacios"
                },
                {
                    nombre:"Rosa",
                    tipo:"Perro",
                    pais:"Mexico",
                    color:"Rosa",
                    propietario:"Karen Martinez"
                }
               
            ]
        }
        );
    // We will be coding here
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));