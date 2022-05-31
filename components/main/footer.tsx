import Link from 'next/link'
import { footer } from '../link/footer.jsx'

const Footer = () => {
  return (
    <footer>
      {footer.map((link, index) => {
        return (
          <ul>
            <Link href={link.path}>
              <a>
                <li key={index}>{link.name}</li>
              </a>
            </Link>
          </ul>
        )
      })}
    </footer>
  )
}

export default Footer
