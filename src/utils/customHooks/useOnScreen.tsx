import { useRef, useEffect, useState, Ref } from 'react';

export function useOnScreen (options: Record<string, unknown>):[Ref<HTMLDivElement>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);

        }, options);

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, visible];
}
