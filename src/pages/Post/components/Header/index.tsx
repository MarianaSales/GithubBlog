import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Links } from '../../../../components/Links';
import { HeaderContainer } from './styles';

export function Header() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <HeaderContainer>
            <header>
                <Links
                    as="button"
                    icon={<FontAwesomeIcon icon={faChevronLeft} />}
                    text="Voltar"
                    onClick={goBack}
                    variant="iconLeft"
                />
                <Links text="Ver no Github" href="#" target="_blank" />
            </header>
            <h1>JavaScript data types and data structures</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />5 comentários
                </li>
            </ul>
        </HeaderContainer>
    );
}
