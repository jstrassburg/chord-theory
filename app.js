angular.module('app', [])

.controller('ChordTheory', function($scope){
    $scope.allKeys = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    $scope.keyIndex = 3;

    $scope.updateKey = function(keyIndex) {
        $scope.keyIndex = keyIndex;
    };

    $scope.ionian = function(){
        var scale = [];
        var index = $scope.keyIndex;
        steps = [0,2,2,1,2,2,2];

        for (degree = 0 ; degree < steps.length ; degree++){
            index += steps[degree];
            scale[degree] = $scope.allKeys[index % 12]
        }
        return scale;
    };
});