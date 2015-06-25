angular.module('bioid-mobile.sensor.service', [])

.factory('SensorService', function (BluetoothService, $http, $q) {
    var connection = BluetoothService;
    connection.subscribe('\n', function (data) {
        console.log(data);
    }, failure);
    return {
        ledOn : function(){
            return "55AA24010200010000000000000000000000000000002701";
        },
        ledOff : function(){
            return "55AA24010200000000000000000000000000000000002601";
        },
        getEmptyId : function(){
            return "55AA07010000000000000000000000000000000000000701";
        },
        verify : function(){
            return "55AA02010000000000000000000000000000000000000201";
        },
        cancel : function(){
            return "55AA30010000000000000000000000000000000000003001";
        },
        executeCommand: function (command) {
    		connection.write(command, function() {
                connection.once('data', function(result) {

                });
            });
        }
    };
});