import { LoaderContainer } from './styles';

export function Loader() {
    return (
        <LoaderContainer>
            <div>
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            </div>
        </LoaderContainer>
    );
}
