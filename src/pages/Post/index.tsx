import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { repoName, username } from '../Home';
import { IPublications } from '../interface';
import { Content } from './components/Content';
import { Header } from './components/Header';

export function Post() {
    const { id } = useParams();
    const [postInformation, setPostInformation] = useState<IPublications>({} as IPublications);
    const [loading, setLoading] = useState(true);

    const getPublicationInformation = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`);
            setPostInformation(response.data);
        } finally {
            setLoading(false);
        }
    }, [postInformation]);

    useEffect(() => {
        getPublicationInformation();
    }, []);
    return (
        <>
            <Header loading={loading} postInformation={postInformation} />
            {!loading && <Content content={postInformation.body} />}
        </>
    );
}
