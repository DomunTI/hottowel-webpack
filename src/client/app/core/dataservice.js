(function () {
    'use strict';

    module.exports = function (ngModule) {
        ngModule
            .factory('dataservice', dataservice);

        /* @ngInject */
        function dataservice($http, $q, exception, logger) {
            var service = {
                getPeople: getPeople,
                getMessageCount: getMessageCount
            };

            return service;

            function getMessageCount() { return $q.when(72); }

            function getPeople() {
                return $http.get('http://localhost:8001/api/people')
                    .then(success)
                    .catch(fail);

                function success(response) {
                    return response.data;
                }

                function fail(e) {
                    return exception.catcher('XHR Failed for getPeople')(e);
                }
            }
        }
    };
})();
