const ImageBackground = (props) => (
    <div>
        {/* Background shape */}
       <div className="absolute top-0 right-0 w-2/4 h-2/4 bg-neutral-100 rounded-bl-3xl"></div> 
       <img className="absolute top-52 -right-1/4 w-8/12 h-auto " src="/images/illustration-devices.svg" />
    </div>
);

export default ImageBackground;