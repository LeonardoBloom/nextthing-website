import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from 'react'

const ScrollToTopHandler = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [ pathname ]);

    return null;

}

export default ScrollToTopHandler