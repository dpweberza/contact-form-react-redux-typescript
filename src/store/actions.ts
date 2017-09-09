export const STORE_CONTACT_FORM_DETAILS = 'STORE_CONTACT_FORM_DETAILS';
export const CLEAR_CONTACT_FORM_DETAILS = 'CLEAR_CONTACT_FORM_DETAILS';

export function storeContactFormDetails(formData: {}) {
    return { type: STORE_CONTACT_FORM_DETAILS, formData };
}

export function clearContactFormDetails() {
    return { type: CLEAR_CONTACT_FORM_DETAILS };
}