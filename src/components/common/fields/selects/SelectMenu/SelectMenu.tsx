'use client';

import { useState, useRef } from 'react';

import { useOnClickOutside } from '~utils/hooks';

import { Button } from '../../../buttons';
import { CrossIcon, TickIcon } from '../../../icons';
import { Group, Menu } from '../../../layouts';
import { Typography } from '../../../typography';

import s from './SelectMenu.module.css';

interface Option {
  text: string;
  value: number | string;
}

interface SelectMenuProps<T extends Option[]> {
  label: string;
  title: string;
  options: T;
  defaultValue?: T[number]['value'];
  onSelect: (value: T[number]['value']) => void;
}

export const SelectMenu: React.FC<SelectMenuProps<Option[]>> = ({
  label,
  title,
  options,
  defaultValue = options[0],
  onSelect
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const selectMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(selectMenuRef, () => setIsOpen(false));

  const onSelectOption = (value: (typeof options)[number]['value']) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div
      ref={selectMenuRef}
      className={s.selectMenuContainer}
    >
      <Button
        variant='contained'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
      </Button>
      {isOpen && (
        <div className={s.menuContainer}>
          <Menu>
            <Group>
              <div className={s.menuHeaderContainer}>
                <Typography
                  comp='span'
                  size={12}
                  weight={600}
                >
                  {title}
                </Typography>
                <button
                  className={s.closeMenuButton}
                  type='button'
                  onClick={() => setIsOpen(false)}
                >
                  <CrossIcon className={s.closeMenuButtonIcon} />
                </button>
              </div>
            </Group>
            {options.map((option, index) => (
              <Group key={index}>
                <Button
                  variant='transparented'
                  onClick={() => onSelectOption(option.value)}
                >
                  <div className={s.optionContainer}>
                    <div className={s.activeOptionIconContainer}>
                      {selectedValue === option.value && (
                        <TickIcon className={s.activeOptionIcon} />
                      )}
                    </div>
                    <Typography
                      comp='span'
                      size={12}
                      weight={400}
                    >
                      {option.text}
                    </Typography>
                  </div>
                </Button>
              </Group>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
};
