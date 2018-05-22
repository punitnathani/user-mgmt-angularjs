(function(){
'use strict';

angular.module('octus.users')
    .controller('UserController', [function(){
        var vm = this;
        vm.isEditable = false;

        vm.editUser = function() {
            vm.isEditable = true;
        }

        vm.deleteUser = function() {
            // Remove user
        }
    }])
    .component('user', {
        templateUrl : 'js/views/user/user.html',
        controller : 'UserController as userCtrl',
        bindings   : {
            userData : '<'
        }
    })
})();