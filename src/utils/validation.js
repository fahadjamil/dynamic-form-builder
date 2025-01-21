export const validateField = (type, value) => {
    switch (type) {
        case 'Text':
            return value.length === 0 ? 'This field is required' : '';
        case 'Phone':
            const phoneRegex = /^\+?\d{1,4}?[-. \(\)]?(\d{1,4})?[-. \(\)]?\d{1,4}[-. \(\)]?\d{1,4}$/;
            return !phoneRegex.test(value) ? 'Invalid phone number' : '';
        case 'Dropdown':
            return value === '' ? 'Please select an option' : '';
        case 'Checkbox':
            return ''; // No validation needed for checkbox
        default:
            return '';
    }
};