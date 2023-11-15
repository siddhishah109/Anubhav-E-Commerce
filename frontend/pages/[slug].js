import React from 'react';
import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Dynamic Page: {slug}</h1>
    </div>
  );
};

export default DynamicPage;