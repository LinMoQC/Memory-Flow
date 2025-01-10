import React, { ForwardRefRenderFunction, useImperativeHandle, useMemo } from "react";
import { Form as AntdForm, DatePicker, Input } from 'antd';
import dayjs from "dayjs";
import { CommonComponentProps } from "../../components/editor/interface";

interface FormItemProps extends CommonComponentProps {
    onFinish: (value: any) => void
}

export interface FormRef {
    submit: () => void
}

const FormItem: ForwardRefRenderFunction<FormRef, FormItemProps> = ({ children, onFinish }, ref) => {
    const [form] = AntdForm.useForm();

    useImperativeHandle(ref, () => {
        return {
            submit: () => {
                form.submit();
            }
        }
    }, [form]);

    const formItems = useMemo(() => {
        return React.Children.map(children, (item: any) => {
            return {
                label: item.props?.label,
                name: item.props?.name,
                type: item.props?.type,
                id: item.props?.id,
                rules: item.props?.rules,
            }
        });
    }, [children]);

    async function save(values: any) {
        Object.keys(values).forEach(key => {
            if (dayjs.isDayjs(values[key])) {
                values[key] = values[key].format('YYYY-MM-DD')
            }
        })

        onFinish(values);
    }

    return <AntdForm name='form' labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} form={form} onFinish={save}>
        {formItems.map((item: any) => {
            return (
                <AntdForm.Item
                    key={item.name}
                    name={item.name}
                    label={item.label}
                    rules={
                        item.rules === 'required' ? [{
                            required: true,
                            message: '不能为空'
                        }] : []
                    }
                >
                    {item.type === 'input' && <Input />}
                    {item.type === 'date' && <DatePicker />}
                </AntdForm.Item>
            )
        })}
    </AntdForm>
}

export default FormItem