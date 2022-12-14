import { useCallback, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { api } from '../../services/api';
import { IPublications } from '../interface';
import { Profile } from './components/Profile';
import { Publications } from './components/Publications';
import { Search } from './components/Search';
import { HomePostContainer } from './styles';

export const username = import.meta.env.VITE_GITHUB_USERNAME;
export const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Home() {
    const [publications, setPublication] = useState<IPublications[]>([]);
    const [loading, setLoading] = useState(true);

    const getPublication = useCallback(
        async (query: string = '') => {
            try {
                setLoading(true);
                const response = await api.get(
                    `/search/issues?q=${query}%20repo:${username}/${repoName}`
                );
                setPublication(response.data.items);
            } finally {
                setLoading(false);
            }
        },
        [publications]
    );

    useEffect(() => {
        getPublication();
    }, []);

    return (
        <>
            <Profile />
            <Search publicationLength={publications.length} getPublication={getPublication} />
            {loading ? (
                <Loader />
            ) : (
                <HomePostContainer>
                    {publications.map((publication) => (
                        <Publications key={publication.number} publication={publication} />
                    ))}
                </HomePostContainer>
            )}
        </>
    );
}
