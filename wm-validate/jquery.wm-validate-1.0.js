/*!
 * jquery.wm-validate-1.0 - v 1.0
 * desenvolvido por Welison Menezes
 * email : welisonmenezes@gmail.com
 * 
 *
 * Copyright 2014 Welison Menezes
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */

;(function ($) {
    'use strict';
    $.fn.extend({
        wmValidate: function (options) {
            /**
             *  default configurations
             */
            var defaults = {
                // messages error
                messages : {
                    required    : 'Campo obrigatório!',
                    email       : 'E-mail inválido!',
                    integer     : 'Apenas números!',
                    digit       : 'Apenas letras e números!',
                    url         : 'Url inválida!',
                    minlength   : 'Texto muito pequeno!',
                    maxlength   : 'Texto muito grande!',
                    rangelength : 'Verifique o tamanho do texto.',
                    min         : 'Valor menor que o esperado.',
                    max         : 'Valor maior que o esperada.',
                    range       : 'Verifique o valor.',
                    equalTo     : 'Campo de confirmação diferente!',
                    date        : 'Data inválida!',
                    cpf         : 'CPF inválido!',
                    cnpj        : 'CNPJ inválido!',
                    cep         : 'CEP inválido!',
                    phone       : 'Número inválido!',
                    creditcard  : 'Número de cartão inválido!',
                    extension   : 'Tipo de arquivo inválido!' 
                },
                // selectors - only css class
                selectors : {
                    submit          : 'wm-submit',
                    required        : 'required',
                    email           : 'email',
                    integer         : 'integer',
                    digit           : 'digit',
                    url             : 'url',
                    minlength       : 'minlength',
                    maxlength       : 'maxlength',
                    rangelength     : 'rangelength',
                    min             : 'min',
                    max             : 'max',
                    range           : 'range',
                    equalTo         : 'equalTo',
                    date            : 'date',
                    cpf             : 'cpf',
                    cnpj            : 'cnpj',
                    cep             : 'cep',
                    phone           : 'phone',
                    creditcard      : 'creditcard',
                    msgError        : 'msg-error',
                    erro            : 'error',
                    extension       : 'extension'
                },
                // configurations
                config : {
                    minlength   : 1,
                    maxlength   : 10,
                    min         : 1,
                    max         : 10,
                    goToError   : true,
                    cleanErrors : true,
                    extensions  : '.jpg,.jpeg,.gif,.png'
                },
                // callbacks
                callbacks : {
                    CB_Required         : false,
                    CB_Email            : false,
                    CB_Integer          : false,
                    CB_Digit            : false,
                    CB_Url              : false,
                    CB_Minlength        : false,
                    CB_Maxlength        : false,
                    CB_RangeLength      : false, 
                    CB_Min              : false,
                    CB_Max              : false,
                    CB_Range            : false, 
                    CB_EqualTo          : false,
                    CB_Date             : false,
                    CB_Cpf              : false, 
                    CB_Cnpj             : false,
                    CB_Cep              : false, 
                    CB_Phone            : false,
                    CB_CreditCard       : false, 
                    CB_Extension         : false,
                    CB_BeforeValidate   : false,
                    CB_AfterValidate    : false,
                    CB_Error            : false,
                    CB_ClearErrors      : false
                }
            },
            /**
             *  merge default configurations with custom user configurations
             */
            options = $.extend(true, defaults, options),

            /**
             *  callbacks
             */
            callbacks = {
                element : false,
                message : false,
                erro    : options.selectors.erro,
                boxError: options.selectors.msgError,
                /**
                 * callback fields validation
                 *
                 * @param htmlElement validated field 
                 * @param string message error (you can use : options.messages.required)
                 * 
                 * @return void
                 */
                CB_Required: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Required ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Required.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Email: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Email ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Email.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Integer: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Integer ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Integer.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Digit: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Digit ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Digit.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Url: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Url ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Url.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Minlength: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Minlength ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Minlength.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Maxlength: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Maxlength ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Maxlength.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_RangeLength: function(el, msg){
                    if($.isFunction( options.callbacks.CB_RangeLength ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_RangeLength.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                }, 
                CB_Min: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Min ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Min.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Max: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Max ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Max.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Range: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Range ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Range.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                }, 
                CB_EqualTo: function(el, msg){
                    if($.isFunction( options.callbacks.CB_EqualTo ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_EqualTo.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Date: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Date ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Date.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Cpf: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Cpf ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Cpf.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                }, 
                CB_Cnpj: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Cnpj ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Cnpj.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Cep: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Cep ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Cep.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                }, 
                CB_Phone: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Phone ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Phone.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_CreditCard: function(el, msg){
                    if($.isFunction( options.callbacks.CB_CreditCard ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_CreditCard.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                },
                CB_Extension: function(el, msg){
                    if($.isFunction( options.callbacks.CB_Extension ))
                    {
                        this.element = el;
                        this.message = msg;
                        options.callbacks.CB_Extension.apply(this, arguments);
                    }
                    else
                    {
                        callbacks.CB_Input(el, msg);
                    }
                }, 
                /**
                 * callback before/after validation
                 *
                 * @return void
                 */
                CB_BeforeValidate   : function(form){
                    if($.isFunction( options.callbacks.CB_BeforeValidate ))
                    {
                        this.element = form;
                        options.callbacks.CB_BeforeValidate.apply(this, arguments);
                    }
                    else
                    {}
                },
                CB_AfterValidate    : function(form){
                    if($.isFunction( options.callbacks.CB_AfterValidate ))
                    {
                        this.element = form;
                        options.callbacks.CB_AfterValidate.apply(this, arguments);
                    }
                    else
                    {}
                },
                /**
                 * callback when has error
                 *
                 * @param htmlElement validated form 
                 *
                 * @return void
                 */
                CB_Error            : function(form){
                    if($.isFunction( options.callbacks.CB_Error ))
                    {
                        this.element = form;
                        options.callbacks.CB_Error.apply(this, arguments);
                    }
                    else
                    {
                        if(!options.config.goToError) return false;
                        var $form  = form, top;
                        var e = $('.'+options.selectors.erro, $form).first();
                        if(e.offset())
                        {
                            top = e.offset().top;
                            $("html, body").animate({scrollTop:top}, '500');
                        }
                    }
                },
                /**
                 * callback field validation
                 *
                 * @param htmlElement validated field 
                 * @param string message error
                 * 
                 * @return void
                 */
                CB_Input: function(el, msg){
                    var t = el, n = t.next(), type = t.attr('type'); 

                    t.addClass(options.selectors.erro);
                    if(type==='checkbox' || type==='radio')
                    {
                        t.parent().parent().find('label').addClass(options.selectors.erro);
                        t.parent().parent().find('.'+options.selectors.msgError).show().html(msg);
                    }
                    else
                    {
                        t.parent().find('label').addClass(options.selectors.erro);
                        t.parent().find('.'+options.selectors.msgError).show().html(msg);
                    }
                },
                /**
                 * callback clear error validation - call in click btn submit
                 * before new validation
                 *
                 * @param htmlElement validated form
                 * 
                 * @return void
                 */
                CB_ClearErrors: function(form){
                    if($.isFunction( options.callbacks.CB_ClearErrors ))
                    {
                        this.element = form;
                        options.callbacks.CB_ClearErrors.apply(this, arguments);
                    }
                    else
                    {
                        if(!options.config.cleanErrors) return false;
                        var $form = form;
                        $form.find('label, input, select, textarea').removeClass(options.selectors.erro);
                        $form.find('.'+options.selectors.msgError).hide().html('');
                    }
                }
            },
            /**
             *  utility functions
             */
            util = {
                /**
                 * check if value is empty
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isEmpty: function(val){
                    return (val.length < 1 || val.length === '') ? true : false;
                },
                /**
                 * verify if has one radio or checkbox with equals name is checked
                 *
                 * @param htmlElement radion or checkbox
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                hasChecked: function(el, form){
                    var t = el, $form = form, n_c = t.attr('name');
                    return ($form.find('input[name="'+n_c+'"]:checked').length < 1) ? false : true;
                },
                /**
                 * verify if value is valid email
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isEmail: function(val){
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(val);
                }, 
                /**
                 * verify if value is interger
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isInteger: function(val){
                    var pattern = new RegExp('^[0-9]+$');
                    return pattern.test(val);
                },
                /**
                 * verify if value is digits
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isDigit: function(val){
                    var pattern = new RegExp('^[a-zA-Z0-9]+$');
                    return pattern.test(val);
                },
                /**
                 * verify if value is valid url
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isUrl: function(val){
                    var pattern = new RegExp(/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
                    return pattern.test(val);
                },
                /**
                 * verify minlength
                 *
                 * @param string value of input
                 * @param int minlength of input
                 * 
                 * @return boolean
                 */
                hasLessThan: function(val, param){
                    return (val.length < param) ? true : false;
                },
                /**
                 * verify maxlength
                 *
                 * @param string value of input
                 * @param int maxlength of input
                 * 
                 * @return boolean
                 */
                hasMoreThan: function(val, param){
                    return (val.length > param) ? true : false;
                },
                /**
                 * verify range
                 *
                 * @param string value of input
                 * @param int minlength of input
                 * @param int maxlength of input
                 * 
                 * @return boolean
                 */
                hasRangeLength: function(val, min, max){
                    return ( (val.length <= max) && (val.length >= min) ) ? true : false;
                },
                /**
                 * verify min
                 *
                 * @param string value of input
                 * @param int min
                 * 
                 * @return boolean
                 */
                isMin: function(val, param){
                    return (val < param) ? true : false;
                },
                /**
                 * verify max
                 *
                 * @param string value of input
                 * @param int max
                 * 
                 * @return boolean
                 */
                isMax: function(val, param){
                    return (val > param) ? true : false;
                },
                /**
                 * verify range
                 *
                 * @param string value of input
                 * @param int min
                 * @param int max
                 * 
                 * @return boolean
                 */
                isRange: function(val, min, max){ //return false;
                    return ( (val <= max) && (val >= min) ) ? true : false;
                },
                /**
                 * verify if parans is equal
                 *
                 * @param string value of input
                 * @param string value of input 2
                 * 
                 * @return boolean
                 */
                equalTo: function(val, param){
                    return val === param;
                },
                /**
                 * verify if parans is valid date
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isDate: function(val){
                    var check = false,
                    re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
                    adata, gg, mm, aaaa, xdata;
                    if ( re.test(val)) 
                    {
                        adata = val.split("/");
                        gg = parseInt(adata[0], 10);
                        mm = parseInt(adata[1], 10);
                        aaaa = parseInt(adata[2], 10);
                        xdata = new Date(aaaa, mm - 1, gg, 12, 0, 0, 0);
                        if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) 
                        {
                            check = true;
                        } 
                        else 
                        {
                            check = false;
                        }
                    } 
                    else 
                    {
                        check = false;
                    }
                    return check;
                },
                /**
                 * verify if parans is valid cpf
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isCpf: function(val){
                    var CPF = val, cpfv, x;  
                    if(!CPF){ return false;}
                    cpfv  = CPF;
                    if(cpfv.length == 14 || cpfv.length == 11)
                    {
                        cpfv = cpfv.replace('.', '');
                        cpfv = cpfv.replace('.', '');
                        cpfv = cpfv.replace('-', '');
             
                        var nonNumbers = /\D/;
                        
                        // apenas numeros
                        if(nonNumbers.test(cpfv))
                        {
                            return false;
                        }
                        else
                        {
                            // nada de numeros repetidos
                            if (cpfv == "00000000000" ||
                                cpfv == "11111111111" ||
                                cpfv == "22222222222" ||
                                cpfv == "33333333333" ||
                                cpfv == "44444444444" ||
                                cpfv == "55555555555" ||
                                cpfv == "66666666666" ||
                                cpfv == "77777777777" ||
                                cpfv == "88888888888" ||
                                cpfv == "99999999999") 
                            {
                                return false;
                            }
                            var a = [];
                            var b = 0;
                            var c = 11;
             
                            for(var i=0; i<11; i++)
                            {
                                a[i] = cpfv.charAt(i);
                                if (i < 9) b += (a[i] * --c);
                            }
                            if((x = b % 11) < 2)
                            {
                                a[9] = 0;
                            }
                            else
                            {
                                a[9] = 11-x;
                            }
                            b = 0;
                            c = 11;
                            for (var y=0; y<10; y++) b += (a[y] * c--);
               
                            if((x = b % 11) < 2)
                            {
                                a[10] = 0;
                            }
                            else
                            {
                                a[10] = 11-x;
                            }
                            // cpf invalido
                            if((cpfv.charAt(9) != a[9]) || (cpfv.charAt(10) != a[10]))
                            {
                                return false;
                            }
                        }
                    }
                    else
                    {
                        // campo vazio 
                        if(cpfv.length === 0)
                        {
                            return false;
                        
                        }
                        // cpf invalido
                        else
                        {
                            return false;
                        }
                    }
                    return true;
                },
                /**
                 * verify if parans is valid cnpj
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isCnpj: function(val){
                    var str = val, 
                        numeros, digitos, soma, i, resultado, pos, tamanho, 
                        digitos_iguais, cnpj;

                    str  = str.replace('.','');
                    str  = str.replace('.','');
                    str  = str.replace('.','');
                    str  = str.replace('-','');
                    str  = str.replace('/','');
                    cnpj = str;
                    
                    digitos_iguais = 1;
                    if (cnpj.length < 14 && cnpj.length < 15)
                        return false;
                    for (i = 0; i < cnpj.length - 1; i++)
                        if (cnpj.charAt(i) != cnpj.charAt(i + 1))
                        {
                            digitos_iguais = 0;
                            break;
                        }

                    if (!digitos_iguais)
                    {
                        tamanho = cnpj.length - 2
                        numeros = cnpj.substring(0,tamanho);
                        digitos = cnpj.substring(tamanho);
                        soma = 0;
                        pos = tamanho - 7;
                        for (i = tamanho; i >= 1; i--)
                        {
                            soma += numeros.charAt(tamanho - i) * pos--;
                            if (pos < 2)
                                pos = 9;
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(0))
                            return false;
                        tamanho = tamanho + 1;
                        numeros = cnpj.substring(0,tamanho);
                        soma = 0;
                        pos = tamanho - 7;
                        for (i = tamanho; i >= 1; i--)
                        {
                            soma += numeros.charAt(tamanho - i) * pos--;
                            if (pos < 2)
                                pos = 9;
                        }
                        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
                        if (resultado != digitos.charAt(1))
                            return false;
                        return true;
                    }
                    else
                        return false;
                },
                /**
                 * verify if parans is valid cep
                 *
                 * @param string value of input
                 * formatos : 99999-999, 99.999-999, 99999999
                 * 
                 * @return boolean
                 */
                isCep: function(val){
                    return /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(val);
                },
                /**
                 * verify if parans is valid phone
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isPhone: function(val){
                    var value = val.replace(/[\(\)\-_ \+]/g,'');
                    return /^([0-9]{8,14})$/.test(value);
                },
                /**
                 * verify if parans is valid creditcard
                 *
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                isCreditCard: function(val){
                    if ( /[^0-9 \-]+/.test( val ) ) 
                    {
                        return false;
                    }
                    var nCheck = 0,
                        nDigit = 0,
                        bEven = false,
                        n, cDigit;

                    var value = val.replace( /\D/g, "" );

                    if ( value.length < 13 || value.length > 19 ) 
                    {
                        return false;
                    }

                    for ( n = value.length - 1; n >= 0; n--) 
                    {
                        cDigit = value.charAt( n );
                        nDigit = parseInt( cDigit, 10 );
                        if ( bEven ) 
                        {
                            if ( ( nDigit *= 2 ) > 9 ) 
                            {
                                nDigit -= 9;
                            }
                        }
                        nCheck += nDigit;
                        bEven = !bEven;
                    }

                    return ( nCheck % 10 ) === 0;
                },
                /**
                 * verify if second param has extension of first param
                 *
                 * @param array of extensions
                 * @param string value of input
                 * 
                 * @return boolean
                 */
                hasExt : function(exts, val){
                    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(val);
                }
            },
            /**
             *  validation roles
             */
            funcs = {
                /**
                 * checks if any field .required is empty
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                required: function(form){
                    var $form = form, error = false, s = options.selectors.required;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this), type = t.attr('type');

                        // input checkbox and radio
                        if(type === 'checkbox' || type === 'radio')
                        {
                            if( !util.hasChecked(t, $form) )
                            {
                                callbacks.CB_Required(t, options.messages.required);
                                error = true;
                            }
                        }
                        // other inputs
                        else
                        {
                            if(util.isEmpty(t.val()))
                            {
                                callbacks.CB_Required(t, options.messages.required);
                                error = true;
                            }
                        }
            
                    });

                    return error;
                },
                /**
                 * checks if any field .email is email
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                email : function(form){
                    var $form = form, error = false, s = options.selectors.email;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isEmpty(t.val()) && !util.isEmail(t.val()) )
                        {
                            callbacks.CB_Email(t, options.messages.email);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .integer is a integer
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                integer : function(form){
                    var $form = form, error = false, s = options.selectors.integer;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isInteger(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Integer(t, options.messages.integer);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .digits is a digit
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                digit : function(form){
                    var $form = form, error = false, s = options.selectors.digit;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isDigit(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Digit(t, options.messages.digit);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .url is url
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                url : function(form){
                    var $form = form, error = false, s = options.selectors.url;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isUrl(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Url(t, options.messages.url);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .minlength is less than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                minlength : function(form){
                    var $form = form, error = false, s = options.selectors.minlength;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var data = (t.data('minlength')  && parseInt(t.data('minlength')) )  ? t.data('minlength') : options.config.minlength;
                        if( util.hasLessThan(t.val(), data) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_Minlength(t, options.messages.minlength);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .maxlength is more than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                maxlength : function(form){
                    var $form = form, error = false, s = options.selectors.maxlength;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var data = (t.data('maxlength')  && parseInt(t.data('maxlength')) )  ? t.data('maxlength') : options.config.maxlength;
                        if( util.hasMoreThan(t.val(), data) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_Maxlength(t, options.messages.maxlength);
                            error = true;
                        }
                    });

                    return error;
                }, 
                /**
                 * checks if any field .maxlength is more than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                rangelength : function(form){
                    var $form = form, error = false, s = options.selectors.rangelength;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var max = (t.data('maxlength')  && parseInt(t.data('maxlength')) )  ? t.data('maxlength') : options.config.maxlength;
                        var min = (t.data('minlength')  && parseInt(t.data('minlength')) )  ? t.data('minlength') : options.config.minlength;
                        if( !util.hasRangeLength(t.val(), min, max) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_RangeLength(t, options.messages.rangelength);
                            error = true;
                        }
                    });

                    return error;
                }, 
                /**
                 * checks if any field .min is less than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                wm_min : function(form){
                    var $form = form, error = false, s = options.selectors.min;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var data = (t.data('min')  && parseInt(t.data('min')) )  ? t.data('min') : options.config.min;
                        if( util.isMin(t.val(), data) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_Min(t, options.messages.min);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .max is more than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                wm_max : function(form){
                    var $form = form, error = false, s = options.selectors.max;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var data = (t.data('max')  && parseInt(t.data('max')) )  ? t.data('max') : options.config.max;
                        if( util.isMax(t.val(), data) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_Max(t, options.messages.max);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .maxlength is more than param
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                range : function(form){
                    var $form = form, error = false, s = options.selectors.range;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        var max = (t.data('max')  && parseInt(t.data('max')) )  ? t.data('max') : options.config.max;
                        var min = (t.data('min')  && parseInt(t.data('min')) )  ? t.data('min') : options.config.min;
                        if( !util.isRange(t.val(), min, max) && !util.isEmpty(t.val())  )
                        {
                            callbacks.CB_Range(t, options.messages.range);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .equalTo is equal data-target field
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                equalTo : function(form){
                    var $form = form, error = false, s = options.selectors.equalTo;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( t.data('target') && !util.equalTo( t.val(), $('.'+t.data('target')).val() ) )
                        {
                            callbacks.CB_EqualTo($('.'+t.data('target')), options.messages.equalTo);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .date is valid date
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                date : function(form){
                    var $form = form, error = false, s = options.selectors.date;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isDate(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Date(t, options.messages.date);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .cpf is valid cpf
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                cpf : function(form){
                    var $form = form, error = false, s = options.selectors.cpf;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isCpf(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Cpf(t, options.messages.cpf);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .cnpj is valid cnpj
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                cnpj : function(form){
                    var $form = form, error = false, s = options.selectors.cnpj;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        if( !util.isCnpj(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Cnpj(t, options.messages.cnpj);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .cep is valid cep
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                cep : function(form){
                    var $form = form, error = false, s = options.selectors.cep;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        if( !util.isCep(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Cep(t, options.messages.cep);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .cep is valid phone
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                phone : function(form){
                    var $form = form, error = false, s = options.selectors.phone;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        if( !util.isPhone(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Phone(t, options.messages.phone);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * checks if any field .creditcard is valid creditcard
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                creditcard : function(form){
                    var $form = form, error = false, s = options.selectors.creditcard;

                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);
                        if( !util.isCreditCard(t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_CreditCard(t, options.messages.creditcard);
                            error = true;
                        }
                    });

                    return error;
                },
                /**
                 * verify if extension is valid
                 *
                 * @param htmlElement form container
                 * 
                 * @return boolean
                 */
                extension : function(form){
                    var $form = form, error = false, s = options.selectors.extension;
                    $form.find('input.'+s+',select.'+s+',textarea.'+s).each(function(){
                        var t = $(this);

                        var ext = (t.data('extensions')  && !util.isEmpty(t.data('extensions')) )  ? t.data('extensions') : options.config.extensions;
                        var ar_ext = ext.split(',');

                        if( !util.hasExt(ar_ext, t.val()) && !util.isEmpty(t.val()) )
                        {
                            callbacks.CB_Extension(t, options.messages.extension);
                            error = true;
                        }
                    });

                    return error;
                }
            };

            return this.each(function () {
                var $form = $(this);

                $form.find('.'+options.selectors.msgError).hide();

                $form.find('.'+options.selectors.submit).click(function(){
                    var error  = 0;

                    // before validate
                    callbacks.CB_BeforeValidate();

                    // clear erros
                    callbacks.CB_ClearErrors($form);

                    // required
                    if( funcs.required($form) ) error++;

                    // email
                    if( funcs.email($form) ) error++;

                    // integer
                    if( funcs.integer($form) ) error++;

                    // digit
                    if( funcs.digit($form) ) error++;

                    // url
                    if( funcs.url($form) ) error++;

                    // minlength
                    if( funcs.minlength($form) ) error++;

                    // maxlength
                    if( funcs.maxlength($form) ) error++;

                    // rangelength
                    if( funcs.rangelength($form) ) error++;

                    // min
                    if( funcs.wm_min($form) ) error++;

                    // max
                    if( funcs.wm_max($form) ) error++;

                    // range
                    if( funcs.range($form) ) error++;

                    // equalTo
                    if( funcs.equalTo($form) ) error++;

                    // date
                    if( funcs.date($form) ) error++;

                    // cpf
                    if( funcs.cpf($form) ) error++;

                    // cnpj
                    if( funcs.cnpj($form) ) error++;

                    // cep
                    if( funcs.cep($form) ) error++;

                    // phone
                    if( funcs.phone($form) ) error++;

                    // creditcard
                    if( funcs.creditcard($form) ) error++;

                    // extension
                    if( funcs.extension($form) ) error++;

                    // after validate
                    callbacks.CB_AfterValidate();

                    if(error>0)
                    {
                        callbacks.CB_Error($form);
                    }
                    else
                    {
                        $form.submit();
                    }
                    return false;
                });
            });
        }
    });
})(jQuery);