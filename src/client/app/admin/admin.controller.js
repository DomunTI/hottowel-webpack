(function () {
    'use strict';

    module.exports = function (ngModule) {

        ngModule
            .controller('AdminController', AdminController);

        /* @ngInject */
        function AdminController(logger) {
            var vm = this;
            vm.title = 'Admin';

            activate();

            function activate() {
                logger.info('Activated Admin View');
            }
        }
    };
})();
