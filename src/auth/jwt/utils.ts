import axios from "@/utils/axios";


// ----------------------------------------------------------------------
// mã hóa accessToken để láy ra các thông tin bị ẩn bên trong
function jwtDecode(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
  
    return JSON.parse(jsonPayload);
  }
// ----------------------------------------------------------------------

export const isValidToken = (accessToken: string) => {
    if (!accessToken) {
      return false;
    }
  
    const decoded = jwtDecode(accessToken);
  
    const currentTime = Date.now() / 1000; // chuyển time từ milisecond => milisecond
  
    return decoded.exp > currentTime; // Nếu lớn hơn current time là token còn thời hạn
  };

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
    if (accessToken) {
      sessionStorage.setItem('accessToken', accessToken);
  
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  
      // This function below will handle when token is expired
      const { exp } = jwtDecode(accessToken); // ~3 days by minimals server
    //   tokenExpired(exp);
    } else {
      sessionStorage.removeItem('accessToken');
  
      delete axios.defaults.headers.common.Authorization;
    }
  };