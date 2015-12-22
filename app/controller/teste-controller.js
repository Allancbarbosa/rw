/**
 * Created by Windows on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('moduleName')
        .controller('ControllerName', ControllerName);

    ControllerName.$inject = ['dependency'];

    /* @ngInject */
    function ControllerName(dependency) {
        var vm = this;
        vm.title = 'ControllerName';

        activate();

        ////////////////

        function activate() {
            code
        }
    }

    (function () {
        'use strict';

        angular
            .module('moduleName')
            .filter('filterName', filterName);

        function filterName() {
            return filterNameFilter;

            ////////////////

            function filterNameFilter(parameters) {
                return parameters;
            }
        }

    })();

    
})();

