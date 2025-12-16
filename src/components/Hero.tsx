const Hero = () => {
    return (
        <div
            className='hero min-h-screen'
            style={{
                backgroundImage: 'url(../src/assets/images/hero_chicago.webp)',
            }}
        >
            <div className='hero-overlay text-neutral-content pt-16 text-center lg:pb-20'>
                <div className='mx-auto max-w-full p-10 lg:max-w-200'>
                    <h1 className='px-4'>The Art Institue of Chicago</h1>
                    <p className='px-5 pt-10 pb-15'>
                        Welcome to the Art Institute of Chicago, home to a collection of art that
                        spans centuries and the globe—and one of Tripadvisor’s “Best of the Best” US
                        attractions of 2025. We look forward to your visit and invite you to explore
                        our many exhibitions, join one of our free daily tours, or make your own
                        tour of must-see works.
                    </p>
                    <button className='btn btn-primary mb-10'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export { Hero };
