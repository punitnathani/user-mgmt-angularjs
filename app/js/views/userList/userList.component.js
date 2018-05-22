(function(){
'use strict';

angular.module('octus.users', ['octus.utils'])
    .controller('UserListController', ['UserListService',
    function(UserListService){
        var vm = this;
        vm.userlist = [];
        vm.loaded = false;
        vm.message = 'Fetching user data';

        UserListService.getUserList()
            .then(function(users){
                vm.loaded = true;
                vm.userlist = users.data;
            }, function(error) {
                vm.loaded = true;
                vm.message = 'Error fetching user data';
                console.error('Error getting users: ' + error);
            });

    }])
    .component('userList', {
        templateUrl : 'js/views/userList/userList.html',
        controller : 'UserListController as userListCtrl'
    })
})();