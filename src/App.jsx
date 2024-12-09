import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import SubSection from './subSection.jsx';
import BiggestHits from './BiggestHits.jsx';
import Albumpage from './AlbumPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        Home page /
        <Route path="/" element={
          <>
            <SubSection />
            <BiggestHits />
          </>
        } />

        / Dynamic album page
        <Route path="/album/:albumName" element={<Albumpage />} />
      </Routes>
    </Router>
  );
}

export default App;