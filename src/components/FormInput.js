import { useState } from "react";

const FormInput = ({label, errormessage, onChange, id, ...inputProps}) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div>
            <input
                className="peer input-field dark:input-field-dark"
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <p className="hidden peer-invalid:block peer-invalid:mb-6 peer-invalid:mt-3 text-sm text-red-600 dark:text-red-500">
                {errormessage}
            </p>
        </div>
    );
};

export default FormInput;

