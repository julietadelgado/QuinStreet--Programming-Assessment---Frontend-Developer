import 'normalize.css';
import './css/_global.scss'

import { setupTruncateText } from './js/truncate-text.js'
import { setupUSPhoneNumber } from './js/validations-contact-form.js'
import { submitContactForm } from './js/validations-contact-form.js'

setupTruncateText(document.querySelector('.module-savings .module_description .module_trim'))
setupUSPhoneNumber(document.querySelector('.module_form input.input-us-format'))
submitContactForm(document.querySelector('.module_form form'))
