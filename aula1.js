var Default = /** @class */ (function () {
    function Default() {
        this.metodo;
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Hellow World! " + this.numero;
        return alert(this.texto);
    };
    return Default;
}());
