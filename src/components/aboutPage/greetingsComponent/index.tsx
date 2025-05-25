'use client'
import {useEffect, useRef} from "react";
import GreetingsProfile from "@/components/aboutPage/greetingsComponent/greetingsProfile";
import {profiles} from "@/constants/profilesGreetings";

export default function GreetingsComponent() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);
    const speed = useRef<number>(4);
    const isResetting = useRef<boolean>(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const contentElement = contentRef.current;
        if (!scrollContainer || !contentElement) return;

        const containerWidth = scrollContainer.offsetWidth;
        const contentWidth = contentElement.scrollWidth / 2;
        const resetThreshold = contentWidth - containerWidth * 0.8;

        const animate = () => {
            if (!scrollContainer || isResetting.current) return;

            const currentScroll = scrollContainer.scrollLeft;

            if (currentScroll > resetThreshold) {
                const distanceToEnd = contentWidth - currentScroll;
                speed.current = Math.max(1, distanceToEnd * 0.08);
            }

            const newScroll = currentScroll + speed.current;

            if (newScroll >= contentWidth) {
                isResetting.current = true;

                scrollContainer.style.scrollBehavior = 'auto';
                scrollContainer.scrollLeft = 0;

                void scrollContainer.offsetHeight;

                scrollContainer.style.scrollBehavior = 'smooth';
                speed.current = 6;
                isResetting.current = false;
            } else {
                scrollContainer.scrollLeft = newScroll;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="relative w-full group">
            <div
                ref={scrollRef}
                onWheel={handleWheel}
                className="w-full overflow-x-hidden whitespace-nowrap py-2 scrollbar-hide mask-fade-out"
                style={{scrollBehavior: "smooth"}}
            >
                <div
                    ref={contentRef}
                    className="inline-flex gap-16 md:gap-20 lg:gap-24 xl:gap-28 2xl:gap-32 items-stretch px-16"
                >
                    {[...profiles, ...profiles].map((profile, idx) => (
                        <GreetingsProfile key={`${profile.name}-${idx}`} {...profile} />
                    ))}
                </div>
            </div>
        </div>
    );
}