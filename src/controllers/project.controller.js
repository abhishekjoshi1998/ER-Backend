import Project from "../models/project.modal.js";

export const createProject = async (req, res) => {
    const { name, description, nodes, edges, userId, type, tables } = req.body;

    try {
        const project = new Project({
            name,
            description,
            owner: req.user.id,
            nodes,
            edges,
            type,
            tables: tables || [], 
        });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Failed to create project", error });
    }
};


export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user.id });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch projects", error });
    }
};


export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);  
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch project", error });
    }
};


export const updateProject = async (req, res) => {
    const { name, description, nodes, edges, tables } = req.body;

    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.projectId,
            { name, description, nodes, edges, tables },  
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: "Failed to update project", error });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete project", error });
    }
};
