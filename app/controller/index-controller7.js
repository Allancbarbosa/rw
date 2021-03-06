/**
 * Created by JCG-003 on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController7', IndexController7);

    /* @ngInject */
    function IndexController7(AlertService) {

        var vm = this;
        vm.entidade = {};

        vm.salvarPessoa = salvarPessoa;
        vm.excluirPessoa = excluirPessoa;
        vm.limparPessoa = limparPessoa;


        function salvarPessoa() {
            AlertService.showSucess('Registro gravado com sucesso!');
        }

        function excluirPessoa() {
            AlertService.showError('Registro excluído com sucesso!');
            vm.entidade = {};
        }

        function limparPessoa() {
            AlertService.showInfo('Formulário limpo');
            vm.entidade = {};
        }
    }

})();