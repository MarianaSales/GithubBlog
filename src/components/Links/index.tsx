import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';
import { LinkContainer } from './styles';

type LinksProps = ComponentProps<typeof LinkContainer> & {
    text: string;
};

export function Links({ text, ...res }: LinksProps) {
    return (
        <LinkContainer {...res}>
            {text}
            <FontAwesomeIcon icon={faUpRightFromSquare} />
        </LinkContainer>
    );
}
