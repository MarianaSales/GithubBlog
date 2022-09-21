import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { Links } from '../../../../components/Links';
import { Loader } from '../../../../components/Loader';
import { api } from '../../../../services/api';
import { ProfileContainer, ProfileContent, ProfilePicture } from './styles';

interface IUserInformations {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: string;
}

const username = import.meta.env.VITE_GITHUB_USERNAME;

export function Profile() {
    const [userInformations, setUserInformations] = useState<IUserInformations>(
        {} as IUserInformations
    );
    const [loading, setLoading] = useState(true);
    const getUserInformations = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get(`/users/${username}`);
            setUserInformations(response.data);
        } finally {
            setLoading(false);
        }
    }, [userInformations]);

    useEffect(() => {
        getUserInformations();
    }, []);

    return (
        <ProfileContainer>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <ProfilePicture src={userInformations.avatar_url} />
                    <ProfileContent>
                        <header>
                            <h1>{userInformations.name}</h1>
                            <Links text="Github" href={userInformations.html_url} target="_blank" />
                        </header>
                        <p>{userInformations.bio}</p>

                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faGithub} />
                                {userInformations.login}
                            </li>
                            {userInformations?.company && (
                                <li>
                                    <FontAwesomeIcon icon={faBuilding} />
                                    {userInformations.company}
                                </li>
                            )}
                            <li>
                                <FontAwesomeIcon icon={faUserGroup} />
                                {userInformations.followers} seguidores
                            </li>
                        </ul>
                    </ProfileContent>
                </>
            )}
        </ProfileContainer>
    );
}
