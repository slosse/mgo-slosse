import './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

const ContactForm = (props) => {

    return (
        <div className='ContactContainer'>
          <h1>Datos de Contacto</h1>
          <form className='ContactForm' >
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={props.phone}
                onChange={({ target }) => props.setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={props.address}
                onChange={({ target }) => props.setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={props.comment}
                onChange={({ target }) => props.setComment(target.value)}
              />
            </label>
            <br/>

          </form>
        </div>
      )
}

export default ContactForm