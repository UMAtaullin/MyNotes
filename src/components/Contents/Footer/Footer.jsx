import cls from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cls.footer}>
      © {new Date().getFullYear()} Ural Ataullin
    </footer>
  )
}

export default Footer
