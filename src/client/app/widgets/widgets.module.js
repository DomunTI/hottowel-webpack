(function () {
    'use strict';
    module.exports = function (angular) {
        var widgetsModule = angular.module('app.widgets', []);

        require('./ht-img-person.directive')(widgetsModule);
        require('./ht-widget-header.directive')(widgetsModule);
    };

    /*angular.module('app.widgets', []);*/
})();
