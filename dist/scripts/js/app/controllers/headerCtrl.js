var app = angular.module('app');

app.controller('headerCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog) {

  $scope.toggleRight = buildToggler('right');

  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
      $mdSidenav(navID)
      .toggle()
    },300);
    return debounceFn;
  }

  $scope.showLogin = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/partials/loginDialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
    })
    .then(function(answer) {
      console.log('You choose "' + answer + '".');
    }, function() {
      console.log('You cancelled the dialog.');
    });
  };

})