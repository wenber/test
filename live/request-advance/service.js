import axios from 'axios';

let initialPromise;

// 提前请求
export function fetchDataAdvance(params = {}) {
    if (initialPromise) {
        return initialPromise;
    }
    // eslint-disable-next-line no-async-promise-executor
    initialPromise = new Promise(async function (resolve) {
        try {
            const res = await axios.get('/rest/wd/live/valentine/enter', {
                params
            });
            resolve(res.data);
        } catch {
            resolve({});
        }
    });
    return initialPromise;
}

// 不提前请求
export function fetchDataNotAdvance(params = {}) {
    if (initialPromise) {
        return initialPromise;
    }
    // eslint-disable-next-line no-async-promise-executor
    initialPromise = new Promise(async function (resolve) {
        try {
            const res = await axios.get('/rest/wd/live/valentine/polling', {
                params
            });
            resolve(res.data);
        } catch {
            resolve({});
        }
    });
    return initialPromise;
}
