"use client";
import { useFormik } from "formik";
import Input from "@/ui/Input/Input";
import FormBlock from "@/ui/FormBlock/FromBlock";
import Button from "@/ui/Button/Button";
import ConvertResult from "@/components/ConvertResult/ConvertResult";
import { exchangeRatesToRub } from "@/content/currency";
import { useState } from "react";
import { ConvertResultType } from "@/types/general";

const ConvertForm = () => {
    // States
    const [convertResult, setConvertResult] = useState<ConvertResultType>({})

    // Form settimgs
    const convertForm = useFormik({
        initialValues: {
            currentCurrency: "",
            // toConvertCurrency: "",
        },
        onSubmit: async (values) => {
            let rubInAed = 0 | exchangeRatesToRub.AED;
            let rubInUsd = 0 | exchangeRatesToRub.USD;
            let rubInKzt = 0 | exchangeRatesToRub.KZT;
            try {
                await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
                    .then((response) => response.json())
                    .then((data) => {
                        rubInAed = data.Valute.AED.Value / data.Valute.AED.Nominal;
                        rubInUsd = data.Valute.USD.Value / data.Valute.USD.Nominal;
                        rubInKzt = data.Valute.KZT.Value / data.Valute.KZT.Nominal;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } catch (err) {
                console.error(err);
                rubInAed = exchangeRatesToRub.AED;
            }

            const resultAed = Number.parseFloat(values.currentCurrency) * rubInAed; 
            // convertForm.setFieldValue("toConvertCurrency", resultAed.toFixed(2));

            const resultObj: ConvertResultType = {
                'RUB': resultAed.toFixed(2),
                'USD': (resultAed / rubInUsd).toFixed(2),
                'KZT': (resultAed / rubInKzt).toFixed(2),
            }
            console.log(resultObj)
            setConvertResult(resultObj)
        },
    });

    return (
        <div className="p-5 bg-lightBlack rounded-lg flex flex-col gap-5">
            <FormBlock onSubmit={convertForm.handleSubmit} grid={1}>
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
                {/* <Input
                    label="RUB"
                    id="toConvertCurrency"
                    name="toConvertCurrency"
                    inptType="text"
                    onChange={convertForm.handleChange}
                    onBlur={convertForm.handleBlur}
                    value={convertForm.values.toConvertCurrency}
                /> */}
                <div className="flex items-center justify-center col-span-2">
                    <Button css={"w-full"} btnType="submit" text="Convert" />
                </div>
            </FormBlock>
            {Object.keys(convertResult).length > 0 &&
                <ConvertResult
                    data={convertResult}
                />
            }

        </div>
    );
};

export default ConvertForm;
