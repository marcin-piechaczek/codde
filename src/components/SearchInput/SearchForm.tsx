'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  search: string;
};

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get('search') || '';
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { search: defaultSearch } });

  const onSubmit: SubmitHandler<FormValues> = async ({ search }) => {
    setLoading(true);
    const loading = setTimeout(() => {
      setLoading(false);
    }, 4000);

    router.push('/search?package=' + search);

    return () => clearTimeout(loading);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <label className="input-group w-full text-white">
        <div className="join">
          <input
            {...register('search', { required: true })}
            type="text"
            className="input-bordered input join-item w-96"
            placeholder="Type package name"
          />
          <button type="submit" className="join-item btn rounded-r-full">
            {loading ? <span className="loading"></span> : 'Search'}
          </button>
        </div>
      </label>
      {errors.search && <span className="mt-2 text-sm text-error">This field is required</span>}
    </form>
  );
};
