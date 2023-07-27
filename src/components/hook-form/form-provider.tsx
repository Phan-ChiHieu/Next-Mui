import { useForm, FormProvider as Form, UseFormReturn } from "react-hook-form"

type TPropsForm = {
    children: React.ReactNode,
    methods: UseFormReturn<any>;
    _onSubmit?: VoidFunction;
}

// form provider
// https://react-hook-form.com/advanced-usage#FormProviderPerformance
export default function FormProvider({ children, methods, _onSubmit }: TPropsForm) {
    return (
        <Form {...methods}>
            <form onSubmit={_onSubmit}>
                {children}
            </form>
        </Form>
    )
}
