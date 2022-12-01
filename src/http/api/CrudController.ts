import { Request, Response } from "express"
import mongoose from "mongoose";

const isModelCrud = async (crud:any) => {
    return(await require('@models/' + crud))?.default
}

export class CrudController {
    static async get(req:any, res:any){
        res.status(200).json('hello')
    }
    
    static async insert(req:Request, res:Response){
        let query: any = null;
        const model = await isModelCrud(req.params.crud)
        console.log(model)
        const data = req.body.data ? req.body.data : null;
        if(model !== null ){
            query = await model.insertMany({...data})
                .then((response: any) => {return response})
                .catch((err:any) => {console.log(err)})
        }
        res.status(200).json('Acessando nova rota')
    }
}