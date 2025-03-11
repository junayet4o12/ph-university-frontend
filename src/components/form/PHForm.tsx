import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
    defaultValues?: Record<string, unknown>;
    resolver?: any;
}
type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFormConfig

export default function PHForm({ onSubmit, children, defaultValues, resolver }: TFormProps) {
    const formConfig: TFormConfig = {}
    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues
    }
    if (resolver) {
        formConfig['resolver'] = resolver
    }
    const methods = useForm(formConfig)

    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
        methods.reset()
    }
    return (
        <FormProvider {...methods}>
            <Form onFinish={methods.handleSubmit((data) => submit(data))}>
                {children}
            </Form>
        </FormProvider>
    );
}