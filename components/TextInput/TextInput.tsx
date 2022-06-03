import {FC, ButtonHTMLAttributes} from 'react';
import { createElement } from 'react';

interface ITextInputProps extends Omit<ButtonHTMLAttributes<Element>, 'type'> {

}

const TextInput: FC<ITextInputProps> = (props) => {
    return <input {...props} type="text" />
    // return createElement('input', {
    //     ...props,
    //     type: 'text'
    // })
};

export default TextInput;
