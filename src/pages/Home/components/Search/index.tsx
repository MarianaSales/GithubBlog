import { SearchContainer } from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string(),
});

interface SearchProps {
    getPublication: (query?: string) => Promise<void>;
    publicationLength: number;
}

type SearchForm = z.infer<typeof searchFormSchema>;

export function Search({ getPublication, publicationLength }: SearchProps) {
    const { register, handleSubmit } = useForm<SearchForm>({
        resolver: zodResolver(searchFormSchema),
    });

    async function handleSearchPost(data: SearchForm) {
        await getPublication(data.query);
    }

    return (
        <SearchContainer onSubmit={handleSubmit(handleSearchPost)}>
            <header>
                <h3>Publicações</h3>
                <span>{publicationLength} publicações</span>
            </header>
            <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
        </SearchContainer>
    );
}
