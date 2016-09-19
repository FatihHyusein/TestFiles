angular.module('testApp', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            // $stateProvider
            //     .state("home", {
            //         url: "/",
            //         templateUrl: 'app/pages/home/home.html',
            //         controller: 'HomeCtrl'
            //     })

            $stateProvider
                .state("home", {
                    url: "/",
                    template: '<input type="text" ng-model="test.prop"> <h1>*{{test.prop}}*' +
                    '</h1><button ng-click="reset()">Reset</button>' +
                    '<ul><li ng-repeat="d in data">{{d}}</li></ul>' +
                    '<button ng-click="changeData()">ChangeData</button>',
                    controller: function ($scope) {
                        var arr = [1, 2, 3, 4, 5];

                        $scope.test = {
                            prop: '555'
                        };
                        $scope.data = arr;
                        $scope.changeData = function () {
                            // arr = [2, 33, 4];
                            // $scope.data = arr;

                            arr.splice(0, arr.length, 22, 33, 4);
                        }


                        $scope.reset = function () {
                            console.log($scope.test);
                            $scope.test = {
                                prop: '33'
                            };

                            $scope.test = {};


                        }


                    }
                })
        }])


    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            console.warn('hh')
        }])


    .controller('MainCtrl', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
        }])

    .filter('multiply', function () {
        return function (input, multiplicator) {
            return input * multiplicator;
        }
    })
    .directive('testCompile', function ($compile) {
        return {
            link: function (scope, element, attributes) {
                element.append($compile('<strong style="font-size:{{1+88}}px">{{1+55}}</strong>')(scope));
            }
        }
    })


;
