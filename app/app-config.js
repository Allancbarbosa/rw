<<<<<<< HEAD
(function() {
    'user strict';
    angular.module('rw', ['ngMessages', 'toastr', 'ui.grid', 'ui.router','oc.lazyLoad']).config(config);

    function config($stateProvider,$urlRouterProvider)
    {
        var home = {
            url: '/',
            templateUrl: 'app/views/home/home.html'
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>'
        };

        var cadastroPessoa = {
            url: '/cadastro',
            templateUrl: 'app/views/pessoa/cadastro-pessoal.html',

            resolve:{
            deps:function ($ocLazyLoad){
                return $ocLazyLoad.load(
                'app/views/pessoa/cadastro-pessoa-controller.js'
                );
            }
          }
        };
        var pesquisaPessoa = {
            url: '/pesquisa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',

            resolve:{
                deps:function ($ocLazyLoad){
                    return $ocLazyLoad.load(
                        'app/views/pessoa/pesquisa-pessoa-controller.js'
                    );
                }
            }
        };

        function resolveDeps(file){
            return {
                dependecias:function($ocLazyLoad){
                    return $ocLazyLoad.load(file);
                }
            }
        }

        $stateProvider
            .state('home', home)
            .state('pessoa', pessoa)
            .state('pessoa.cadastro', cadastroPessoa)
            .state('pessoa.pesquisa', pesquisaPessoa);

        $urlRouterProvider.otherwise("/");
    }


})();


=======
angular.module('rw',['ngMessages','toastr','ui.grid']);
>>>>>>> e7006d0bd4c217129f31a21254ce0efe4180015c
