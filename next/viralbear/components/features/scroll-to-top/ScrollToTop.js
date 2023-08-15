import { useEffect } from "react";
import { useRouter  } from "next/router";

const ScrollToTop = () => {
    const { pathname } = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
