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
                vm.message = 'Error fetching user data';
                console.error('Error getting users: ' + error);
            });

        vm.addUser = function() {
            vm.userlist.push({});
        }

        vm.saveUser = function(value, index) {
            UserListService.saveUser(value)
                .then(function(user) {
                    vm.userlist[index] = user;
                }, function(error) {
                    console.error('Error saving user: ' + error);
                });
        }

    }])
    .component('userList', {
        templateUrl : 'js/views/userList/userList.html',
        controller : 'UserListController as userListCtrl'
    })
})();