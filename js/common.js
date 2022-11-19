function parseQueryString() {
    if (window.location.search.length === 0) {
        return {};
    } else {
        const queryStringObject = {};
        const queryString = window.location.search
            .substring(1)
            .split("&");

        for (const s of queryString) {
            const q = s.split("=");
            queryStringObject[q[0]] = q[1];
        }

        return queryStringObject;
    }
}