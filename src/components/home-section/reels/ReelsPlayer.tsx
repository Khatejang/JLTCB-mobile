import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

type Props = {
	video: number;
	shouldPlay: boolean;
};

export default function ReelsPlayer({ video, shouldPlay }: Props) {
	const player = useVideoPlayer(video, (player) => {
		player.muted = true;
		player.loop = true;
	});

	const screenWidth = Dimensions.get("window").width;

	useEffect(() => {
		if (shouldPlay) {
			player.play();
		} else {
			player.pause();
		}
	}, [shouldPlay, player]);

	return (
		<View pointerEvents="none">
			<VideoView
				player={player}
				style={[
					styles.videoSize,
					{ width: screenWidth * 0.2, height: screenWidth * 0.3 },
				]}
				contentFit="cover"
				nativeControls={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	videoSize: {
		marginRight: 5,
		borderRadius: 5,
		overflow: "hidden",
	},
	fullscreenContainer: {
		flex: 1,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
	fullscreenVideo: {
		width: "100%",
		height: "100%",
	},
});
