angular.module('app', [])

.controller('ChordTheory', function($scope){
    $scope.allKeys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#/Gb', 'G', 'Ab'];
    $scope.keyIndex = 3;

    $scope.updateKey = function(keyIndex) {
        $scope.keyIndex = keyIndex;
    };

    $scope.scale = function(scaleIndex){
        var scale = [];
        var steps = [2,2,1,2,2,2,1];
        var decorators = ['maj7', '-7', '-7', 'maj7', '7', '-7', '-7b5'];

        var index = $scope.keyIndex;
        var degree = 0;

        do {
            scale[degree] = $scope.allKeys[index % 12] + decorators[(degree + scaleIndex) % 7];
            index += steps[(degree + scaleIndex) % 7];
            degree++;
        } while (degree < steps.length);

        return scale;
    };

    $scope.secondaryDominants = function(){
        var chords = [];
        var steps = [2,2,1,2,2,2,1];

        var index = $scope.keyIndex + 7;
        var degree = 0;

        do {
            chords[degree] = $scope.allKeys[index % 12] + '7';
            index += steps[degree % 7];
            degree++;
        } while (degree < steps.length - 1);

        return chords;
    };

    $scope.augSixth = function(){
        return $scope.allKeys[($scope.keyIndex + 8) % 12] + '7';
    };

    $scope.neapolitanSixth = function(){
        return $scope.allKeys[($scope.keyIndex + 1) % 12] + '/' + $scope.allKeys[($scope.keyIndex + 5) % 12];
    };

    $scope.tritoneSubstitutions = function(){
        var chords = [];
        var steps = [2,2,1,2,2,2,1];

        var index = $scope.keyIndex + 6;
        var degree = 0;

        do {
            chords[degree] = $scope.allKeys[index % 12] + '7';
            index += steps[degree % 7];
            degree++;
        } while (degree < steps.length);

        return chords;
    };
});