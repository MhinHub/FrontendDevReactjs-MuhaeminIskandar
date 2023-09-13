import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: 'fit' | 'full'
  variant: 'primary' | 'secondary'
}

const Button: FC<Props> = ({
  width,
  variant,
  disabled,
  children,
  className,
  ...props
}) => {
  function getClassName(): string {
    let className = ''

    switch (variant) {
      case 'secondary':
        className =
          'text-[#082c54] bg-white border-[1.5px] border-[#082c54] capitalize font-medium '
        break
      default:
        className = 'bg-[#082c54] text-white capitalize font-medium '
        break
    }

    if (disabled) {
      className =
        'text-gray-400 bg-white border-[1.5px] border-gray-text-gray-400 capitalize font-medium cursor-default '
    }

    switch (width) {
      case 'fit':
        className += 'w-fit px-6 py-2 text-sm '
        break
      default:
        className += 'w-full py-2 '
        break
    }

    return className
  }

  return (
    <button className={`${getClassName()} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
