import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value?: string;
}

// declare class Menu extends React.Component<MenuProps, any> {}

const Menu = React.forwardRef<HTMLInputElement, MenuProps>((props, ref) => {
  const { value, ...remainingProps } = props;

  return (
    <menu ref={ref} {...remainingProps}>
      {value}
    </menu>
  );
});

Menu.displayName = 'Menu';
module.exports = Menu;
