import Nota from '../models/Nota.js'

const myNote = new Nota;

export const createNota = async (req, res, next) => {
    try{
        const noti = new myNote (req.body)
        await  myNote.save()
        res.send(myNote)
    }catch (error){
        throw new Error('no se pudo guardar la nota en la base de dato' + error)
    }
}

export const verNotas = async (req, res, next) => {
    try{
        const notas  = await myNote.find()
        res.json(notas)
    }catch{
        res.status(500).send('error')
    }
} 


