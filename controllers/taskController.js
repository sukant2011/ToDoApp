/*
* Author : Sukant 
* Module : Taskcontroller
* Description : Use to create add  and delete
*/

var TaskModel = require(APP_PATH + '/models/taskModel.js');
var taskModelObj = new TaskModel();


module.exports = {

     /**--------------------------------------------------------------------------
     Function    : createTask
     Description : use to create a task
     --------------------------------------------------------------------------*/
     createTask: function (req, res) {
           
           taskModelObj.name = req.body.name
           taskModelObj.dueDate =req.body.dueDate
           taskModelObj.priority = req.body.priority
           console.log(taskModelObj)
        taskModelObj.save(function(err,task){
            if(err){
                return res.json({status :"500", message:err.msg})
            }else{
                  return res.json({status :"200",data : task})
            }
        }) 
       
     },
    getTask: function (req, res) {
        var sortOption = req.query.sortOption;
        var sortOrder = parseInt(req.query.sortOrder);
        var sortObj = {};
        sortObj[sortOption] = sortOrder;
        TaskModel.find({"dueDate": {"$gt": new Date()}}).sort(sortObj).exec(function(err,task){
            if(err){
                return res.json({status :"error", message :"some error occured"})
            }else{
                  return res.json(task)
            }
        }) 
       
     },
       deleteTask: function (req, res) {
        //    if(!req.params.id){
        //        return res.json({status :"400", validationErrors: "No id provided."})
        //    }
        TaskModel.findOne({_id : req.params.id},function(err,task){
            if(err){
                return res.json({status :"404", validationErrors: "Id is Invalid."})
            }else{
                 if(task){
                     task.remove(function(err,destroyTask){
                           if(err){
                             return res.json({status :"500", message :"some error occured"})
                              
                             }else{
                                return res.json({status :"200", message :"Task has been deleted."})
                               }
                     })
                 }
            }
        }) 
       
     },
 updateTask: function (req, res) {
              var taskObj ={};
              taskObj.name = req.body.name;
              taskObj.dueDate = req.body.dueDate;
              taskObj.priority = req.body.priority;
              console.log
    
    TaskModel.findOneAndUpdate({_id : req.body.id},{$set : taskObj}, {new :true})
        .exec(function(err,task){
            if(err){
                return res.json({status :"500", validationErrors: err.msg})
            }else{
               return res.json(task)
            }
        }) 
       
     },
        getOverDueTask: function (req, res) {
           
        TaskModel.find({"dueDate": {"$lt": new Date()}},function(err,duelist){
            if(err){
                return res.json({status :"error", message :"some error occured"})
            }else{
                  return res.json(duelist)
            }
        }) 
       
     },


}
