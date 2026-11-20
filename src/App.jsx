import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CloudIcon from '@mui/icons-material/Cloud'
import './App.css'

let cancelAxios = null

function App() {
  const { t, i18n } = useTranslation()
  const [dateAndTime, setDateAndTime] = useState('')
  const [temp, setTemp] = useState({
    number: null,
    description: '',
    min: null,
    max: null,
    icon: null,
  })
  const [locale, setLocale] = useState('ar')

  useEffect(() => {
    setDateAndTime(moment().format('dddd l'))
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=33.5104&lon=36.2783&appid=bf836c72b8fd86cdd2ab8d5e04cc39c6',
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c
          }),
        },
        { params: { postId: 5 } },
      )
      .then((response) => {
        const responseTemp = Math.round(response.data.main.temp - 273.15)
        const description = response.data.weather[0].description
        const min = Math.round(response.data.main.temp_min - 273.15)
        const max = Math.round(response.data.main.temp_max - 273.15)
        const icon = response.data.weather[0].icon
        setTemp({ number: responseTemp, description, min, max, icon })
        console.log(responseTemp)
      })
      .catch((error) => {
        console.error(error)
      })

    return () => {
      cancelAxios()
    }
  }, [])

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  function handleLanguageClick() {
    const newLocale = i18n.language === 'en' ? 'ar' : 'en'
    setLocale(newLocale)
  }

  return (
    <div className="App">
      <Container maxWidth="md">
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundColor: '#464747',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0px 11px 1px rgba(0, 0, 0, 0.05)',
            }}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h2"
                  style={{ marginRight: '40px', fontWeight: '600' }}
                >
                  {t('Damascus')}
                </Typography>
                <Typography
                  dir="ltr"
                  variant="h5"
                  style={{ marginLeft: '40px', fontSize: '20px' }}
                  value={dateAndTime}
                >
                  {dateAndTime}
                </Typography>
              </div>
              <hr />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: '20px',
                  marginRight: '20px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                  >
                    <Typography variant="h1">{temp.number}°C</Typography>
                    <img
                      width="100px"
                      height="100px"
                      src={`https://openweathermap.org/payload/api/media/file/${temp.icon}.png`}
                      alt="Weather Icon"
                    />
                  </div>
                  <Typography variant="h6">{t(temp.description)}</Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignContent: 'center',
                    }}
                  >
                    <h5>
                      {t('min')}:{' '}
                      <span style={{ paddingRight: '30px' }} dir="ltr">
                        {temp.min}°C
                      </span>
                    </h5>
                    <h5>|</h5>
                    <h5>
                      {t('max')}:{' '}
                      <span style={{ paddingRight: '30px' }} dir="ltr">
                        {temp.max}°C
                      </span>
                    </h5>
                  </div>
                </div>
                <CloudIcon style={{ fontSize: '300px' }} />
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'start',
              alignContent: 'center',
              marginTop: '15px',
            }}
          >
            <Button
              variant="text"
              style={{ color: 'white', backgroundColor: '#464747' }}
              onClick={handleLanguageClick}
            >
              {i18n.language === 'en' ? 'Ar' : 'En'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
