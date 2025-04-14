import { ConvertResultType } from "@/types/general";

type ConvertResultProps = {
    data: ConvertResultType
}


const ConvertResult: React.FC<ConvertResultProps> = ({ data }) => {
    const dataArr = Object.entries(data)

    return (
        <div className="flex flex-col gap-4">
            Results
            <div className="flex flex-col gap-2">
                {dataArr && dataArr.map(([currency, value], index) => {
                    return (
                        <div key={index}>
                            {currency} - {value}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ConvertResult;