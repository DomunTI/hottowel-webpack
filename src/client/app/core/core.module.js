/* global angular */
(function () {
    'use strict';

    module.exports = function (angular) {

        require('angular-animate');
        require('angular-sanitize');
        require('angularplus');
        require('../blocks/router/router.module')(angular);
        require('../blocks/exception/exception.module')(angular);

        var coreModule = angular.module('app.core', [
            'ngAnimate',
            'ngSanitize',
            'ngplus',
            'blocks.router',
            'blocks.exception'
        ]);

        require('./core.constants')(coreModule);
        require('./core.config')(coreModule);
        require('./core.route')(coreModule);
        require('./dataservice')(coreModule);
    };
    
    /*angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus'
        ]);*/
})();
