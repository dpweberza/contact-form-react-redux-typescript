import { email, required, minLength } from '../validators';

describe('validator tests', () => {
    it('validates email addresses', () => {
        expect(email('1')).toBeTruthy();
        expect(email('invalidemail@')).toBeTruthy();
    
        expect(email(null)).toBeUndefined();
        expect(email('dpweberza@gmail.com')).toBeUndefined();
    });
    
    it('validates required values', () => {
        expect(required(null)).toBeTruthy();
        expect(required('')).toBeTruthy();
    
        expect(required('a')).toBeUndefined();
    });
    
    it('validates minimum lengths', () => {
        expect(minLength(3)('ab')).toBeTruthy();
        expect(minLength(1)('a')).toBeUndefined();
    });
});