import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';

const ChangeLang = () => {
    const [selectedOption, setSelectedOption] = useState('');
   let{t,i18n} = useTranslation('common')

    const languages = [
        {code :'en', lang : 'English'},
        {code :'hi', lang : 'Hindi'},
        {code :'de', lang : 'German'},

    ]

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value)
      };

  return (
    <div>
        <select style={{padding:"10px"}} name="" id=""  value={selectedOption} onChange={handleChange}>
            <option value="">{t("select language")}</option>
            {
                languages.map((lan) => {
                    return <option key={lan.code} value={lan.code}>{lan.lang}</option>
                })
            }
        </select>
    </div>
  )
}

export default ChangeLang