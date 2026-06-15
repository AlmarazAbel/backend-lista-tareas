import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default class Server {
    constructor(){
        //inicializar las propiedades
        this.app =express()
        this.PORT = process.env.PORT || 3000;
    }

    //definir metodos
    listen(){

        this.app.listen(this.PORT,()=>{
            console.log(`servidor activo en el puerto :http://localhost:${this.PORT}`);
        })
    }
}