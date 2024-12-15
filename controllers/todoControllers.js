const Todo = require("../models/todoModel");


const fetchTodos =async (req,res)=>{
    try{
        const todos=await Todo.find();
        res.json({
            data:todos,
            message:'Todos fetched successfully'
        })

        
    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to fetch todos'
        })
    }
}
const fetchSingleTodo =async (req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findOne({id:id});
        res.json({
            data:todo,
            message:'Todo fetched successfully'
        })
    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to fetch todo'
        })
    }
}
const createTodo =async (req,res)=>{
    const {id,title,description,status}=req.body;
    try{
        const todo=new Todo({
            id:id,
            title:title,
            description:description,
            status:status
        });

        await todo.save();
        res.json({
            data:todo,
            message:'Todo Created successfully'
        })
    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to create todo'
        })
    }
}
const deleteTodo =async (req,res)=>{
    const id=req.params.id;
    try{
        const todo=await Todo.findOneAndDelete({id:id});
        res.json({
            data:todo,
            message:'Todos deleted successfully'
        })
    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to delete todo'
        })
    }
}
const updateTodo =async (req,res)=>{
    const {id,title,description,status}=req.body;
    try{
        const todo=await Todo.findOneAndUpdate({id:id},{title:title,description:description,status:status},{new:true});
        res.json({
            data:todo,
            message:'Todos updated successfully'
        })
    }
    catch(err){
        res.json({
            data:null,
            message:'Failed to update todo'
        })
    }
}



module.exports={
    fetchTodos,
    fetchSingleTodo,
    createTodo,
    deleteTodo,
    updateTodo
}