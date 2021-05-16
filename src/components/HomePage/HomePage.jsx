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
            УВАГА! В зв'язку з тим, що github pages блокує http запити, а REST API не підтримує безпечне з'єднання https був використаний CORS API.
            <br/>
            Перейдіть за посиланням нижче і натисність кнопку "Request temporary access to the demo server".
            <br/>
            Після цього Ви зможете отримувати і надсилати дані на http://domer.tech:9999/.
            <br/>
            Дякую за розуміння.
          </p>
          <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">Link to CORS API</a>
        </div>
      </div>
    </div>
  )
}