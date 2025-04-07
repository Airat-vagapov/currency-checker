'use client'

import { useFormik } from "formik";
import Input from "@/ui/Input/Input";

const ConvertForm = () => {
    const convertForm = useFormik({
        initialValues: {
            currentCurrency: "",
            toConvertCurrency: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="bg-lightBlack">
            <form>
                <Input
                    label="Current"
                    id="currentCurrency"
                    name="currentCurrency"
                    inptType="text"
                    onChange={convertForm.handleChange}
                    onBlur={convertForm.handleBlur}
                    value={convertForm.values.currentCurrency}
                />
            </form>
        </div>
    );
};

export default ConvertForm;
