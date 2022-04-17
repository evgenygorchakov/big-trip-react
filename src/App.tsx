import React from 'react'
import AppHeader from './components/AppHeader'
import './css/style.css'

const App = () => {
  return (
    <>
      <AppHeader />
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>

            <p className="trip-events__msg">Click New Event to create your first point</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
