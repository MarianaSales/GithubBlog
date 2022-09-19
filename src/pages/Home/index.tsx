import { Profile } from './components/Profile';
import { Publications } from './components/Publications';
import { Search } from './components/Search';
import { HomePostContainer } from './styles';

export function Home() {
    return (
        <>
            <Profile />
            <Search />
            <HomePostContainer>
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
                <Publications />
            </HomePostContainer>
        </>
    );
}
