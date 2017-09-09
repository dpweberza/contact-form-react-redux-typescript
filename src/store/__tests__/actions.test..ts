import { 
    STORE_CONTACT_FORM_DETAILS, 
    storeContactFormDetails, 
    CLEAR_CONTACT_FORM_DETAILS, 
    clearContactFormDetails 
} from '../actions';

describe('contact form actions', () => {
    it('should create expected action', () => {
        const expectedAction = {type: STORE_CONTACT_FORM_DETAILS, formData: { fullName: 'David Paul Weber' }};
        expect(storeContactFormDetails({fullName: 'David Paul Weber'})).toEqual(expectedAction);
    });

    it('should create expected action', () => {
        const expectedAction = {type: CLEAR_CONTACT_FORM_DETAILS};
        expect(clearContactFormDetails()).toEqual(expectedAction);
    });
});