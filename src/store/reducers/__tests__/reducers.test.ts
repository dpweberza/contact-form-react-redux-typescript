import reducer from '../contactform';
import {
    storeContactFormDetails,
    clearContactFormDetails
} from '../../actions';

describe('contactform reducer', () => {
    it('should create valid actions', () => {
        const sampleDetails = { fullName: 'David Weber' };
        expect(
            reducer(undefined, storeContactFormDetails(sampleDetails))
        ).toEqual({ details: sampleDetails });

        expect(
            reducer(undefined, clearContactFormDetails())
        ).toEqual({ details: null });
    });
});