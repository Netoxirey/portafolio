import { Schema, model, models } from "mongoose";

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 100,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default models.Skill || model("Skill", skillSchema);