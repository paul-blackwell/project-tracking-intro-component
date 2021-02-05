
import SpanRounded from './SpanRounded';

const Main = (props) => {
    return (
        <main>
            <img className="w-full h-auto" src="/images/illustration-devices.svg" />
            <header>
                <SpanRounded>New</SpanRounded>
                <span className="text-neutral-200 tracking-wider uppercase">Monograph dashboard</span>
                <h1 className="uppercase text-2xl font-bold">
                    <span className="text-6xl ">Powerful insights into your team</span>
                </h1>
                <p className="text-neutral-300">Project planning and time tracking for agile teams</p>
                <a href="#"></a>
                <a href="#"></a>
            </header>
        </main>
    )
}

export default Main;