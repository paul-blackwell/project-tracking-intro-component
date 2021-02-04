import PageHead from '../components/PageHead'
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <PageHead title="Tracking intro component" />
      <Wrapper>
        <Navbar />
      </Wrapper>
    </>
  )
}
