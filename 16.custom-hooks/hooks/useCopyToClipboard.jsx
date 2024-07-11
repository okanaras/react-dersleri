import { useState } from 'react'

function useCopyToClipboard(text) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
    };

    // async await
    /*
        const copy = async () => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true)
            } catch (error) {
                setCopied(false)
            }
        };
     */

    return [copied, copy];
}

export default useCopyToClipboard