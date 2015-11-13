(function () {
    'use strict';
    module.exports = function (ngModule, angular) {
        ngModule
            .run(appRun);

        appRun.$inject = ['routerHelper'];
        /* @ngInject */
        function appRun(routerHelper) {
            routerHelper.configureStates(getStates());
        }

        function getStates() {
            return [
                {
                    state: 'dashboard',
                    config: {
                        url: '/',
                        templateProvider: ['$q', function ($q) {
                            var deferred = $q.defer();

                            require.ensure([], function (require) {
                                var template = require('./dashboard.html');
                                deferred.resolve(template);
                            });

                            return deferred.promise;
                        }],
                        controller: 'DashboardController',
                        controllerAs: 'vm',
                        resolve: {
                            loadDashboardModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                var deferred = $q.defer();

                                require.ensure([], function (require) {
                                    var mod = require('./dashboard.module')(angular);
                                    $ocLazyLoad.load({
                                        name: 'app.dashboard'
                                    });
                                    deferred.resolve(mod);
                                });

                                return deferred.promise;
                            }]
                        },
                        title: 'dashboard',
                        settings: {
                            nav: 1,
                            content: '<i class="fa fa-dashboard"></i> Dashboard'
                        }
                    }
                }
            ];
        }
    };
})();
