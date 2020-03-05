import React from "react"
import {css} from "@emotion/core"
import {useForm} from "react-hook-form";

const ContactForm = () => {
    const {register, handleSubmit, watch, errors} = useForm({validateCriteriaMode: "all"});
    const onSubmit = data => {
        console.log(data)
    };

    console.log(watch('Name'));

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            css={css`
                grid-area: form;
                `}
        >
            <label htmlFor="Name">Name</label>
            <input name="Name" defaultValue="Name" ref={register({required: true})}/>
            <label htmlFor="Email">Email</label>
            <input name="Email" defaultValue="Email" ref={register({
                required: true,
                pattern: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/i
            })}/>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" defaultValue="Message" ref={register({required: true})}/>
            <input type="submit"/>
            {errors.Name && <span>This field is required</span>}
            {errors.Message && <span>This field is required</span>}
            {errors.Email && errors.Email.types.pattern && (<span>Please enter a valid Email</span>)}
        </form>
    )
};

export default ContactForm