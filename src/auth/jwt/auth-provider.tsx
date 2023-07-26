"use client"

import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import { ActionMapType, AuthStateType, AuthUserType } from '../types'
import { isValidToken, setSession } from './utils'
import axios, { endpoints } from '@/utils/axios'
import { AuthContext } from './auth-context'

type TProviderProps = {
    children: React.ReactNode
}

// check các case trong logic của toàn bộ sign-in sign-out
// enum (kiểu liệt kê) định nghĩa các hành động (actions) có thể xảy ra trong quá trình quản lý trạng thái đăng nhập.
// INITIAL: Hành động khởi tạo ban đầu.
enum Types {
    INITIAL = 'INITIAL',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    LOGOUT = 'LOGOUT',
}


type Payload = {
    [Types.INITIAL]: {
        user: AuthUserType
    },
    [Types.LOGIN]: {
        user: AuthUserType
    },
    [Types.REGISTER]: {
        user: AuthUserType
    },
    [Types.LOGOUT]: {
        user: AuthUserType
    }
}

const initialState: AuthStateType = {
    loading: false,
    user: null
}

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const reducer = (state: AuthStateType, action: ActionsType) => {
    if (action.type === Types.INITIAL) {
        return {
            ...state,
            user: action.payload.user
        }
    };
    if (action.type === Types.LOGIN) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.REGISTER) {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === Types.LOGOUT) {
        return {
            ...state,
            user: null,
        };
    }
    return state;
}


const STORAGE_KEY = 'accessToken';


export default function AuthProvider({ children }: TProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const initialize = useCallback(async () => {
        try {
            const accessToken = sessionStorage.getItem(STORAGE_KEY)
            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken)

                const response = await axios.get(endpoints.auth.me)
                const result = await response.data

                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: result.user
                    }
                })
            } else {
                dispatch({
                    type: Types.INITIAL,
                    payload: {
                        user: null
                    }
                })
            }
        } catch (error) {
            //
            dispatch({
                type: Types.INITIAL,
                payload: {
                    user: null
                }
            })
        }
    }, [])

    useEffect(() => {
        initialize()
    }, [initialize])


    const memoizedValue = useMemo(() => (
        {
            user: state.user
        }
    ), [state])

    return (
        <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
    )
}
