import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import {
	IconArrowRight,
	IconChecks,
	IconMail,
	IconShieldCheck,
} from '@tabler/icons-react'

export const metadata = {
	title: 'How To Give GMB Access',
	description:
		'Step-by-step instructions to give manager access to your Google Business Profile safely and correctly.',
	openGraph: {
		title: 'How To Give GMB Access | Digital Solution 360',
		description:
			'Follow this visual guide to add a manager to your Google Business Profile.',
		images: ['/gmb-access/1.webp'],
	},
}

const steps = [
	{
		step: '01',
		title: 'Open Business Profile Settings',
		description:
			'Search your business on Google while logged into the owner account. Open the three-dot menu and select Business Profile settings.',
		image: '/gmb-access/3.webp',
		alt: 'Open Business Profile settings from Google search results',
	},
	{
		step: '02',
		title: 'Go To Managers',
		description:
			'Inside Business Profile settings, choose Managers to control who can access the profile.',
		image: '/gmb-access/2.webp',
		alt: 'Managers option inside Business Profile settings',
	},
	{
		step: '03',
		title: 'Click Add Manager',
		description:
			'On the Managers screen, click Add to invite a new user to your Google Business Profile.',
		image: '/gmb-access/1.webp',
		alt: 'Add manager button on the managers screen',
	},
	{
		step: '04',
		title: 'Enter Email And Send Invite',
		description:
			'Enter the email address of the person you want to grant access to, select Manager, and click Invite.',
		image: '/gmb-access/4.webp',
		alt: 'Add manager dialog with email field and Manager role selected',
	},
]

const notes = [
	'Use the Google account that currently owns the Business Profile.',
	'Grant Manager access unless ownership transfer is specifically required.',
	'Do not remove yourself as owner while the request is pending.',
	'After sending the invite, ask the invited person to accept it from their email.',
]

export default function GMBAccessPage() {
	return (
		<>
			<Header />

			<main className='bg-stone-50 text-stone-900'>
				<section className='relative overflow-hidden px-4 pb-14 pt-28 md:px-8 lg:px-16'>
					<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]' />

					<div className='relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
						<div>
							<div className='mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm'>
								<IconShieldCheck size={18} />
								Google Business Profile Access Guide
							</div>

							<h1 className='max-w-3xl text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl'>
								How to give someone access to your GMB profile
							</h1>

							<p className='mt-6 max-w-2xl text-lg leading-8 text-stone-600'>
								Use these simple steps to add a manager to your Google Business Profile. This gives the invited person access to manage the listing without transferring ownership.
							</p>

							<div className='mt-8 flex flex-wrap gap-4'>
								<a
									href='#steps'
									className='inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700'
								>
									View Steps
									<IconArrowRight size={18} />
								</a>
								<Link
									href='/contact-us'
									className='inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100'
								>
									Need Help?
									<IconArrowRight size={18} />
								</Link>
							</div>
						</div>

						<div className='rounded-4xl border border-stone-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.10)]'>
							<img
								src='/gmb-access/4.webp'
								alt='Google Business Profile invite manager screen'
								className='w-full rounded-3xl object-cover'
							/>
						</div>
					</div>
				</section>

				<section className='px-4 py-6 md:px-8 lg:px-16'>
					<div className='mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
						<div className='rounded-3xl border border-emerald-200 bg-emerald-50 p-6'>
							<div className='mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700'>
								<IconChecks size={18} />
								Before You Start
							</div>
							<p className='text-base leading-7 text-emerald-950'>
								Make sure you are signed in with the Google account that already owns the Business Profile. If you are logged in with another account, the Managers option may not appear.
							</p>
						</div>

						<div className='rounded-3xl border border-stone-200 bg-white p-6'>
							<div className='mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500'>Quick Notes</div>
							<div className='space-y-3'>
								{notes.map((note) => (
									<div key={note} className='flex items-start gap-3 text-sm leading-6 text-stone-700'>
										<span className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500' />
										<span>{note}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id='steps' className='px-4 py-14 md:px-8 lg:px-16'>
					<div className='mx-auto max-w-7xl'>
						<div className='mb-10 max-w-2xl'>
							<p className='mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700'>Step By Step</p>
							<h2 className='text-3xl font-bold text-stone-900 md:text-4xl'>Visual instructions to give GMB access</h2>
							<p className='mt-4 text-lg leading-8 text-stone-600'>
								Follow the screenshots in order. Each step matches the screen you should see in Google Business Profile.
							</p>
						</div>

						<div className='space-y-8'>
							{steps.map((step, index) => {
								return (
									<div
										key={step.title}
										className='grid gap-6 rounded-4xl border border-stone-200 bg-white p-4 shadow-sm md:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'
									>
										<div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
											<div className='mb-4 inline-flex items-center gap-3 rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-800'>
												<span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white'>
													{step.step}
												</span>
												Step {step.step}
											</div>
											<h3 className='text-2xl font-bold text-stone-900'>{step.title}</h3>
											<p className='mt-4 text-base leading-8 text-stone-600'>{step.description}</p>
										</div>

										<div className={`${index % 2 === 1 ? 'lg:order-1' : ''} rounded-3xl border border-stone-200 bg-stone-50 p-3`}>
											<img
												src={step.image}
												alt={step.alt}
												className='w-full rounded-2xl object-cover'
											/>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</section>

				<section className='px-4 pb-16 md:px-8 lg:px-16'>
					<div className='mx-auto grid max-w-7xl gap-6 rounded-4xl bg-stone-900 p-8 text-white md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
						<div>
							<p className='mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300'>Need Support</p>
							<h2 className='text-3xl font-bold md:text-4xl'>If you get stuck, we can guide you through it</h2>
							<p className='mt-4 max-w-2xl text-base leading-8 text-stone-300'>
								If any of these screens look different on your account, or you are not seeing the Managers option, contact us and we will help you complete the access process safely.
							</p>
						</div>

						<div className='flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm'>
							<a
								href='mailto:info@digitalsolution360.in'
								className='inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-stone-900 transition-colors hover:bg-stone-100'
							>
								<IconMail size={18} />
								Email Support
							</a>
							<Link
								href='/contact-us'
								className='inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10'
							>
								Contact Our Team
								<IconArrowRight size={18} />
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
