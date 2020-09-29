import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Notes = () => {
  const router = useRouter();

  return (
    <div>
      <h2>Notes index page</h2>

      <Link href="/notes/[id]" as={`/notes/1`}>
        Go to the first note (parameterized)
      </Link>
      <p>Footer</p>
      <button onClick={e => router.push('/')}>Go Home </button>
    </div>
  );
};

export default Notes;
