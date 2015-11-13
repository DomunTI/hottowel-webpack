(function () {
    'use strict';

    module.exports = function (ngModule) {
        //var core = angular.module('app.core');
        ngModule.config(toastrConfig);

        toastrConfig.$inject = ['toastr'];
        /* @ngInject */
        function toastrConfig(toastr) {
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-bottom-right';
        }

        var config = {
            appErrorPrefix: '[hottowel-webpack Error] ',
            appTitle: 'Hot Towel Webpack'
        };

        ngModule.value('config', config);

        ngModule.config(configure);

        configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
        /* @ngInject */
        function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
            exceptionHandlerProvider.configure(config.appErrorPrefix);
            routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
        }
    };
})();
