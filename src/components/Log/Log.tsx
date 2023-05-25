'use client';

interface LogProps {
  log: unknown;
}

export const Log = ({ log }: LogProps) => {
  global.console.log(log);

  return <></>;
};
