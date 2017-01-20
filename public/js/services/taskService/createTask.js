app.service('createTask',function($scope,$http,$q){

   function addTask(obj) {
        var deferred = $q.defer();
      $http.post("/task/create", JSON.stringify(obj))
            .then(function (result) {
				userLog=result
             deferred.resolve(userLog);
            }, function (error) {
                deferred.reject(error);
            });
            
        return deferred.promise;
}
       
});
