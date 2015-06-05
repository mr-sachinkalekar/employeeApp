/**
 * Created by sachin.kalekar on 6/5/2015.
 */

angular.module('EmployeeDirective', [])
    .directive('employee', function(){
        return {
            scope: { employee: '=' },
            restrict: 'A',
            templateUrl: 'dynamicTemplates/employee.html',
            controller: function($scope, employees){
                employees.find($scope.employee.id, function(employee) {
                    $scope.image = employee.image;
                });
            }
        };
    });