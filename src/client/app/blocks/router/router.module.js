(function () {
    'use strict';

    module.exports = function (angular) {

        require('angular-ui-router');
        require('../logger/logger.module')(angular);

        var routerModule = angular.module('blocks.router', [
            'ui.router',
            'blocks.logger'
        ]);
        
        require('./router-helper.provider')(routerModule, angular);
    };


    /*angular.module('blocks.router', [
        'ui.router',
        'blocks.logger'
    ]);*/
})();
