"use client";
import { useFormik } from "formik";
import Input from "@/ui/Input/Input";
import FormBlock from "@/ui/FormBlock/FromBlock";
import Button from "@/ui/Button/Button";
import { exchangeRatesToRub } from "@/content/currency";

const ConvertForm = () => {
    // const getExchangeResult = async () => {};

    // Form settimgs
    const convertForm = useFormik({
        initialValues: {
            currentCurrency: "",
            toConvertCurrency: "",
        },
        onSubmit: async (values) => {
            let rubInAed = 0 | exchangeRatesToRub.AED;
            try {
                await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
                    .then((response) => response.json())
                    .then((data) => {
                        rubInAed = data.Valute.AED.Value;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } catch (err) {
                console.error(err);
                rubInAed = exchangeRatesToRub.AED;
            }

            const result = Number.parseFloat(values.currentCurrency) * rubInAed;
            convertForm.setFieldValue("toConvertCurrency", result.toFixed(2));
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
                    numeric={true}
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
