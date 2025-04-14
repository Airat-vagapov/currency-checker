import { US } from 'country-flag-icons/react/3x2'
import { KZ } from 'country-flag-icons/react/3x2'
import { RU } from 'country-flag-icons/react/3x2'

import { countryByValute } from '@/data/global'

type CountryIconProps = {
    valute: string
}

const CountryIcon: React.FC<CountryIconProps> = ({ valute }) => {

    console.log(countryByValute)
    console.log(valute)
    console.log(countryByValute[valute])
    return (
        <>
            {valute &&
                <div className='bg-orange rounded-full w-10 h-10 flex items-center justify-center'>
                    {countryByValute[valute] === 'RU' && <RU title="Russian Federation" className='w-[20px]'></RU>}
                    {countryByValute[valute] === 'US' && <US title="United States" className='w-[20px]'></US>}
                    {countryByValute[valute] === 'KZ' && <KZ title="Kazakhtan" className='w-[20px]'></KZ>}
                </div>
            }
        </>
    )
}

export default CountryIcon;