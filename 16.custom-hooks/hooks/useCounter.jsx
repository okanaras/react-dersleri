import { useState } from 'react'

function useCounter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        count > 0 ? setCount(count - 1) : null;
    };

    return { count, increase, decrease }
}

export default useCounter