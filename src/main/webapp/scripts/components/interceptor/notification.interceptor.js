 'use strict';

angular.module('mamazonApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-mamazonApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-mamazonApp-params')});
                }
                return response;
            },
        };
    });