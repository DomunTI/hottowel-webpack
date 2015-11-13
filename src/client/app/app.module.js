(function () {
    'use strict';

    var angular = require('angular');

    require('bootstrap');
    require('bootstrap-css');
    require('bootstrap-theme-css');
    require('font-awesome');
    require('toastr');
    require('toastr-css');
    require('../styles/styles.less');

    require('oclazyload');
    require('./core/core.module')(angular);
    require('./widgets/widgets.module')(angular);
    require('./layout/layout.module')(angular);

    var appModule = angular.module('app', [
        'app.core',
        'app.layout',
        'app.widgets',
        'oc.lazyLoad'
    ]);

    require('./dashboard/dashboard.route')(appModule, angular);
    require('./admin/admin.route')(appModule, angular);

    /*angular.module('app', [
        'app.core',
        'app.widgets',
        'app.admin',
        'app.dashboard',
        'app.layout'
    ]);*/
})();
