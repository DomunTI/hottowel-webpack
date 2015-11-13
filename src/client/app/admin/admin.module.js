(function () {
    'use strict';

    module.exports = function (angular) {
        var adminModule = angular.module('app.admin', []);
        require('./admin.controller')(adminModule);
    };

    /*angular.module('app.admin', [
        'app.core',
        'app.widgets'
      ]);*/

})();
