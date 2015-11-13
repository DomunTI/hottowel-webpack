(function () {
    'use strict';

    module.exports = function (angular) {
       
        require('!ngtemplate?module=app.core&relativeTo=/client/!html!./shell.html');
        require('!ngtemplate?module=app.core&relativeTo=/client/!html!./sidebar.html');
        
        var layoutModule = angular.module('app.layout', [
            'app.core'
        ]);

        require('./shell.controller')(layoutModule);
        require('./sidebar.controller')(layoutModule);

        require('./ht-top-nav.directive')(layoutModule);
        require('./ht-sidebar.directive')(layoutModule);
        
    };
    /* angular.module('app.layout', ['app.core']); */
})();
