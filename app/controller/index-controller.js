 angular.module('rw')
      .controller('IndexController',IndexController);

 function IndexController($scope){
     $scope.nome = 'Allan Cassiano';
     $scope.onClickTeste = onClickTeste;

     function onClickTeste(){
     $scope.nome = 'Teste alteraçao via javascript';

     }
 }