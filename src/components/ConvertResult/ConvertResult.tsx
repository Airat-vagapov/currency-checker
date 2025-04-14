import CountryIcon from '@/ui/CountryIcon/CountryIcon'

import { ConvertResultType } from "@/types/general";

type ConvertResultProps = {
    data: ConvertResultType
}


const ConvertResult: React.FC<ConvertResultProps> = ({ data }) => {
    const dataArr = Object.entries(data)

    return (
        <div className="flex flex-col gap-4">
            Convert result
            <div className="flex flex-col gap-4">
                {dataArr && dataArr.map(([currency, value], index) => {
                    return (
                        <div key={index} className='flex items-center gap-2'>
                            <CountryIcon valute={currency} />
                            {value} - {currency}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ConvertResult;