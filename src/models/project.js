import { Schema, model, models } from "mongoose";
const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 100,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    demoUrl: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    githubUrl: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
    },
    tags: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default models.Project || model("Project", projectSchema);