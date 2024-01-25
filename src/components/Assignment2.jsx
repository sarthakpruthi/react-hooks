import React, { useState, useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
// let count = 0;//should not use global variable
export function Assignment2() {
    const [, forceRender] = useState(0);

    const count = useRef(0);
    
    const handleReRender = () => {
        forceRender(Math.random());
    };
    // count++;
    count.current = count.current + 1;

    return (
        <div>
            <p>This component has rendered {count.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};