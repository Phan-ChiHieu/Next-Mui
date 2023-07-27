"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/hook-form";
import RHFTextField from "@/components/hook-form/rhf-text-field";
import { IconButton, InputAdornment } from "@mui/material";
import Iconify from "@/components/inconify";
import { useBoolean } from "@/hooks/use-boolean";
import { useAuthContext } from "@/auth/hooks";
import { PATH_AFTER_LOGIN } from "@/config-global";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";

const defaultValues = {
  email: "demo@minimals.cc",
  password: "demo1234",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: Yup.string().required("Password is required"),
});

export default function JwtLoginView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");

  const { login } = useAuthContext();
  const password = useBoolean();
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      // viet function login
      await login(data.email, data.password);
      router.push(returnTo || PATH_AFTER_LOGIN);
    } catch (error) {}
  });

  return (
    <FormProvider methods={methods} _onSubmit={onSubmit}>
      <h1>JwtLoginView</h1>
      <RHFTextField name="email" label="Email address" />
      <RHFTextField
        name="password"
        label="Password"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </FormProvider>
  );
}
