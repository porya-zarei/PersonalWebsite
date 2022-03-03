import {FC, FormEvent, MouseEventHandler, useState} from "react";
import {sendQuote} from "../../../../api-calls/send-email";

interface SendQuoteFormProps {}

const SendQuoteForm: FC<SendQuoteFormProps> = () => {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState("");
    const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (
        event,
    ) => {
        event.preventDefault();
        console.log(message);
        setIsLoading(true);
        const response = await sendQuote(message);
        console.log(response);
        if (response.ok) {
            setResult("thanks for contacting me! I'll get back to you soon!");
            setMessage("");
            setTimeout(() => {
                setResult("");
            }, 7000);
        } else {
            setResult("something went wrong, please try again");
        }
        setIsLoading(false);
    };
    return (
        <div
            id="get-quote-container"
            className="w-full flex justify-center items-center flex-wrap max-w-xl m-auto rounded-md bg-indigo-700">
            <h3 className="w-full text-2xl flex justify-center items-start px-2 py-4 text-center">
                want to work together and create amazing products with me?
            </h3>
            <div className="w-full p-4 inline-block text-center whitespace-nowrap justify-center items-center">
                <div className="w-full p-1 h-10 rounded-full flex justify-center items-center bg-black bg-opacity-10">
                    <input
                        placeholder="Quote ..."
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-transparent border-none outline-none w-full h-full p-1"
                    />
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-indigo-500 rounded-full py-2 px-3 h-full flex-1 inline-flex justify-center items-center">
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
                            "Get a quote"
                        )}
                    </button>
                </div>
                <div className="w-full p-2 text-left">
                    <p className="text-slate-300 text-sm">{result}</p>
                </div>
            </div>
        </div>
    );
};

export default SendQuoteForm;
