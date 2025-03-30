import api from "./api";


export const login = async (data) => {
        const response = await api.post('/login', data, { withCredentials: true });
        return response.data;
};

export const register = async (data) => {
        const response = await api.post('/register', data, { withCredentials: true });
        return response.data;
};



export const verifyotp = async ({ otp, token }) => {
        const response = await api.post(`/verify-otp?token=${token}`, {"otp":otp}, { withCredentials: true });
        return response.data;
};



export const sendOtp = async ({email,meth}) => {

        const response = await api.post(`/sent-otp?meth=${meth}`, {"email":email}, { withCredentials: true });
        return response.data;
};

export const newPassowrd = async ({password,token}) => {
        const response = await api.post(`/reset-paassword?token=${token}`, {"password":password}, { withCredentials: true });
        return response.data;
};

export const resentOTP = async ({email,meth}) => {
        if(meth=="reset-password"){
                meth="reset_password"
        }
        const response = await api.post(`/sent-otp?meth=${meth}`, {"email":email}, { withCredentials: true });
        return response.data;
};