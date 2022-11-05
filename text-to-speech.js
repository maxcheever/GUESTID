export function synthesizeSpeech(text) {
	const speechConfig = sdk.SpeechConfig.fromSubscription(
		"683505689ac541de9d9225564ca73a7d",
		"eastus"
	);
	const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

	const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
	synthesizer.speakTextAsync(
		text,
		(result) => {
			if (result) {
				console.log(speechConfig);
				synthesizer.close();
				return result.audioConfig;
			}
		},
		(error) => {
			console.log(error);
			synthesizer.close();
		}
	);
}
