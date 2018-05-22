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
                    alert('Error saving user');
                });
        }

        vm.deleteUser = function(value, index) {
            // Check if it's the last remaining user
            if(vm.userlist.length === 1) {
                alert('Cannot remove last user');
                return;
            }
            if(!confirm('Are you sure you want to delete the user?')) {
                return;
            }
            // Check if it's newly added (hence not saved with ID)
            if(!value.id) {
                vm.userlist.splice(index, 1);
                return;
            }
            UserListService.deleteUser(value)
                .then(function(user) {
                    vm.userlist.splice(index, 1);
                }, function(error) {
                    console.error('Error deleting user: ' + error);
                    alert('Error deleting user');
                });
        }

    }])
    .component('userList', {
        templateUrl : 'js/views/userList/userList.html',
        controller : 'UserListController as userListCtrl'
    })
})();