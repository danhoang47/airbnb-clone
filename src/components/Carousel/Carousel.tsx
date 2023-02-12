import { ReactNode } from "react";

type CarouselProps = {
    autoSlide?: boolean
    hasIndicators?: boolean
    children?: ReactNode
}

export default function Carousel({
    autoSlide = true,
    hasIndicators = true,
    children
}: CarouselProps) {
    return (
        <div className="carousel">

        </div>
    );
}


