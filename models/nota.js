import  {Schema,  model}  from 'mongoose' 
const MySchema = new Schema ({
    content:{
        type:String,
        required: true,
        maxlenght:40
    },
    important: {
        type:Boolean,
        required: true
    },
    date: {
        type: Date,
        defautl: Date.now()
    }
})

const NoteModal = model ("apinote" , Schema )
module.export = NoteModal