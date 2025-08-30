import Task from "../models/taskModel.js";

const addTask = async(req, res) => {

    try {
        
        if(!req.body){
            return res.status(400).json({
                success: false,
                message: "Request body cannot be empty."
            })
        }

        const{title, description, priority, status} = req.body

        if(!title){
            return res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }
        if(!priority){
            return res.status(400).json({
                success: false,
                message: "Priority is required"
            })
        }
        if(!status){
            return res.status(400).json({
                success: false,
                message: "Status is required"
            })
        }

        const task = await Task.create({
            title,
            description,
            priority,
            status,
            owner: req.user?._id
        })
        
        return res.status(201).json({
                success: true,
                message: "New task created successfully",
                task
            })

    } catch (error) {
        console.log("add task: ", error)
        return res.status(500).json({
            success: false,
            message: "Somthing went wrong while creating a new task.",
        })
    }
}

const allTasks = async(req, res) => {
    try {
        
        // const tasks = await Task.find({owner: req.user?._id})

        const {status, priority} = req?.query

        const filter = {owner: req.user?._id}

        if(status !== "all") filter.status = status
        if(priority !== "all") filter.priority = priority
        
        const tasks = await Task.aggregate([
            {
                $match: filter
            },
            {
                $facet: { 
                    tasks: [
                        { $sort: { createdAt: -1} }
                    ],
                    totalTasks: [
                        { $count: "count" }
                    ],
                    pending: [ 
                        { $match: {status: "pending"} },
                        { $count: "count" } 
                    ],
                    completed: [ 
                        { $match: {status: "completed"} },
                        { $count: "count" } 
                    ],
                }
            }
        ])

        if(!tasks[0].tasks){
            return res.status(404).json({
                success: false,
                message: "Task not found.",
            })
        }

        // console.log("Aggregation => ", tasks[0].tasks)

        return res.status(200).json({
            success: true,
            message: "Tasks fetched successfully.",
            tasks: tasks[0]?.tasks,
            total: tasks[0]?.totalTasks[0]?.count || 0,
            pending: tasks[0]?.pending[0]?.count || 0,
            completed: tasks[0]?.completed[0]?.count || 0,
        })

    } catch (error) {
        console.log("all tasks: ", error)
        return res.status(500).json({
            success: false,
            message: "Somthing went wrong while fetching tasks.",
        })
    }
}

const getTask = async(req, res) => {
    try {
        const taskId = req.params?.id;
    
        if(!taskId){
            return res.status(400).json({
                success: false,
                message: "Task id is missing."
            })
        }
    
        const task = await Task.findById(taskId)
    
        return res.status(200).json({
            status: true,
            message: "Task fetched successfully.",
            task
        })

    } catch (error) {
        console.log("get task: ", error)
        return res.status(500).json({
            success: false,
            message: "Somthing went wrong while fetching a task.",
        })
    }
}

const updateTask = async(req, res) => {

    try {
    
        if(!req.body){
            return res.status(400).json({
                success: false,
                message: "Request body cannot be empty."
            })
        }

        const{title, description, priority, status} = req.body
        
        if(!title){
            return res.status(400).json({
                success: false,
                message: "Title is required"
            })
        }
        if(!priority){
            return res.status(400).json({
                success: false,
                message: "Priority is required"
            })
        }
        if(!status){
            return res.status(400).json({
                success: false,
                message: "Status is required"
            })
        }
        
        const taskId = req.params?.id;

        const task = await Task.findById(taskId)
        
        if(!task) return res.status(404).json({success: false, message: "Task not found."})
            
        if(task.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            {
                $set: {
                    title: title || task.title,
                    description: description || task.description,
                    priority: priority || task.priority,
                    status: status || task.status
                }
            },
            {new: true}
        )
        
        return res.status(200).json({
                success: true,
                message: "Task updated successfully",
                updatedTask
            })

    } catch (error) {
        console.log("update task: ", error)
        return res.status(500).json({
            success: false,
            message: "Somthing went wrong while updating a task.",
        })
    }
}

const deleteTask = async(req, res) => {

    try {

        const taskId = req.params?.id;

        const task = await Task.findById(taskId)

        if(!task) return res.status(404).json({success: false, message: "Task not found."})
        
        if(task.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const delete_task = await Task.findByIdAndDelete(taskId)
        
        return res.status(200).json({
                success: true,
                message: "Task deleted successfully",
            })

    } catch (error) {
        console.log("dalate task: ", error)
        return res.status(500).json({
            success: false,
            message: "Somthing went wrong while deleting a task.",
        })
    }
}


export {
    addTask,
    allTasks,
    getTask,
    updateTask,
    deleteTask
}