import classnames from "classname";


const Button = ({ children, className, ...rest }) => {

    const allClasses = classnames(className);

  return (
    <button className={allClasses} {...rest}>
         {children}
    </button>
  )
}

export default Button
