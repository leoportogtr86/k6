import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    // vus: 10, //usuarios simultaneos
    // duration: '30s', //por 30 segundos
    stages: [
        { duration: '3s', target: 20 },
        { duration: '10s', target: 10 },
        { duration: '4s', target: 15 },
    ]
};

export default function () {
    const res = http.get('https://test.k6.io');
    check(res, { 'status was 20': (r) => r.status == 200 });
    sleep(1);
}
