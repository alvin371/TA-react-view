import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ postsPerPage, totalPosts, paginate }) {
    var totalPages=totalPosts / postsPerPage
    const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    paginate(value)
  };

  return (
    <Stack  spacing={2} className="mb-3">
      {/* <Pagination count={totalPages} defaultPage={page} onChange={handleChange} color="primary" className="bg-gray rounded-full opacity-70 "/> */}
      <Pagination count={totalPages} defaultPage={page}  onChange={handleChange} variant="outlined" color="error" size="large"/>
    </Stack>
  );
}