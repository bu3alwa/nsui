import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: string;
}

export const Menu = React.forwardRef<HTMLInputElement, MenuProps>((props, ref) => {
  const { value, ...remainingProps } = props;

  return (
    <div ref={ref} {...remainingProps}>
      {value}
    </div>
  );
});

Menu.displayName = 'Menu';
