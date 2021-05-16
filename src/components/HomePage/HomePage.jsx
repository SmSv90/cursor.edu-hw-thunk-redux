import { React } from "react";

export const HomePage = () => {
  return (
    <div className="wrapper__home">
      <div className="general">
        <div className="general__greetings">
          <h1>Welcome</h1>
        </div>
        <div className="general__text">
          <h2>Thunk Redux homework</h2>
          <p>
            УВАГА! Так як github pages блокує http запити, а REST API не підтримує безпечне зєднання https був використаний CORS API.
            Перейдіть за цим посиланням нижче і натисність кнопку equest temporary access to the demo server.
            Після цього Ви зможете отримувати і надсилати дані на REST API.
            Дякую за розуміння.
          </p>
          <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noreferrer">Link to CORS API</a>
        </div>
      </div>
    </div>
  )
}