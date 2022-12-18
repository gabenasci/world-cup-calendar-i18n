import { useState } from 'react'
import Card from './components/Card'
import Game from './components/Game'
import Header from './components/Header'
import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { t } = useTranslation()

  return (
    <body class="green">
      <div className="App">
        <div id="app">

          <Header title={t('calendar')} />
          <main id="cards">
            <Card date={t('date', { date: new Date("2022-11-20T13:00") })} day={t('sunday')} groupPhases={t('groupPhase')}>
              <Game player1="qatar" hour={t('time', { time: new Date("2022-11-20 13:00:00")})} player2="ecuador" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-21T13:00") })} day={t('monday')} groupPhases={t('groupPhase')}>
              <Game player1="england" hour={t('time', { time: new Date("2022-11-21 10:00:00")})} player2="iran" />
              <Game player1="senegal" hour={t('time', { time: new Date("2022-11-21 13:00:00")})} player2="netherlands" />
              <Game player1="united_states" hour={t('time', { time: new Date("2022-11-21 16:00:00")})} player2="wales" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-22T13:00") })} day={t('tuesday')} groupPhases={t('groupPhase')}>
              <Game player1="argentina" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="saudi_arabia" />
              <Game player1="denmark" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="tunisia" />
              <Game player1="mexico" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="poland" />
              <Game player1="france" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="australia" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-23T13:00") })} day={t('wednesday')} groupPhases={t('groupPhase')}>
              <Game player1="morocco" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="croatia" />
              <Game player1="germany" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="japan" />
              <Game player1="spain" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="costa_rica" />
              <Game player1="belgium" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="canada" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-24T13:00") })} day={t('thursday')} groupPhases={t('groupPhase')}>
              <Game player1="switzerland" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="cameroon" />
              <Game player1="uruguay" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="south_korea" />
              <Game player1="portugal" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="ghana" />
              <Game player1="brazil" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="serbia" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-25T13:00") })} day={t('friday')} groupPhases={t('groupPhase')}>
              <Game player1="wales" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="iran" />
              <Game player1="qatar" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="senegal" />
              <Game player1="netherlands" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="ecuador" />
              <Game player1="england" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="united_states" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-26T13:00") })} day={t('saturday')} groupPhases={t('groupPhase')}>
              <Game player1="tunisia" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="australia" />
              <Game player1="poland" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="saudi_arabia" />
              <Game player1="france" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="denmark" />
              <Game player1="argentina" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="mexico" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-27T13:00") })} day={t('sunday')} groupPhases={t('groupPhase')}>
              <Game player1="japan" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="costa_rica" />
              <Game player1="belgium" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="morocco" />
              <Game player1="croatia" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="canada" />
              <Game player1="spain" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="germany" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-28T13:00") })} day={t('monday')} groupPhases={t('groupPhase')}>
              <Game player1="cameroon" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="serbia" />
              <Game player1="south_korea" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="ghana" />
              <Game player1="brazil" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="switzerland" />
              <Game player1="portugal" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="uruguay" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-29T13:00") })} day={t('tuesday')} groupPhases={t('groupPhase')}>
              <Game player1="ecuador" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="senegal" />
              <Game player1="netherlands" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="qatar" />
              <Game player1="iran" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="united_states" />
              <Game player1="wales" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="england" />
            </Card>
            <Card date={t('date', { date: new Date("2022-11-30T13:00") })} day={t('wednesday')} groupPhases={t('groupPhase')}>
              <Game player1="tunisia" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="france" />
              <Game player1="australia" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="denmark" />
              <Game player1="poland" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="argentina" />
              <Game player1="saudi_arabia" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="mexico" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-01T13:00") })} day={t('thursday')} groupPhases={t('groupPhase')}>
              <Game player1="croatia" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="belgium" />
              <Game player1="canada" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="morocco" />
              <Game player1="japan" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="spain" />
              <Game player1="costa_rica" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="germany" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-02T13:00") })} day={t('friday')} groupPhases={t('groupPhase')}>
              <Game player1="south_korea" hour={t('time', { time: new Date("2022-11-22 07:00:00")})} player2="portugal" />
              <Game player1="ghana" hour={t('time', { time: new Date("2022-11-22 10:00:00")})} player2="uruguay" />
              <Game player1="serbia" hour={t('time', { time: new Date("2022-11-22 13:00:00")})} player2="switzerland" />
              <Game player1="cameroon" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="brazil" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-03T13:00") })} day={t('saturday')} groupPhases={t('roundOf16')}>
              <Game player1="netherlands" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="united_states" />
              <Game player1="argentina" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="australia" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-04T13:00") })} day={t('sunday')} groupPhases={t('roundOf16')}>
              <Game player1="france" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="poland" />
              <Game player1="england" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="senegal" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-05T13:00") })} day={t('monday')} groupPhases={t('roundOf16')}>
              <Game player1="japan" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="croatia" />
              <Game player1="brazil" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="south_korea" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-06T13:00") })} day={t('tuesday')} groupPhases={t('roundOf16')}>
              <Game player1="morocco" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="spain" />
              <Game player1="portugal" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="switzerland" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-09T13:00") })} day={t('friday')} groupPhases={t('quarterfinals')}>
              <Game player1="croatia" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="brazil" />
              <Game player1="netherlands" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="argentina" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-12T13:00") })} day={t('monday')} groupPhases={t('quarterfinals')}>
              <Game player1="morocco" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="portugal" />
              <Game player1="england" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="france" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-13T13:00") })} day={t('tuesday')} groupPhases={t('semifinals')}>
              <Game player1="argentina" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="croatia" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-14T13:00") })} day={t('wednesday')} groupPhases={t('semifinals')}>
              <Game player1="france" hour={t('time', { time: new Date("2022-11-22 16:00:00")})} player2="morocco" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-17T13:00") })} day={t('saturday')} groupPhases={t('thirdPlace')}>
              <Game player1="croatia" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="morocco" />
            </Card>
            <Card date={t('date', { date: new Date("2022-12-18T13:00") })} day={t('sunday')} groupPhases={t('finals')}>
              <Game player1="argentina" hour={t('time', { time: new Date("2022-11-22 12:00:00")})} player2="france" />
            </Card>
          </main>
        </div>
      </div>
    </body>
  )
}

export default App
