import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export default class PaymentForm extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
      pais:'',
      provincia:'',
    };
    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value },()=>{
        this.props.onPaymentFormData(this.state);
      });
    }
    render() {
      return (
        <div className='PaymentForm'>
            <div className='card bg-dark' id="PaymentForm">
                <div className='card-body'>
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                        pais={this.state.pais}
                        provincia={this.state.provincia} />
                       
                    <br />
                    <form>
                        <input className='card-text text-light textoTarjeta'
                        type="tel"
                        name="number"
                        placeholder="1234 5678 9012 3456"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus} />
                        <input className='card-text text-light textoTarjeta'
                        type="text"
                        name="name"
                        placeholder="NOMBRE Y APELLIDO"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}/>
                        <input className='card-text text-light textoTarjeta'
                        type="tel"
                        name="expiry"
                        placeholder="VENCIMIENTO"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}/>
                        <input className='card-text text-light textoTarjeta'
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus} />
                    </form>
                </div>
                <div className='bg-dark'>
                    <div className='card-body'>
                          <input  onChange={this.handleInputChange} className='card-text text-white' type="text" placeholder='Pais' onFocus={this.handleInputFocus} name="pais"/>
                          <input  onChange={this.handleInputChange} className='card-text text-white' type="text" placeholder='Provincia/Estado' onFocus={this.handleInputFocus} name="provincia"/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
