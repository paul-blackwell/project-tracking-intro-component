
import SpanRounded from './SpanRounded';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';

const Main = (props) => {
    return (
        <main>
            <img className="w-full h-auto" src="/images/illustration-devices.svg" />
            <header>
                <SpanRounded>New</SpanRounded>
                <span className="text-neutral-200 tracking-wider uppercase text-xl">Monograph dashboard</span>
                <h1 className="uppercase text-5xl font-bold text-neutral-400">
                    <span className="block">Powerful insights</span>
                    <span>into your team</span>
                </h1>
                <p className="text-neutral-300">Project planning and time tracking for agile teams</p>
                <div>
                    <PrimaryButton type="link" url="#">Schedule a demo</PrimaryButton>
                    <span>To see preview</span>
                </div>
            </header>
        </main>
    )
}

export default Main;