/**
 * Created by JCG-003 on 14/12/2015.
 */
angular.module('rw')
    .controller('IndexController4', IndexController4);

IndexController4.$inject = ['$scope','AlertService','$filter'];

function IndexController4($scope,AlertService,$filter) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;


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