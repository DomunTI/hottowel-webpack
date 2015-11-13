(function () {
    'use strict';

    module.exports = function (ngModule, angular) {
        ngModule
            .run(appRun);
        
        /* @ngInject */
        function appRun(routerHelper) {
            routerHelper.configureStates(getStates());
        }

        function getStates() {
            return [
                {
                    state: 'admin',
                    config: {
                        url: '/admin',
                        templateProvider: ['$q', function ($q) {
                            var deferred = $q.defer();

                            require.ensure([], function (require) {
                                var template = require('./admin.html');
                                deferred.resolve(template);
                            });

                            return deferred.promise;
                        }],
                        controller: 'AdminController',
                        controllerAs: 'vm',
                        resolve: {
                            loadAdminModule: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                                var deferred = $q.defer();

                                require.ensure([], function (require) {
                                    var mod = require('./admin.module')(angular);
                                    $ocLazyLoad.load({
                                        name: 'app.admin'
                                    });
                                    deferred.resolve(mod);
                                });

                                return deferred.promise;
                            }]
                        },
                        title: 'Admin',
                        settings: {
                            nav: 2,
                            content: '<i class="fa fa-lock"></i> Admin'
                        }
                    }
                }
            ];
        }
    };
})();
