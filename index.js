const Koa = require('koa');
const app = new Koa();
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

let tokens='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjeGwwMDA5MjlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdlb2lwX2NvdW50cnkiOiJVUyJ9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItdEVaQXJhSzF0UlBXdXE4bW5wWnozb2pQIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMDc4NjIyMjA2MzI2MjkyMDEyOCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzgzMzU5NjUsImV4cCI6MTY3OTU0NTU2NSwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.DqXRJfurJImcRXENwDQSCvyfGPOLbN6E9bMTqOoOmug_PMBB6N2a9WRzLJCnMhnvgS8MqbY0AlT3zH1EuFH07qWftyoxCZWWGiq0StUfccAKTOI9vBLdFA0zFFbBrHLSzWc28FibqZo9VkQ0TIB-6lf2a9TyOikGTJVrVSY3UfnLo4iOF8Zz2sAsKiI9o_wsadL0ONg2avVheHiIjFti38S5w_WHtpOvDVglhJl02yGiLwmQuUVL_JyfqnXT0ufFxMuMx9o8G1Dxks6fPaOu16KQ4B2C3_qW9qrqNFX7GdBT14iGgZrc4nZjMshxJqC0v9i0K3lkf0Xy6-l25ZQIDA'


app.use(async ctx => {
    const api = new ChatGPTUnofficialProxyAPI({
        accessToken: tokens
    })

    const res = await api.sendMessage('Hello World!')
    ctx.body = res.text;
});


app.listen(3008, () => {
    console.log('3008项目启动')
});
