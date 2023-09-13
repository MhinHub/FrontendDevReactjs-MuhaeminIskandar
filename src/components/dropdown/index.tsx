import { FC, useEffect, useRef, useState } from 'react'

interface Props {
  name: string
  menus: string[]
  seleted?: string
  onSelect: (menu: string) => void
}

const Dropdown: FC<Props> = ({ menus, name, seleted, onSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleClick(item: string) {
    onSelect(item)
    setIsOpen(false)
  }

  function openDropdown() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-16 border-b-[1px] border-b-gray-400 sm:w-24"
    >
      <div
        onClick={openDropdown}
        className="flex w-full cursor-pointer items-center justify-between gap-1"
      >
        <p className="w-full truncate">{seleted ? seleted : name}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-3 w-3 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className="absolute top-7 w-full bg-white shadow-md">
        {isOpen &&
          menus.map((item, idx) => (
            <div
              className="=bg-white cursor-pointer px-3 py-1 hover:bg-gray-100"
              onClick={() => handleClick(item)}
              key={idx}
            >
              <p className="w-full truncate">{item}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dropdown
