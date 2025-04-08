"use client";
import { useFormik } from "formik";
import Input from "@/ui/Input/Input";
import FormBlock from "@/ui/FormBlock/FromBlock";
import Button from "@/ui/Button/Button";
import { exchangeRatesToRub } from "@/content/currency";

const ConvertForm = () => {
    // const getExchangeResult = async () => {};

    const convertForm = useFormik({
        initialValues: {
            currentCurrency: 0,
            toConvertCurrency: 0,
        },
        onSubmit: async (values) => {
            let rubInAed = 0 | exchangeRatesToRub.AED;
            await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.Valute);
                    rubInAed = data.Valute.AED.Value;
                })
                .catch((error) => console.error("Error:", error));

            console.log(rubInAed);
            const result = values.currentCurrency * rubInAed;
            console.log(result);
            convertForm.setFieldValue("toConvertCurrency", result);
        },
    });

    return (
        <div className="p-5 bg-lightBlack rounded-lg">
            {/* <form> */}
            <FormBlock onSubmit={convertForm.handleSubmit} grid={2}>
                <Input
                    label="AED"
                    id="currentCurrency"
                    name="currentCurrency"
                    inptType="text"
                    onChange={convertForm.handleChange}
                    onBlur={convertForm.handleBlur}
                    value={convertForm.values.currentCurrency}
                />
                <Input
                    label="RUB"
                    id="toConvertCurrency"
                    name="toConvertCurrency"
                    inptType="text"
                    onChange={convertForm.handleChange}
                    onBlur={convertForm.handleBlur}
                    value={convertForm.values.toConvertCurrency}
                />
                <div className="flex items-center justify-center col-span-2">
                    <Button css={"w-full"} btnType="submit" text="Convert" />
                </div>
            </FormBlock>
            {/* </form> */}
        </div>
    );
};

export default ConvertForm;
