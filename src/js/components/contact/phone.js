import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
    const input = document.querySelector('#phone');

    intlTelInput(input, {
        initialCountry: 'auto',
        loadUtils: () =>
            import(
                'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
            ),
    });
};
