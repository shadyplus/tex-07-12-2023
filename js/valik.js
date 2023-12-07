var countryToExampleMobileNumber = {
    AM: '+374 98 123456', // Armenia
    AR: '+54 9 11 1234 5678', // Argentina
    AZ: '+994 50 1234567', // Azerbaijan
    BA: '+387 61 123456', // Bosnia & Herzegovina
    BG: '+359 87 1234567', // Bulgaria
    BS: '+1 242 555 1234', // Bahamas
    BY: '+375 29 1234567', // Belarus
    CA: '+1 204 555 1234', // Canada
    CL: '+56 9 1234 5678', // Chile
    CO: '+57 3 123456789', // Colombia
    CR: '+506 6 345 6789', // Costa Rica
    DO: '+1 809 555 1234', // Dominican Republic
    DZ: '+213796200350', // Dominican Republic
    EC: '+593 9 123 4567', // Ecuador
    EG: '+20 10 12345678', // Egypt
    ES: '+34 612 34 56 78', // Spain
    GE: '+995 599 123456', // Georgia
    GT: '+502 3 345 6789', // Guatemala
    HN: '+504 9123-4567', // Honduras
    HR: '+385 91 2345 678', // Croatia
    IN: '+91 9X 2345 6789', // India (X denotes the second digit of the mobile operator's code)
    KE: '+254 7 1234567', // Kenya
    KG: '+996 7 1234567', // Kirghizstan
    KW: '+965 5 123 4567', // Kuwait
    KZ: '+7 707 1234567', // Kazakhstan
    LT: '+370 6 1234567', // Lithuania
    LY: '+218 91 1234567', // Libyan Arab Jamahiriya
    MA: '+212 6 12345678', // Morocco
    MD: '+373 6 1234567', // Moldova
    ML: '+223 65 12 3456', // Mali
    MX: '+52 1 55 1234 5678', // Mexico
    MY: '+60 11 1234 5678', // Malaysia
    NI: '+505 8 1234567', // Nicaragua
    NP: '+977 98 12345678', // Nepal
    OM: '+968 9 123 4567', // Oman
    PE: '+51 9 1234567', // Peru
    PH: '+63 9XX 123 4567', // Philippines (XX denotes the second and third digits of the mobile prefix)
    PL: '+48 51 123 45 67', // Poland
    QA: '+974 33 123 456', // Qatar
    SA: '+966 5 1234 5678', // Saudi Arabia
    SI: '+386 31 234 567', // Slovenia
    TH: '+66 8 1234 5678', // Thailand
    TJ: '+992 93 1234567', // Tadjikistan
    TR: '+90 5XX 123 4567', // Turkey (XX denotes the second and third digits of the mobile prefix)
    UA: '+380 50 123 4567', // Ukraine
    UZ: '+998 93 123 4567', // Uzbekistan
};
// document.addEventListener('DOMContentLoaded', function() {
//     var countrySelect = document.getElementById('country-code');
//     countrySelect.dispatchEvent(new Event('change'));
// });


document.addEventListener('DOMContentLoaded', function() {
		var selectedCountry = document.getElementById('country-code').value.toUpperCase();
    var examplePhoneNumber = countryToExampleMobileNumber[selectedCountry];
    // Проверяем, существует ли элемент с id 'phone-example'
    var phoneExampleElement = document.getElementById('phone-example');

    if (phoneExampleElement) {
        // Если элемент существует, устанавливаем текст примера номера
        phoneExampleElement.textContent = examplePhoneNumber || '';
    }
    var phoneInput = document.getElementById('phone'); // Замените 'phone' на ID вашего поля ввода

    if (phoneInput) {
        if (examplePhoneNumber) {
            phoneInput.placeholder = examplePhoneNumber;
            // } else {
            //     // Если нет примера номера, можно установить обычный placeholder
            //     phoneInput.placeholder = "+373 ......."; // Здесь устанавливается новый текст placeholder
        }
    }
    var countryCodeDisplay = document.getElementById('country-code-display');
    if (countryCodeDisplay) {
        countryCodeDisplay.textContent = '+' + libphonenumber.getCountryCallingCode(selectedCountry);
    }
});





document.getElementById('country-code').addEventListener('change', function() {

    var selectedCountry = this.options[this.selectedIndex].value.toUpperCase();

    var selectedCo = this.value;
    var examplePhoneNumber = countryToExampleMobileNumber[selectedCo];
    document.getElementById('phone-example').textContent = examplePhoneNumber || '';

    var phoneInput = document.getElementById('phone'); // Замените 'phone' на ID вашего поля ввода

    if (phoneInput) {
        if (examplePhoneNumber) {
            phoneInput.placeholder = examplePhoneNumber;
        } else {
            // Если нет примера номера, можно установить обычный placeholder
            phoneInput.placeholder = "phone"; // Здесь устанавливается новый текст placeholder
        }
    }

    document.getElementById('country-code-display').textContent = '+' + libphonenumber.getCountryCallingCode(selectedCountry);
});

document.getElementById('order_form2').addEventListener('submit', function(event) {
    event.preventDefault();

    var selectedCountry = document.getElementById('country-code').value.toUpperCase();
    var phoneNumberInput = document.getElementById('phone').value;
    var warningElement = document.getElementById('warning');

    try {
        var phoneNumber = libphonenumber.parsePhoneNumber(phoneNumberInput, selectedCountry);

        if (!phoneNumber.isValid()) {
            showErrorMessage('الرجاء إدخال رقم هاتف صالح.');
            return;
        }
    } catch (error) {
        showErrorMessage('الرجاء إدخال رقم هاتف صالح.');
        return;
    }

    document.getElementById('phone').value = phoneNumber.number; // Add the country code to the phone number input
    this.submit();
});

function showErrorMessage(message) {
    var warningElement = document.getElementById('warning');
    warningElement.textContent = message;
    warningElement.classList.add('error-animation');

    // Remove the animation class after some time
    setTimeout(function() {
        warningElement.classList.remove('error-animation');
    }, 2000);
}
