import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        priority: {
            type: String,
            required: true
        },
        completed: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {timestamps: true}
)

const Task = mongoose.model("Task", taskSchema)

export default Task