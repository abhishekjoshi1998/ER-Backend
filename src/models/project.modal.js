import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    description: { type: String },
    type: { type: String, required: true, enum: ["erd", "sd"], default: "erd" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    nodes: { type: mongoose.Schema.Types.Mixed, default: [] }, 
    edges: { type: mongoose.Schema.Types.Mixed, default: [] },
    tables: [
        {
            name: { type: String, required: true },
            columns: [
                {
                    name: { type: String, required: true },
                    type: { type: String, required: true },
                }
            ],
            comments: [String],  
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;
