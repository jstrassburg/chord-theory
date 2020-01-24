angular.module('app', [])

.controller('ChordTheory', function($scope){
    $scope.allKeys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#|Gb', 'G', 'Ab'];
    $scope.keyIndex = 3; // default to C

    $scope.updateKey = function(keyIndex) {
        $scope.keyIndex = keyIndex;
    };

    $scope.scale = function(keyIndex, scaleIndex, steps, decorators){
        var scale = [];
        var index = keyIndex;
        var degree = 0;

        do {
            scale[degree] = $scope.allKeys[index % 12] + decorators[(degree + scaleIndex) % 7];
            index += steps[(degree + scaleIndex) % 7];
            degree++;
        } while (degree < steps.length);

        return scale;
    };

    $scope.majorScale = function(scaleIndex){
        var steps = [2,2,1,2,2,2,1];
        var decorators = ['maj7', '-7', '-7', 'maj7', '7', '-7', '-7b5'];

        return $scope.scale($scope.keyIndex, scaleIndex, steps, decorators);
    };

    $scope.secondaryDominants = function(){
        var steps = [2,2,1,2,2,2];
        var decorators = ['7', '7', '7', '7', '7', '7'];

        var chords = $scope.scale($scope.keyIndex + 7, 0, steps, decorators);
        chords.shift(); // V of I doesn't make sense, it's just the V
        return chords;
    };

    $scope.harmonicMinorScale = function(){
        var steps = [2,2,1,3,2,2,1];
        var decorators = ['+', '-7', '7', 'maj7', '°', '-7', '°'];

        return $scope.scale($scope.keyIndex, 5, steps, decorators);
    };

    $scope.melodicMinorScale = function(){
        var steps = [2,2,2,2,2,2,1];
        var decorators = ['+', '7', '7', '-7b5', '-7b5', '-7', '-7'];

        return $scope.scale($scope.keyIndex, 5, steps, decorators);
    };

    $scope.tritoneSubstitutions = function(){
        var steps = [2,2,1,2,2,2,1];
        var decorators = ['7', '7', '7', '7', '7', '7', '7'];

        return $scope.scale($scope.keyIndex + 6, 0, steps, decorators);
    };

    $scope.augSixth = function(){
        return $scope.allKeys[($scope.keyIndex + 8) % 12] + '7';
    };

    $scope.neapolitanSixth = function(){
        return $scope.allKeys[($scope.keyIndex + 1) % 12] + '/' + $scope.allKeys[($scope.keyIndex + 5) % 12];
    };
});