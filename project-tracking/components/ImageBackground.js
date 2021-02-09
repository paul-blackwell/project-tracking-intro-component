const ImageBackground = (props) => (
    <div>
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-2/4 h-2/4 bg-neutral-100 rounded-bl-3xl"></div>
     
        {/* Background image */}
        <div className="absolute top-32  w-hero xsm:w-full xsm:right-heroSmall md:right-heroSmall xl:right-heroMedium md:top-64 md:w-3/4 max-w-5xl 2xl:right-0">
            <img className="w-full h-auto px-6" src="/images/illustration-devices.svg" alt="hero" />
        </div>
    </div>
);

export default ImageBackground;