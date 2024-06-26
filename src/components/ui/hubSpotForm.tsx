import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

export const HubspotForm = ({
	portalId,
	formId,
}: {
	portalId: string
		formId: string
	}) => {
		useHubspotForm({
			portalId,
			formId,	
			target: '#hubspot-form',
		})

		if (portalId) {
			return <div id="hubspot-form" className="hbspt-form" />
		} else {
			return null
		}
	
}
	

