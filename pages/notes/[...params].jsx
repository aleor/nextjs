import React from 'react';
import { useRouter } from 'next/router';

// notes/1/2/3...
const Note = () => {
  const router = useRouter();
  const { params } = router.query;

  return <div>Params: {JSON.stringify(params, null, 2)} </div>;
};

export default Note;
