import axios from 'axios';

let initialPromise;

// 提前请求
// export function fetchData(params = {}) {
    // if (initialPromise) {
    //     return initialPromise;
    // }
    // // eslint-disable-next-line no-async-promise-executor
    // initialPromise = new Promise(async function (resolve) {
    //     try {
    //         const res = await axios.get('/rest/wd/live/valentine/enter', {
    //             params
    //         });
    //         resolve(res.data);
    //     } catch {
    //         resolve({});
    //     }
    // });
    // return initialPromise;

// }

export async function fetchData() {
    const ret = await axios.post('/rest/wd/live/valentine/enter');
    if (ret.result !== 1) {
        return false;
    }
    return ret.data;
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
