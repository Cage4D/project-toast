import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from "../Toast/Toast";

import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [value, setValue] = React.useState("")
  const [click, setClick] = React.useState("notice")
  const [notification, setNotification] = React.useState(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
        {notification && <Toast variant={click} message={value} notification={notification} setNotification={setNotification}/>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={value} onChange={event => setValue(event.target.value)}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {/* <label htmlFor="variant-notice">
              <input
                id="variant-notice"
                type="radio"
                name="variant"
                value="notice"
              />
              notice
            </label> */}

            {VARIANT_OPTIONS.map(option => {
              return (
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input 
                  id={`variant-${option}`} 
                  type="radio" 
                  name="variant"
                  checked= { click === `${option}`} 
                  onChange={event => setClick(event.target.value)}
                  value={option}/>
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => setNotification(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
