    var app = angular.module('Sinceramente',[]);
    app.controller("MainController", function($scope){
                
    });
    app.filter('range', 
    function() {
        return function(input, total) {
                    total = parseInt(total);
                    for (var i=0; i<total; i++){
                        input.push(i);
                    }
                    return input;
                };
        });

