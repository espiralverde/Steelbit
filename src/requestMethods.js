import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBjODg2OTcxZmZiNzIzZjRhOWFkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzUzMTkyNSwiZXhwIjoxNjYzNzkxMTI1fQ.NA868Tzok5CSttDw5DiaivE1PQOZxue66_fvXdiw4OU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});
