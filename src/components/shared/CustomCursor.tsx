'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            gsap.to(cursorRef.current, {
                x,
                y,
                duration: 0.1,
                ease: 'power2.out',
            });

            gsap.to(followerRef.current, {
                x,
                y,
                duration: 0.3,
                ease: 'power3.out',
            });
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-hover')
            ) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleHover);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleHover);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`pointer-events-none fixed z-[9999] top-0 left-0 w-4 h-4 rounded-full bg-[#FCECDD] mix-blend-difference transition-transform duration-200 ease-out ${isHovering ? 'scale-150' : ''
                    }`}
            />
            <div
                ref={followerRef}
                className={`pointer-events-none fixed z-[9998] top-0 left-0 w-10 h-10 rounded-full border border-[#F3A26D] opacity-20 transition-transform duration-500 ease-out ${isHovering ? 'scale-125 border-white opacity-60' : ''
                    }`}
            />
        </>
    );
};

export default CustomCursor;
