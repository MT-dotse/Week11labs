import React from 'react';
import styled from 'styled-components';

//The maincontainer
const ProfileContainer = styled.div`
	width: 200px;
	height: 200px;
	position: relative;
`;

//The overlay that contains the text
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 50%;
	&:hover {
		display: none;
	}
`;

//A container that wraps everything
const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

//The text
const TextColor = styled.p`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: #ffff00;
	font-family: 'Montserrat';
	font-weight: 700;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	line-height: 36, 57px;
`;

const ProfileImage = () => {
	return (
		<ImageWrapper>
			<ProfileContainer>
				<Overlay>
					<TextColor>Linus Ekenstam</TextColor>
				</Overlay>
				<img className="img" src="./assets/profile.jpg" alt="profile-picture" />
			</ProfileContainer>
		</ImageWrapper>
	);
};

export default ProfileImage;

// const ProfileImage = ({ profileText, textColor }) => {
// 	const styles = { textColor: textColor };

// 	return (
// 		<div style={styles}>
// 			<ProfileContainer>
// 				<div className="overlay">
// 					<p style={{ color: textColor }} className="overlay-text">
// 						{profileText}
// 					</p>
// 				</div>
// 				<img className="img" src="./assets/profile.jpg" alt="profile-picture" />
// 			</ProfileContainer>
// 		</div>
// 	);
// };

// export default ProfileImage;
