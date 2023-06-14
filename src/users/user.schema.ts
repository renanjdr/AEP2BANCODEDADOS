import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    secondName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    heigth: {
        type: Number,
        require: false
    },
    weight: {
        type: Number,
        require: false
    },
    gender: {
        type: String,
        require: true
    }
}, 
{ 
    timestamps: true 
})

export default model("users", UserSchema)