/**
 * Created by sachin.kalekar on 6/5/2015.
 */

var employeeControllers = angular.module('EmployeeControllers', []);

employeeControllers.controller('EmployeeListCtrl', function ($scope, employees){
    employees.list(function(employees) {
        $scope.employees = employees;
    });
});

employeeControllers.controller('EmployeeDetailCtrl', function ($scope, $routeParams, employees){
    employees.find($routeParams.employeeId, function(employee) {
        $scope.employee = employee;
    });
});