import { Profile } from './components/Profile';
import { Search } from './components/Search';
import { HomePostContainer } from './styles';

export function Home() {
    return (
        <>
            <Profile />
            <Search />
            <HomePostContainer></HomePostContainer>
        </>
    );
}
