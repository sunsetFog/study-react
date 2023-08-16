import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';

function HookListen() {
    const history = useHistory();
    useEffect(() => {
        const unlisten = history.listen((historyLocation) => {
            console.log("--方式1: hook路由监听--", historyLocation);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    const location = useLocation();
    useEffect(() => {
        console.log("--方式2: hook路由监听--");
    }, [location]);
    return (
        <section>

        </section>
    )
}

export default HookListen
