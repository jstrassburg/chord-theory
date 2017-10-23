angular.module('app', [])

.controller('ChordTheory', function($scope){
    $scope.allKeys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#/Gb', 'G', 'Ab'];
    $scope.keyIndex = 3;

    $scope.updateKey = function(keyIndex) {
        $scope.keyIndex = keyIndex;
    };

    $scope.scale = function(steps, decorators){
        var scale = [];
        var index = $scope.keyIndex;

        for (degree = 0 ; degree < steps.length ; degree++){
            index += steps[degree];
            scale[degree] = $scope.allKeys[index % 12] + decorators[degree];
        }
        return scale;
    };

    $scope.ionian = function(){
        return $scope.scale([0,2,2,1,2,2,2], ['maj7', '-7', '-7', 'maj7', '7', '-7', '-7b5']);
    };

    $scope.dorian = function(){
        return $scope.scale([0,2,1,2,2,2,1], ['-7', '-7', 'maj7', '7', '-7', '-7b5', 'maj7']);
    };
});