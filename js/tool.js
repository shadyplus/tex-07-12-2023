// Это нужно при подключениии
//
//1) Html:
//    1.1)  <div class="input-group tooltip-hide"> (включает подсказки, оба Inputa в этот див)
//1.2) Подключение скриптов:
//    <script src="js/main.js" type="text/javascript"></script>
//<script type="text/javascript" src="js/tooltips.js"></script>
//<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
//2) ЕСЛИ НЕОБХОДИМА ДРУГАЯ МАСКА и изменить подсказку, то в tooltips.js меняем
//2.1)Подсказка:
//Телефон
//    let tooltipPhone = "+91XXXXXXXXXX";
//2.2) Телефон:
// Максимальное количество цифр в номере (без учёта +)
//    let MaxLengthPhoneNumber = 12;
//let MinLengthPhoneNumber = 12;

//$(this.phoneInputs).attr('pattern','(\\+91)[0-9]{10,15}');//
//ТУТ меняем маску "(\\+91)" (если введут другие цифры, форма незапустится)
//

const $forms = document.querySelectorAll('[form]');
if ($forms) {
    const styleForm = document.createElement('style');
    styleForm.innerText = `html[dir='rtl'] input[type="tel"][name="phone"]{direction: ltr;text-align: end;}.js-error-phone {animation: error 0.8s 4 alternate;-o-animation: error 0.8s 4 alternate;-moz-animation: error 0.8s 4 alternate;-webkit-animation: error 0.8s 4 alternate;}@keyframes error {from{box-shadow: none;}to{box-shadow: 0 0 5px 3px red;}}`;
    document.body.prepend(styleForm);
}



$(document).ready(function () {
    //---------Параметры---------//

    //---------Tooltips---------//
    //Цвет подсказки
    let tooltipColor = '#e74c3c';
    //Позиция подсказки (справа/слева)
    let tooltipPosition = 'left';
    //Имя
    let tooltipName = "Nume";
    //Телефоны:

    //Венгрия:
    // let tooltipPhone = "+36XXXXXXXXX";

    //Румыния:
    //let tooltipPhone = "+40XXXXXXXXX";

    //Казахстан:
    let tooltipPhone = "+213 XXXXXXXX";

    //Молдова:
    //let tooltipPhone = "+373XXXXXXXX";

    //Индия:
    //let tooltipPhone = "+91XXXXXXXXXX";

    //Болгария:
    //let tooltipPhone = "+359XXXXXXXXX";









    //---------Phone mask---------//
    // Код страны
    let phoneCode = '+213';
    // Максимальное количество цифр в номере (без учёта +)
    let MaxLengthPhoneNumber = 18;
    // let MinLengthPhoneNumber =  13;



    // logic tooltips
    let tooltipStyle = '<style>.input-group{position:relative;}.input-group input{width:100%;box-sizing:border-box;}.input-group:before{z-index:99;content:attr(data-content)"";position:absolute;top:-15px;' + tooltipPosition + ':0;background:' + tooltipColor + ';color:#fff;border-radius:5px;padding:3px 0px;direction: ltr;font-family: Arial;font-size: 14px}.tooltip-hide.input-group:before{display: none;}</style>';
    $(document).ready(function () {
        $(document.body).append(tooltipStyle);
        $('.input-group').click(function () {
            let $input = $(this).find('input[name]');
            let currentInput = $input.attr('name');
            switch (currentInput) {
                case 'name':
                    $(this).attr('data-content', tooltipName);
                    break;
                case 'phone':
                    $(this).attr('data-content', tooltipPhone);
                    $input.addClass('only-phone');
                    $(this).on("keydown", function (t) {
                        46 == t.keyCode || 8 == t.keyCode || 9 == t.keyCode || 27 == t.keyCode || 187 == t.keyCode || 65 == t.keyCode && !0 === t.ctrlKey || 35 <= t.keyCode && t.keyCode <= 39 || (t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault();
                    });
                    break;
            }
            $(this).removeClass('tooltip-hide');
        })
    });


    // logic mask
    let mask = {
        phoneInputs: $('input[name="phone"]'),

        init: function () {
            $(this.phoneInputs).attr("maxlength", (MaxLengthPhoneNumber + 1));

            if (this.phoneInputs) {
                $(this.phoneInputs).attr('pattern','(\\+213)[0-9]{8,18}');
                $(this.phoneInputs).on('focusin', function () {
                    let code = phoneCode;
                    this.value = !(this.value.length > code.length) ? code : this.value;
                });
                $(this.phoneInputs).on('input', function () {
                    let code = phoneCode;
                    this.value.indexOf(code) && (this.value = code);
                });
            }
        },
    };
    mask.init();
});
