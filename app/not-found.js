import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function NotFound() {
    return (
        <>
            <Header />

            <main className='pt-24 min-h-[70vh]'>
                <section className='px-4 md:px-8 lg:px-16 py-16 md:py-24'>
                    <div className='max-w-5xl mx-auto text-center'>
                        <span className='inline-block bg-gray-900 border border-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold'>
                            Error 404
                        </span>

                        <h1 className='mt-6 text-5xl md:text-7xl font-extrabold text-blue-500 tracking-tight'>
                            Page Not Found
                        </h1>

                        <p className='mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed'>
                            The page you are looking for may have been moved, renamed, or no longer exists.
                            Let&apos;s get you back to the right place.
                        </p>

                        <div className='mt-10 flex flex-wrap justify-center gap-4'>
                            <Link
                                href='/'
                                className='inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300'
                            >
                                Back To Home
                            </Link>
                            <Link
                                href='/services'
                                className='inline-flex items-center justify-center bg-gray-900 hover:bg-gray-600 border border-white/20 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300'
                            >
                                Explore Services
                            </Link>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300'
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
