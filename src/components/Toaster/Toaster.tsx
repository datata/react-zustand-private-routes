import './Toaster.css'

interface Props {
  message: string,
  type?: 'success' | 'error'
}

const Toaster = ({ type = 'success', message } : Props) => {
  const toasterClass = `toaster toaster-${type}`
  
  return (
    <div className={toasterClass}>{ message }</div>
  )
}

export default Toaster