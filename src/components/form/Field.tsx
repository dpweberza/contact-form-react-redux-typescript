import { GenericField, Field } from 'redux-form';

/**
 * Custom ReduxForm Field object which supports passing in custom props to appease the TypeScript compiler god.
 * See github issue for redux-form typings: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18279
 */
export interface CustomFieldProps {
    name: string;
    type?: string;
    label: string;
    componentClass?: string;
}

const CustomField = Field as new () => GenericField<CustomFieldProps>;

export default CustomField;