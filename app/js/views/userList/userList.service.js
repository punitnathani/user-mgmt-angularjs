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

        return {
            getUserList : getUserList
        }
    }]);
})();