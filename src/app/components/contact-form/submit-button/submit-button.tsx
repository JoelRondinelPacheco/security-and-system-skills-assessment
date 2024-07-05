import React, { SVGProps } from 'react'
import Button from '../../button/button'
import { useFormStatus } from 'react-dom';
import styles from './styles.module.css'

export function IconoirSend(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M.292 1.665L24.002 12L.293 22.336L3.94 12zM5.708 13l-2 5.665L18.999 12L3.708 5.336l2 5.664H11v2z"/></svg>
  )
}

const SubmitButton = () => {

  const { pending } = useFormStatus();


  return (
    <div className={styles.container}>
      <p>{pending ? "Loading" : "SEND"}</p>
    <Button disabled={pending} type="submit">
      <div className={styles.wrapper}><span>{pending ? "Loading" : "SEND"}</span><span className={styles.icon}>{IconoirSend()}</span></div>
    </Button>
    </div>
  )
}

export default SubmitButton