const URLs: Record<string, string> = {
    contact: "https://formspree.io/f/xeqnkary",
    quote: "https://formspree.io/f/mzbogeol",
};

interface IContactMeEmailResult {
    error: string;
    ok: boolean;
    status: number;
}

export const sendContactMeMail = async (
    email: string,
    text: string,
): Promise<IContactMeEmailResult> => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", text);
    const response = await fetch(URLs.contact, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    });
    const res = await response.json();
    const result: IContactMeEmailResult = {
        ok: response.ok,
        status: response.status,
        error:
            res?.["errors"]
                ?.map((error: Record<string, any>) => error["message"])
                .join(", ") || "",
    };
    return result;
};

export const sendQuote = async (
    text: string,
): Promise<IContactMeEmailResult> => {
    const formData = new FormData();
    formData.append("message", text);
    formData.append("email", "pzeinstein@gmail.com");
    const response = await fetch(URLs.quote, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    });
    const res = await response.json();
    const result: IContactMeEmailResult = {
        ok: response.ok,
        status: response.status,
        error:
            res?.["errors"]
                ?.map((error: Record<string, any>) => error["message"])
                .join(", ") || "",
    };
    return result;
};
