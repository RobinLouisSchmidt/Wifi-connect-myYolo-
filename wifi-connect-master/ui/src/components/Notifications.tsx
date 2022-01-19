import * as React from 'react';
import { Txt, Alert } from 'rendition';

export const Notifications = ({
	hasAvailableNetworks,
	attemptedConnect,
	error,
}: {
	hasAvailableNetworks: boolean;
	attemptedConnect: boolean;
	error: string;
}) => {
	return (
		<>
			{attemptedConnect && (
				<Alert m={2} info>
					<Txt.span>Applying changes... </Txt.span>
					<Txt.span>
					Ihr Gerät ist bald online. Wenn die Verbindung nicht erfolgreich ist, 
					wird diese Anwendung in wenigen Minuten wiederhergestellt und neu geladen. 
					Auf dieser Seite können Sie es dann erneut versuchen.
					</Txt.span>
				</Alert>
			)}
			{!hasAvailableNetworks && (
				<Alert m={2} warning>
					<Txt.span>Kein W-Lan verfügbar.&nbsp;</Txt.span>
					<Txt.span>
						Stellen Sie sicher, dass sich ein Netzwerk in Reichweite befindet, und starten Sie das Gerät neu.
					</Txt.span>
				</Alert>
			)}
			{!!error && (
				<Alert m={2} danger>
					<Txt.span>{error}</Txt.span>
				</Alert>
			)}
		</>
	);
};
