/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * CleanIAM
 * CleanIAM API
 * OpenAPI spec version: v1
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type { GetSignupParams, PostSignupBody, PostSignupParams } from '../cleanIAM.schemas';

import { customAxiosRequest } from '../../mutator/axios/custom-axios';

export const getSignup = (params?: GetSignupParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/signup`, method: 'GET', params, signal });
};

export const getGetSignupQueryKey = (params?: GetSignupParams) => {
  return [`/signup`, ...(params ? [params] : [])] as const;
};

export const getGetSignupQueryOptions = <
  TData = Awaited<ReturnType<typeof getSignup>>,
  TError = unknown
>(
  params?: GetSignupParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSignup>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetSignupQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getSignup>>> = ({ signal }) =>
    getSignup(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSignup>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetSignupQueryResult = NonNullable<Awaited<ReturnType<typeof getSignup>>>;
export type GetSignupQueryError = unknown;

export function useGetSignup<TData = Awaited<ReturnType<typeof getSignup>>, TError = unknown>(
  params: undefined | GetSignupParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSignup>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSignup>>,
          TError,
          Awaited<ReturnType<typeof getSignup>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetSignup<TData = Awaited<ReturnType<typeof getSignup>>, TError = unknown>(
  params?: GetSignupParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSignup>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getSignup>>,
          TError,
          Awaited<ReturnType<typeof getSignup>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetSignup<TData = Awaited<ReturnType<typeof getSignup>>, TError = unknown>(
  params?: GetSignupParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSignup>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetSignup<TData = Awaited<ReturnType<typeof getSignup>>, TError = unknown>(
  params?: GetSignupParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSignup>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetSignupQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const postSignup = (
  postSignupBody: PostSignupBody,
  params?: PostSignupParams,
  signal?: AbortSignal
) => {
  const formData = new FormData();
  formData.append('Email', postSignupBody.Email);
  formData.append('FirstName', postSignupBody.FirstName);
  formData.append('LastName', postSignupBody.LastName);
  formData.append('Password', postSignupBody.Password);

  return customAxiosRequest<void>({
    url: `/signup`,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
    params,
    signal
  });
};

export const getPostSignupMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postSignup>>,
    TError,
    { data: PostSignupBody; params?: PostSignupParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postSignup>>,
  TError,
  { data: PostSignupBody; params?: PostSignupParams },
  TContext
> => {
  const mutationKey = ['postSignup'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postSignup>>,
    { data: PostSignupBody; params?: PostSignupParams }
  > = props => {
    const { data, params } = props ?? {};

    return postSignup(data, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostSignupMutationResult = NonNullable<Awaited<ReturnType<typeof postSignup>>>;
export type PostSignupMutationBody = PostSignupBody;
export type PostSignupMutationError = unknown;

export const usePostSignup = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof postSignup>>,
      TError,
      { data: PostSignupBody; params?: PostSignupParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof postSignup>>,
  TError,
  { data: PostSignupBody; params?: PostSignupParams },
  TContext
> => {
  const mutationOptions = getPostSignupMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
