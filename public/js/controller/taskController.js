
app.controller('taskController',function ($scope,$http) {
var sortOption = "name";
$scope.sortOrder = 1;
$scope.hideFlag = false;

$scope.addTask = function(task){
     console.log('task===',task);
       $http.post("/task/create", JSON.stringify(task))
            .then(function (result) {
                  $scope.listTask ()
                console.log(result)
            }, function (error) {
            console.log(" error")
            })
 }

$scope.deleteTask = function(taskId){
       $http.delete("/task/delete/"+taskId)
            .then(function (result) {
                console.log(result)
            }, function (error) {
            console.log(" error")
            })
 }

$scope.updateTask = function(taskId){
       $http.post("/task/update/"+taskId)
            .then(function (result) {
                console.log(result)
            }, function (error) {
            console.log(" error")
            })
 }



// if($stateparams.taskId) {
//     var gettask = function () {
//         $http.get("/task/"+taskId)
//             .then(function (result) {
//                 $scope.task = result.data;
//             }, function (error) {
//                 console.log(" error")
//             })
//  }();

// }

 var tasksLists = function (sortOption, sortOrder) {
     $http.get("/task?sortOption="+sortOption+"&sortOrder="+sortOrder)
            .then(function (result) {
                $scope.tasksList = result.data;
            }, function (error) {
                console.log(" error")
            })
 };

 


 var overdue = function () {
       $http.get("/task/overdue")
            .then(function (result) {
                $scope.overdueList = result.data;
            }, function (error) {
                console.log(" error")
            })
 }();

    
$scope.sort = function (sortOption, sortOrder) {
    tasksLists(sortOption, sortOrder);
    if(sortOrder == 1) {
        $scope.sortOrder = -1;
    } else {
        $scope.sortOrder = 1;
    }
}
 tasksLists(sortOption, $scope.sortOrder); 

$scope.showTaskForm = function(){
    $scope.hideFlag = true;
}           
           
 });
    



