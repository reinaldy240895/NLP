angular.module('MinimumEditDistance', []).controller('MEDcontrol', ['$scope', function($scope) {
  // variable
  $scope.kata1 = "";
  $scope.kata2 = "";
  $scope.matrix = [];

  // fungsi menghitung nilai distance
  $scope.MED = function(s, t) {
    // variabel
    var substitution; //substitusi
    var d = new Array(); //tampungan nilai

    // push nilai 0
    for (var i = 0; i <= s.length; i++) {
      var temp = new Array();
      for (var j = 0; j <= t.length; j++) {
        temp.push(0);
      }
      d.push(temp);
    }

    //inisialisasi untuk nilai awal 0,1,2 dst..
    for (var i = 0; i <= s.length; ++i) d[i][0] = i;
    for (var i = 0; i <= t.length; ++i) d[0][i] = i;

    //proses perhitungan minimum edit distance
    for (var i = 1; i <= s.length; ++i) {
         for (var j = 1; j <= t.length; ++j) {
             if (s[i-1] == t[j-1]) { 
              substitution = 0;  //inisialisasi nilai substitusi adalah 0 jika tidak ada perbedaan
            }else{ 
              substitution = 2; //inisialisasi nilai substitusi adalah 2 jika ada perbedaan
            }
            // proses perhitungan
            d[i][j] = Math.min(d[i-1][j]+1,
                      Math.min(d[i][j-1]+1,
                      Math.min(d[i-1][j-1]+substitution)));
         }
    }
    // melempar nilai hasil perhitungan distance
    return d;
  };

  $scope.inputMat = function() {
    $scope.matrix = $scope.MED($scope.kata1, $scope.kata2);
  };

  // panggil di index
  $scope.inputMat();

}]);
