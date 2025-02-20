import { useState } from 'react';

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(prevFlip => !prevFlip);
    }

    return [ isFlipped, toggleFlip];
}

export default useFlip;