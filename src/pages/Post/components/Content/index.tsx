import ReactMarkdown from 'react-markdown';
import { ContentContainer } from './styles';

interface ContentProps {
    content: string;
}

export function Content({ content }: ContentProps) {
    return (
        <ContentContainer>
            <ReactMarkdown children={content} />
        </ContentContainer>
    );
}
