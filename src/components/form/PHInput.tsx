import { Form, Input } from "antd";
import { HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

interface TInputProps {
    name: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
}
export default function PHInput({ name, type, label }: TInputProps) {
    return (
        <div style={{paddingBottom: '1rem'}}>
            <Controller
                name={name}
                render={({ field }) => (
                   <Form.Item layout="vertical"  label={label}> <Input {...field} type={type || 'text'} /></Form.Item>
                )}
            />

        </div>
    );
}