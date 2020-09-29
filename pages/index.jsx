import React from 'react';
import Link from 'next/link';

const Page = () => (
  <div>
    <h2>Index Page</h2>
    <Link href="/notes">Go to notes</Link>
  </div>
);

export default Page;
