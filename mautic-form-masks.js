$(document).ready(function() {

    $('input[name*="cep"]').mask('00000-000');

    $('input[name*="cnpj"]').mask('00.000.000/0000-00', {
        reverse: true
    });

    $('input[id*="cpf"], input[class*="cpf"]').mask('000.000.000-00', {
        reverse: true
    });

    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('input[type=tel], input[id*="telefone"], input[class*="telefone"]').mask(SPMaskBehavior, spOptions);

});
