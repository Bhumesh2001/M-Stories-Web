import React, { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // don't render on server
    return children;
};

export default ClientOnly;
