import React from 'react';
import { useRouterContext, TitleProps } from '@pankod/refine-core';
import { Button } from '@pankod/refine-mui';

import { yearn } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={yearn} alt="Yearn" width="30px" />
        ) : (
          <img src={yearn} alt="YAI" width="145px" />
        )}
      </Link>
    </Button>
  );
};
