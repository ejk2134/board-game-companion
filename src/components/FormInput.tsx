const FormInput: React.FC<{
  label: string
  children: React.ReactNode
}> = ({ label, children }) => {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  )
}

export default FormInput
