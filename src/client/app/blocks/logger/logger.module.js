(function () {
    'use strict';

    module.exports = function (angular) {

        var loggerModule = angular.module('blocks.logger', []);

        require('./logger')(loggerModule);
    };

    //angular.module('blocks.logger', []);
})();
