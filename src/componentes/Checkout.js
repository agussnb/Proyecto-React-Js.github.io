import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import ReciboCompra from './ReciboCompra'

const Checkout = () => {
  const [showRecibo, setShowRecibo] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [paymentFormData, setPaymentFormData] = useState({
    name: '',
    pais:'',
    provincia:'',
  });


  const handleClick = () => {
    setShowRecibo(true)
    setShowButton(false)
  }

  const handlePaymentFormData = (data) => {
    setPaymentFormData(data);
  }

  return (
    <form>
      {showRecibo ? <ReciboCompra paymentFormData={paymentFormData} /> : <PaymentForm onPaymentFormData={handlePaymentFormData}/>}
      {showButton ? (
        <Link className="btn btn-dark finalizarCompra" onClick={handleClick}>
          Finalizar compra
        </Link>
      ) : null}
    </form>
  )
}

export default Checkout
