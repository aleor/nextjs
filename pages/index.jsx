/** @jsx jsx */
import { jsx } from 'theme-ui';

const IndexPage = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>Note taking app</h1>
    </div>
  </div>
);

export default IndexPage;
