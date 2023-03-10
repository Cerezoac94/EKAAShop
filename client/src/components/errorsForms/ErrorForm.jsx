const ErrorForm = ({message}) => {
	return (
		<span>
			<ion-icon
				name="information-circle-outline"
				className="info_circle"
			></ion-icon>
			{message}
		</span>
	);
};
export default ErrorForm;
