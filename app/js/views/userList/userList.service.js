(function(){
'use strict';

angular.module('octus.users')
    .factory('UserListService', ['$q', '$http', 'BACKEND_API',
    function($q, $http, BACKEND_API){
        var getUserList = function() {
            var defer = $q.defer();
            var endpoint = BACKEND_API + '/users';
            $http.get(endpoint)
                .then(function(response){
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }

        var saveUser = function(userdata) {
            var defer = $q.defer();
            var request = {
                data : userdata,
                url  : BACKEND_API + '/users'
            };
            // Check if it's an update task
            if(userdata.id) {
                request.url += '/' + userdata.id;
                request.method = 'PUT';
            }
            // If no id present, create a new user
            else {
                request.method = 'POST';
            }
            console.log(request);
            $http(request)
                .then(function(response){
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error);
                });
            return defer.promise;
        }

        var deleteUser = function(userdata) {
            var defer = $q.defer();
            var endpoint = BACKEND_API + '/users/' + userdata.id;
            $http.delete(endpoint)
                .then(function(response){
                    defer.resolve();
                }, function(error){
                    defer.reject(error);
                });
            return defer.promise;
        }

        return {
            getUserList : getUserList,
            saveUser    : saveUser,
            deleteUser  : deleteUser
        }
    }]);
})();