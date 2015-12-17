/**
 * Created by Windows on 16/12/2015.
 */
angular.module('rw')
   .service('AlertService',AlertService);

function AlertService(toastr){
    this.showSucess = showSucess;
    this.showError = showError;
    this.showWarning = showWarning;
    this.showInfo = showInfo;


function showSucess (mensagem,titulo){
    if(titulo) {
        titulo = 'ok'
    }
     toastr.success(mensagem,titulo)

    }
function showError (mensagem,titulo) {
    if (titulo) {
        titulo = 'Error'
    }
    toastr.error(mensagem, titulo)
}
function showWarning (mensagem,titulo) {
    if (titulo) {
        titulo = 'Warning'
    }
    toastr.warning(mensagem, titulo)
}
    function showInfo(mensagem, titulo) {
        if (titulo) {
            titulo = 'Info'
        }
        toastr.info(mensagem, titulo)

    }
}