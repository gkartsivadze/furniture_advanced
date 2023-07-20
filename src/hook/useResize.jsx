import { useState } from "react";

export default function useResize() {
    const [width,setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth))

    return [width];
}