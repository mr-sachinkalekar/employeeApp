/**
 * Created by sachin.kalekar on 6/5/2015.
 */

angular.module('EmployeesFactory', [])
    .factory('employees', function($http){
        return {
            list: function (callback){
                $http({
                    method: 'GET',
                    url: 'json/employees.json',
                    cache: true
                }).success(callback);
            },
            find: function(id, callback){
                $http({
                    method: 'GET',
                    url: 'json/employee' + id + '.json',
                    cache: true
                }).success(callback);
            }
        };
    });

