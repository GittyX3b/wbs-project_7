const Hero = () => {
    return (
        <div
            className='hero min-h-screen'
            style={{
                backgroundImage: 'url(../src/assets/images/hero_chicago.webp)',
            }}
        >
            <div className='text-neutral-content pb-20 text-center'>
                <div className='max-w-full bg-[rgba(255,255,255,0.5)] p-10 lg:max-w-200'>
                    <h1 className='px-6'>Art Institue of Chicago</h1>
                    <p className='p-10'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export { Hero };
