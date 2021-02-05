
import SpanRounded from './SpanRounded';
import PrimaryButton from './buttons/PrimaryButton';

const Main = (props) => {
    return (
        <main>
            <img className="w-full h-auto" src="/images/illustration-devices.svg" />
            <header>
                <SpanRounded>New</SpanRounded>
                <span className="text-neutral-200 tracking-wider uppercase text-xl">Monograph dashboard</span>
                <h1 className="uppercase text-5xl font-bold text-neutral-400 mt-6">
                    <span className="block">Powerful insights</span>
                    <span>into your team</span>
                </h1>
                <p className="text-neutral-300 mt-6">Project planning and time tracking for agile teams</p>
                <div className="grid grid-cols-2 mt-6">
                    <PrimaryButton type="link" url="#">Schedule a demo</PrimaryButton>
                    <span className="justify-self-center self-center text-neutral-200 tracking-wider uppercase">To see a preview</span>
                </div>
            </header>
        </main>
    )
}

export default Main;