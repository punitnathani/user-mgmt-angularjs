(function(){
'use strict';

angular.module('octus.users', ['octus.utils'])
    .controller('UserListController', [function(){
        this.arr = ['1', '2', '3'];
    }])
    .component('userList', {
        templateUrl : 'js/views/userList/userList.html',
        controller : 'UserListController as userListCtrl'
    })
})();