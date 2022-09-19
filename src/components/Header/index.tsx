import { HeaderConatiner } from './styles';
import Logo from '../../assets/Logo.svg';

export function Header() {
    return (
        <HeaderConatiner>
            <img src={Logo} alt="" />
        </HeaderConatiner>
    );
}
