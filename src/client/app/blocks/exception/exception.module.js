(function () {
    'use strict';

    module.exports = function (angular) {

        require('../logger/logger.module');
        var exceptionModule = angular.module('blocks.exception', [
            'blocks.logger'
        ]);

        require('./exception-handler.provider')(exceptionModule);
        require('./exception')(exceptionModule);
    };

    /*angular.module('blocks.exception', ['blocks.logger']);*/
})();
