import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Links } from '../../../../components/Links';
import { ProfileContainer, ProfileContent, ProfilePicture } from './styles';

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePicture src="http://github.com/MarianaSales.png" />
            <ProfileContent>
                <header>
                    <h1>Mariana Sales</h1>
                    <Links text="Github" href="#" />
                </header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quam, nisi,
                    voluptate ipsum facere laudantium a corporis minima blanditiis dolorem magnam at
                    laboriosam pariatur doloremque exercitationem facilis! Voluptatum, fugiat nulla.
                </p>

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        Mariana Sales
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Rocketseat
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGroup} />
                        55 seguidores
                    </li>
                </ul>
            </ProfileContent>
        </ProfileContainer>
    );
}
