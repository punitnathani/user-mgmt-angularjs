(function(){
'use strict';

angular.module('octus.users')
    .controller('UserController', [function(){
        var vm = this;
        vm.isEditable = false;

        vm.editUser = function() {
            vm.isEditable = !vm.isEditable;
        }

        vm.deleteUser = function() {
            vm.onDelete({'value': vm.userData});
        }

        vm.saveUser = function() {
            vm.isEditable = false;
            vm.userForm.$setPristine();
            vm.onSave({'value': vm.userData});
        }

        vm.allowSave = function() {
            return vm.userForm.$dirty && vm.userForm.$valid && vm.isEditable;
        }
    }])
    .component('user', {
        templateUrl : 'js/views/user/user.html',
        controller : 'UserController as userCtrl',
        bindings   : {
            userData : '<',
            onSave   : '&',
            onDelete : '&'
        }
    })
})();