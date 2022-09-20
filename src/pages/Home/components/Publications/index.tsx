import { relativeDateFormatter } from '../../../../utils/formatter';
import { IPublications } from '../../../interface';
import { PublicationsContainer } from './styles';

interface PublicationProps {
    publication: IPublications;
}
export function Publications({ publication }: PublicationProps) {
    const formattedDate = relativeDateFormatter(publication.created_at);
    return (
        <PublicationsContainer to={`/post/${publication.number}`}>
            <div>
                <strong>{publication.title}</strong>
                <span>{formattedDate}</span>
            </div>
            <p>{publication.body}</p>
        </PublicationsContainer>
    );
}
