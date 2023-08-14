// import React, { memo, useState, useTransition } from 'react';

import { useState } from 'react';

// function SlowPost({ index }) {
//   let startTime = performance.now();
//   while (performance.now() - startTime < 3) {
//     // Do nothing for 1 ms per item to emulate extremely slow code
//   }

//   return <li className="item">Post #{index + 1}</li>;
// }

// function ContactTab() {
//   return (
//     <>
//       <p>You can find me online here:</p>
//       <ul>
//         <li>admin@mysite.com</li>
//         <li>+123456789</li>
//       </ul>
//     </>
//   );
// }

// const PostsTab = memo(function PostsTab() {
//   // Log once. The actual slowdown is inside SlowPost.
//   console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

//   let items = [];
//   for (let i = 0; i < 500; i++) {
//     items.push(<SlowPost key={i} index={i} />);
//   }
//   return <ul className="items">{items}</ul>;
// });

// function AboutTab() {
//   return <p>Welcome to my profile!</p>;
// }

// function TabButton({ children, isActive, onClick }) {
//   if (isActive) {
//     return <b>{children}</b>;
//   }
//   return (
//     <button
//       style={{ backgroundColor: 'transparent' }}
//       onClick={() => {
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

const TransitionTestPage = () => {
  //   const [isPending, startTransition] = useTransition();
  //   const [tab, setTab] = useState('about');
  const [val, setVal] = useState('');

  //   function selectTab(nextTab) {
  //     setTab(nextTab);
  //   }
  console.log(val);
  return (
    <>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
    </>
  );
};

export default TransitionTestPage;
