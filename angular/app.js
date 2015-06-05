/**
 * Created by sachin.kalekar on 6/5/2015.
 */

var employeeApp = angular.module('employeeApp', [
    'ngRoute',
    'EmployeeControllers',
    'EmployeesFactory',
    'EmployeeDirective'
]);

employeeApp.config(function($routeProvider) {
    $routeProvider.
        when('/',
        {
            templateUrl: 'dynamicTemplates/employee-list.html',
            controller: 'EmployeeListCtrl'
        }).
        when('/:employeeId',
        {
            templateUrl: 'dynamicTemplates/employee-detail.html',
            controller: 'EmployeeDetailCtrl'
        }).
        otherwise(
        {
            redirectTo: '/'
        });
});