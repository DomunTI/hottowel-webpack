(function () {
    'use strict';

    module.exports = function (angular) {
        var dashboardModule = angular.module('app.dashboard', []);
        require('./dashboard.controller')(dashboardModule);
    };

    /*angular.module('app.dashboard', [
        'app.core',
        'app.widgets'
      ]);*/
})();
