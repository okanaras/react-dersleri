import { useState } from 'react'

function useToggle() {
    const [status, setStatus] = useState(false);

    const handleStatus = () => {
        setStatus(!status);
    };

    return { status, handleStatus }
}

export default useToggle