import '../../css/components/error.css'

export default function InputError({ message, className = '' }) {
    return message ? <p className='error small_text'>{message}</p> : null;
}
