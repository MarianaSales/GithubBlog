import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Links } from '../../../../components/Links';
import { Loader } from '../../../../components/Loader';
import { relativeDateFormatter } from '../../../../utils/formatter';
import { IPublications } from '../../../interface';
import { HeaderContainer } from './styles';

interface HeaderProps {
    postInformation: IPublications;
    loading: boolean;
}

export function Header({ postInformation, loading }: HeaderProps) {
    const navigate = useNavigate();

    const formattedDate = relativeDateFormatter(postInformation?.created_at);

    function goBack() {
        navigate(-1);
    }

    return (
        <HeaderContainer>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <header>
                        <Links
                            as="button"
                            icon={<FontAwesomeIcon icon={faChevronLeft} />}
                            text="Voltar"
                            onClick={goBack}
                            variant="iconLeft"
                        />
                        <Links
                            text="Ver no Github"
                            href={postInformation.html_url}
                            target="_blank"
                        />
                    </header>
                    <h1>{postInformation.title}</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            {postInformation.user.login}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCalendar} />
                            {formattedDate}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            {postInformation.comments} comentários
                        </li>
                    </ul>
                </>
            )}
        </HeaderContainer>
    );
}
