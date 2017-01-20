module.exports = function(app, express) {
      var router = express.Router();
      var routeObj = require(APP_PATH + '/controllers/taskController.js');
     
      router.post("/create",routeObj.createTask);
      router.get("/",routeObj.getTask);
      router.get("/overdue",routeObj.getOverDueTask);
      router.delete("/destroy/:id",routeObj.deleteTask);
      router.post("/update",routeObj.updateTask);
      app.use('/task', router);
}
