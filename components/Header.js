import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

import Image from 'next/image'
import HeaderItems from './HeaderItems'

function Header() {
    return (
        <header className="header">
            <HeaderItems title="Home" Icon={HomeIcon}  />
            <img className="object-contain" src="https://res.cloudinary.com/ani1997/image/upload/v1630150985/HULU%202.0/logo_huu_dhfti9.png" width={110} height={30} />
        </header>
    )
}

export default Header
