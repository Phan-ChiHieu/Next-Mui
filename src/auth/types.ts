export type ActionMapType<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    };
};


// Dùng Record dc tùy ý thêm key và value và value là bất kỳ dữ liệu nào
export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
    status?: string;
    loading: boolean;
    user: AuthUserType
}