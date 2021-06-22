import React from 'react';
import Review from './Review';
import reviews from './data';

function App() {
   return (
      <main>
         <h2 className='title'>Our Reviews</h2>
         <section className='container'>
            <div className='underline'></div>
            <Review people={reviews} />
         </section>
      </main>
   );
}

export default App;
