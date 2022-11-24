
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 3rem;
    align-items: center;
    justify-content: center;
`

const ProfileImg = styled.img`
    height: 5rem;
    border-radius: 30px;
`
const ProfileName = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const Profile = ({ name, img, className }) => {
    return (
        <Container className={className}>
            <ProfileImg src={img} />
            <ProfileName>{name}</ProfileName>
        </Container>
    )
}

export default Profile