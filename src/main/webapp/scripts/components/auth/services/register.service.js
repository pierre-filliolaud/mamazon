'use strict';

angular.module('mamazonApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


