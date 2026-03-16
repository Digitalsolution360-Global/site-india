import { permanentRedirect } from 'next/navigation';

export default async function Page({ params }) {
	const { service } = await params;
	permanentRedirect(`/${service}`);
}
