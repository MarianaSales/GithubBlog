import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps, ReactNode } from 'react';
import { LinkContainer } from './styles';

type LinksProps = ComponentProps<typeof LinkContainer> & {
    text: string;
    icon?: ReactNode;
    variant?: 'iconLeft' | 'iconRight';
};

export function Links({ text, icon, ...res }: LinksProps) {
    return (
        <LinkContainer {...res}>
            {text}
            {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
        </LinkContainer>
    );
}
