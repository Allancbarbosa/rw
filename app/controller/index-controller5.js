/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController5', IndexController5);

IndexController5.$inject = ['$scope','AlertService','$filter'];

function IndexController5($scope,AlertService,$filter) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    $scope.gridOptions = {};


    iniciar();

  function iniciar(){
      $scope.gridOptions.data = 'listaDePessoas';
  }

    function setTouched(){
        angular.forEach($scope.myForm.$error,function (error){
        angular.forEach(error ,function (field){
            field.$setTouched();
        });
    });
    }

    function salvar () {
        setTouched()
        if ($scope.myForm.$invalid) {
            AlertService.showError('verifique os campos','error');
            return;



        }

        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        AlertService.showSucess('Gravado com sucesso','ok');
    }

    function limpar () {
        $scope.entidade = {};
    }

    function excluir () {

    }

};