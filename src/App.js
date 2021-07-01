import './App.css';
import Contact from './components/Contact';
import Connect from './components/Connect';
import Detail from './components/Detail';

import { useState } from 'react';


function App() {
  const [detail, setDetail] = useState();
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const token = query.get('token');
  const slug = query.get('slug');

  const handleSelect = (item) => {
    setDetail(item);
  }

  return (
    <div className="App">
      <div
        className="sidebar"
      >
        <Contact
          token={token}
          slug={slug}
          onSelect={handleSelect}
        />
      </div>
      <div>
        {
          detail ?
            <Detail
              detail={detail}
              onClose={() => setDetail(null)}
            />
            :
            <Connect
              token={token}
              slug={slug}
            />
        }
      </div>
    </div>
  );
}

export default App;
