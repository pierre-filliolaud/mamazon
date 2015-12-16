'use strict';

angular.module('mamazonApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
