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
                display: flex;
                flex-flow: column;
                width: 300px;
                max-width: 380px;
                max-height: 325px;
                border: 4px solid var(--brand-color);
                border-radius: .75rem;
                box-shadow: var(--shadow-color) 3px 3px;
                margin-bottom: 2rem;
                margin-top: 4px;
                align-self: center;
                margin-left: .75rem;
                @media only screen and (min-width: 1120px) {
                  margin-left: 0;
                }
                label{
                color: var(--brand-color);
                margin-left: .5rem;
                margin-right: .5rem;
                }
                input{
                margin-bottom: .75rem;
                margin-left: .5rem;
                margin-right: .5rem;
                }
                textarea{
                margin-left: .5rem;
                margin-right: .5rem;
                }
                h4{
                margin-left: .5rem;
                margin-right: .5rem;
                }
                `}
        >
            <h4>Contact Us Today!</h4>
            <label htmlFor="Name">Name</label>
            <input name="Name" defaultValue="Name" ref={register({required: true})}/>
            <label htmlFor="Email">Email</label>
            <input name="Email" defaultValue="Email" ref={register({
                required: true,
                pattern: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/i
            })}/>
            <label htmlFor="Message">Message</label>
            <textarea name="Message" defaultValue="Message" ref={register({required: true})}/>
            <input
                type="submit"
                css={css`
                        color: #ffffff;
                        background-color: #dd4c1b;
                        border-radius: .75em;
                        padding: .8em 1.25em;
                        cursor: pointer;
                        font-weight: 700;
                        font-size: 15px;
                        letter-spacing: 2px;
                        grid-area: button;
                        border: 0;
                        width: 100px;
                        margin: 1rem auto !important;
                        &:hover, &:focus{
                          background-color: #417fb9;
                        }

                    `}
            />
            {errors.Name && <span>This field is required</span>}
            {errors.Message && <span>This field is required</span>}
            {errors.Email && errors.Email.types.pattern && (<span>Please enter a valid Email</span>)}
        </form>
    )
};

export default ContactForm