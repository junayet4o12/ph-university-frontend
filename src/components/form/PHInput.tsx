import { Input } from "antd";
import { HTMLInputTypeAttribute } from "react";
import { Controller } from "react-hook-form";

interface TInputProps {
    name: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
}
export default function PHInput({ name, type, label }: TInputProps) {
    return (
        <div style={{marginBottom: '1rem'}}>
            {label ? label : null}
            <Controller
                name={name}
                render={({ field }) => (
                    <Input {...field} type={type || 'text'} />
                )}
            />

        </div>
    );
}