import React from 'react';
import { useRouter } from 'next/router';

const Note = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>Note page: {id} </div>
    </>
  );
};

export default Note;
