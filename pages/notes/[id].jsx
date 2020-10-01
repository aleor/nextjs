/** @jsx jsx */
import { jsx } from 'theme-ui';

const Note = ({ note }) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>
        {note.title}: {note.id}{' '}
      </h1>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });

    res.end();

    return {
      props: {},
    };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
}
