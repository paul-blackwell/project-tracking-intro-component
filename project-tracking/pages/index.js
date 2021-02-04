import PageHead from '../components/PageHead'
import Wrapper from '../components/Wrapper';

export default function Home() {
  return (
    <>
      <PageHead title="Tracking intro component" />
      <Wrapper>
        <h1 className="flex justify-center border-r-4 border-white text-primary font-body">Hi im a Next.js app</h1>
      </Wrapper>
    </>
  )
}
