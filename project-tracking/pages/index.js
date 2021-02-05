import PageHead from '../components/PageHead'
import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <PageHead title="Tracking intro component" />
      <Navbar />
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  )
}
