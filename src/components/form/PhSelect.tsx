import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TOption = {
    value: string | number;
    label: string | number;
    disabled?: boolean;
}
type TSelectType = {
    label?: string;
    options: TOption[];
    name: string;
}
export default function PhSelect({ label, options, name }: TSelectType) {

    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <Form.Item
                    
                    label={label} layout="vertical">
                        <Select
                            style={{ width: '100%' }}
                            {...field}
                            options={options}
                        />
                    </Form.Item>
                    {error && <small style={{ color: 'red' }}>{error.message}</small>}
                    <br />
                </div>
            )}
        />


    );
}