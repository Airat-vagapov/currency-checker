"use client";
import { useFormik } from "formik";
import Input from "@/ui/Input/Input";
import FormBlock from "@/ui/FormBlock/FromBlock";
import Button from "@/ui/Button/Button";
import { exchangeRatesToRub } from "@/content/currency";

const ConvertForm = () => {
    // const getExchangeResult = async () => {
    //     await axios
    //         .get(
    //             "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1N3gTqp6F8pDKY2pVzs0vBfbAgDbO6h9XQpC1Xnd&base_currency=RUB&currencies="
    //         )
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    const convertForm = useFormik({
        initialValues: {
            currentCurrency: 0,
            toConvertCurrency: 0,
        },
        onSubmit: (values) => {
            const result = values.currentCurrency * exchangeRatesToRub.AED;
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
                <Button btnType="submit" text="Convert" />
            </FormBlock>
            {/* </form> */}
        </div>
    );
};

export default ConvertForm;
