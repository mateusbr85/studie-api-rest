import { Request, Response } from "express"
import mongoose from "mongoose";

const isModelCrud = async (crud:any) => {
    try {
        const istancedClass = (await require('@models/' + crud))?.default;
        return istancedClass
    }catch (e:any) {
        console.error('message :',e.message);
        return null
    }
}

const responseFuntion = async function (value: any = null, res:Response, message = "Realizado com successo") {
    if ((value !== null) || (value > 0)) {
        return res.status(200).json({ response: value, message: message })
    } else {
        return res.status(203).json({ message:  message !== "Realizado com successo" ? message : 'Parametro invalido' })
    }
}

export class CrudController {
    static async get(req:any, res:any){
        const {crud,id}:any = req.params
        let query: any = null;
        console.log({crud},{id})
        const model = await isModelCrud(req.params.crud);

        if(model !== null && id ){
            query = await model.findOne({ _id: id})
                .then((response: Array<any>) => {return response})
                .catch((err:any) => {console.log(err)})

            await responseFuntion(query,res);
            return;
        }

        return await responseFuntion(query,res)
    }
    
    static async insert(req:Request, res:Response){
        let query: any = null;
        const model = await isModelCrud(req.params.crud);
        const data = req.body.data ? req.body.data : null;

        if(model !== null ){
            query = await model.insertMany({...data})
                .then((response: Array<any>) => {return response})
                .catch((err:any) => {console.log(err)})

            await responseFuntion(query,res,'Criado com Sucesso!')
            return 
        }

        return await responseFuntion(query,res,'Model não encontrada!')
    }

    static async update(req:Request, res:Response){
        const id  = req.body.id;
        let query: any = null;
        const model = await isModelCrud(req.params.crud);
        const data = req.body.data ? req.body.data : null;

        if(model !== null) {
            if(id){
                query = await model.findOneAndUpdate({ _id: id }, data, {
                    new: true,
                })
                    .then((response: any) => { return response })
                    .catch((err: any) => { return err})
                responseFuntion(query,res);
                return;
            }
            return await responseFuntion(query,res,'ID não fornecido!');
        }
        return await responseFuntion(query,res,'Model não encontrada!');
    }

    static async delete (req:Request, res:Response){
        const id  = req.params.id;
        let query: any = null;
        const model = await isModelCrud(req.params.crud);

        if(model !== null) {
            if(id){
                query = await model.deleteOne({ _id: id})
                    .then((response: any) => { return response })
                    .catch((err: any) => { return err})
                    await responseFuntion(query,res,'Deletado com Sucesso!')
                return;
            }
            return await responseFuntion(query,res,'ID não fornecido!');
        }
        return await responseFuntion(query,res,'Model não encontrada!');
    }
}