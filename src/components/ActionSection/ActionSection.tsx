'use client';

import { SearchForm } from '@/components/SearchInput';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { Toggle } from '@/components/Toggle';
import { Tooltip } from '@/components/Tooltip';
import { useOwnToken } from '@/hooks/useOwnToken';
import InfoIcon from '@root/public/images/info.svg';
import clsx from 'clsx';

export const ActionSection = () => {
  const { isOwnTokenSelected, token, toggle, setToken } = useOwnToken();
  const checkboxStyles = clsx(
    { invisible: !isOwnTokenSelected, visible: isOwnTokenSelected },
    'mb-4 mt-4 flex items-center text-white',
  );

  return (
    <div>
      <SearchForm />
      <div className="mb-4 mt-4 flex items-center">
        <Text tag="span" className="mr-4 text-sm text-neutral-content">
          Use own token:
        </Text>
        <Toggle onChange={toggle} checked={isOwnTokenSelected} />
      </div>
      <div className={checkboxStyles}>
        <TextInput
          value={token}
          onChange={event => setToken(event.target.value)}
          placeholder="Enter your token"
        />
        <div className="ml-4 text-white">
          <Tooltip message="Login into your GitHub account click settings next to Developer settings and generate a new personal access token">
            <InfoIcon />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
