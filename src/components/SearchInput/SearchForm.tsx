'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  search: string;
};

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get('search') || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { search: defaultSearch } });

  const onSubmit: SubmitHandler<FormValues> = async ({ search }) =>
    router.push('?search=' + search);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <label className="input-group w-full">
        <input
          {...register('search', { required: true })}
          type="text"
          placeholder="Type package name"
          className="input-bordered input w-4/6"
        />
        <span>
          <button type="submit" className="h-full w-full">
            Search
          </button>
        </span>
      </label>
      {errors.search && <span className="mt-2 text-sm text-error">This field is required</span>}
    </form>
  );
};
