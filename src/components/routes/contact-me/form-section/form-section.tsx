import {ChangeEvent, FC, FormEvent, useState} from "react";
import {sendContactMeMail} from "../../../../api-calls/send-email";

interface FormSectionProps {}

const FormSection: FC<FormSectionProps> = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState({
        email: true,
        message: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState("");
    const validateEmail = (email: string) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsValid({
            ...isValid,
            email: validateEmail(e.target.value),
        });
    };
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setIsValid({
            ...isValid,
            message: e.target.value.length > 0,
        });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, message);
        setIsLoading(true);
        const response = await sendContactMeMail(email, message);
        console.log(response);
        if (response.ok) {
            setResult("thanks for contacting me! I'll get back to you soon!");
            setEmail("");
            setMessage("");
            setIsValid({
                email: true,
                message: true,
            });
            setTimeout(() => {
                setResult("");
            }, 7000);
        } else {
            setResult("something went wrong, please try again");
        }
        setIsLoading(false);
    };
    return (
        <section className="w-10/12 md:w-5/12 p-4 text-white">
            <form
                onSubmit={handleSubmit}
                className="w-full flex justify-center items-start content-start flex-wrap flex-row backdrop-blur-md rounded-md p-2">
                <div className="w-full m-1 flex justify-center items-center content-center">
                    <h2 className="text-2xl font-bold text-center">
                        Contact Me
                    </h2>
                </div>
                <div className="w-full m-1 flex justify-center items-center content-center">
                    <div
                        className={`w-full h-11 flex justify-center items-center rounded-md border-[3px] text-slate-700 placeholder:text-indigo-500 bg-white p-2 ${
                            isValid.email
                                ? "border-indigo-700"
                                : "border-red-600"
                        }`}>
                        <input
                            className="w-full h-full bg-transparent border-none outline-none"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={onEmailChange}
                        />
                    </div>
                </div>
                <div className="w-full m-1 flex justify-center items-center content-center">
                    <div
                        className={`w-full flex justify-center items-center rounded-md text-slate-700 border-[3px]  placeholder:text-indigo-500 bg-white p-2 ${
                            isValid.message
                                ? "border-indigo-700"
                                : "border-red-600"
                        }`}>
                        <textarea
                            className="w-full bg-transparent border-none outline-none"
                            rows={6}
                            value={message}
                            onChange={onMessageChange}
                            placeholder="message ..."></textarea>
                    </div>
                </div>
                <div className="w-full m-1 flex justify-center items-center content-center">
                    <p className="text-sm text-center">{result}</p>
                </div>
                <div className="w-full m-1 flex justify-center items-center content-center">
                    <button
                        disabled={
                            !isValid.email ||
                            !isValid.message ||
                            !email ||
                            !message
                        }
                        className="w-full h-10 flex justify-center items-center rounded-md text-white bg-indigo-500 hover:bg-indigo-600 p-1"
                        type="submit">
                        {isLoading ? (
                            <span className="animate-spin">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-loader">
                                    <line x1="12" y1="2" x2="12" y2="6"></line>
                                    <line
                                        x1="12"
                                        y1="18"
                                        x2="12"
                                        y2="22"></line>
                                    <line
                                        x1="4.93"
                                        y1="4.93"
                                        x2="7.76"
                                        y2="7.76"></line>
                                    <line
                                        x1="16.24"
                                        y1="16.24"
                                        x2="19.07"
                                        y2="19.07"></line>
                                    <line x1="2" y1="12" x2="6" y2="12"></line>
                                    <line
                                        x1="18"
                                        y1="12"
                                        x2="22"
                                        y2="12"></line>
                                    <line
                                        x1="4.93"
                                        y1="19.07"
                                        x2="7.76"
                                        y2="16.24"></line>
                                    <line
                                        x1="16.24"
                                        y1="7.76"
                                        x2="19.07"
                                        y2="4.93"></line>
                                </svg>
                            </span>
                        ) : (
                            "send"
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormSection;
