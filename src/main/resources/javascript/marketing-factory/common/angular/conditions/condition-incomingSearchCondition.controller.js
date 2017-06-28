(function() {
    'use strict';

    angular.module('wemApp.components').controller("IncomingSearchConditionController", IncomingSearchConditionController);

    IncomingSearchConditionController.$inject = ['$scope'];

    function IncomingSearchConditionController($scope) {
        $scope.comparisonOperators = [
            {
                "id": "equals",
                "name": "comparisonOperator.equals",
                "appliesTo": ["string"]
            },
            {
                "id": "notEquals",
                "name": "comparisonOperator.notEquals",
                "appliesTo": ["string"]
            },
            {
                "id": "startsWith",
                "name": "comparisonOperator.startsWith",
                "appliesTo": ["string"]
            },
            {
                "id": "endsWith",
                "name": "comparisonOperator.endsWith",
                "appliesTo": ["string"]
            },
            {
                "id": "matchesRegex",
                "name": "comparisonOperator.matchesRegex",
                "appliesTo": ["string"]
            },
            {
                "id": "contains",
                "name": "comparisonOperator.contains",
                "appliesTo": ["string"]
            }
        ];
    }
})();