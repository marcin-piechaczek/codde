import { Skeleton } from '@/components/Skeleton';

export const SkeletonGrid = ({ elements = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {[...Array(elements)].map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};
