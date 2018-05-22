(function(){
'use strict';

angular.module('octus.users')
    .controller('UserController', [function(){

    }])
    .component('user', {
        templateUrl : 'js/views/user/user.html',
        controller : 'UserController as userCtrl',
        bindings   : {
            userData : '<'
        }
    })
})();