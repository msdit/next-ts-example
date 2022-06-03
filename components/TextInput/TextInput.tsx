import {FC, InputHTMLAttributes} from 'react';
import { createElement } from 'react';

interface ITextInputProps extends Omit<InputHTMLAttributes<Element>, 'type'> {

}

const TextInput: FC<ITextInputProps> = (props) => {
    return <input {...props} type="text" />
    // return createElement('input', {
    //     ...props,
    //     type: 'text'
    // })
};

export default TextInput;
