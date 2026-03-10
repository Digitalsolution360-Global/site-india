import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata = {
	title: 'How To Give GMB Access',
	description: 'Step-by-step visual guide to give manager access to your Google Business Profile.',
	openGraph: {
		title: 'How To Give GMB Access | Digital Solution 360',
		description: 'Step-by-step visual guide to give manager access to your Google Business Profile.',
		images: ['/gmb-access/1.webp'],
	},
}

const images = [
	{ src: '/gmb-access/1.webp', alt: 'Step 1 – GMB access instructions' },
	{ src: '/gmb-access/2.webp', alt: 'Step 2 – GMB access instructions' },
	{ src: '/gmb-access/3.webp', alt: 'Step 3 – GMB access instructions' },
	{ src: '/gmb-access/4.webp', alt: 'Step 4 – GMB access instructions' },
]

export default function GMBAccessPage() {
	return (
		<>
			<Header />
			<main className='bg-white pt-24 pb-16'>
				<div className='mx-auto max-w-4xl px-4'>
					<h1 className='mb-10 text-center text-3xl font-bold text-stone-900 md:text-4xl'>
						How to give GMB access
					</h1>
					<div className='flex flex-col gap-6'>
						{images.map((img, i) => (
							<img
								key={i}
								src={img.src}
								alt={img.alt}
								className='w-full rounded-2xl shadow-lg'
							/>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
