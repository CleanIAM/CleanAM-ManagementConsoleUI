/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * CleanIAM
 * CleanIAM API
 * OpenAPI spec version: v1
 */
import { useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type { GetUrlShortnerIdParams } from '../cleanIAM.schemas';

import { customAxiosRequest } from '../../mutator/axios/custom-axios';

/**
 * @summary The endpoint handling the shortened url access
 */
export const getUrlShortnerId = (
  id: string,
  params?: GetUrlShortnerIdParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<void>({ url: `/url-shortner/${id}`, method: 'GET', params, signal });
};

export const getGetUrlShortnerIdQueryKey = (id: string, params?: GetUrlShortnerIdParams) => {
  return [`/url-shortner/${id}`, ...(params ? [params] : [])] as const;
};

export const getGetUrlShortnerIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getUrlShortnerId>>,
  TError = unknown
>(
  id: string,
  params?: GetUrlShortnerIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUrlShortnerId>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUrlShortnerIdQueryKey(id, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUrlShortnerId>>> = ({ signal }) =>
    getUrlShortnerId(id, params, signal);

  return { queryKey, queryFn, enabled: !!id, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getUrlShortnerId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetUrlShortnerIdQueryResult = NonNullable<Awaited<ReturnType<typeof getUrlShortnerId>>>;
export type GetUrlShortnerIdQueryError = unknown;

export function useGetUrlShortnerId<
  TData = Awaited<ReturnType<typeof getUrlShortnerId>>,
  TError = unknown
>(
  id: string,
  params: undefined | GetUrlShortnerIdParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUrlShortnerId>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUrlShortnerId>>,
          TError,
          Awaited<ReturnType<typeof getUrlShortnerId>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetUrlShortnerId<
  TData = Awaited<ReturnType<typeof getUrlShortnerId>>,
  TError = unknown
>(
  id: string,
  params?: GetUrlShortnerIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUrlShortnerId>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUrlShortnerId>>,
          TError,
          Awaited<ReturnType<typeof getUrlShortnerId>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetUrlShortnerId<
  TData = Awaited<ReturnType<typeof getUrlShortnerId>>,
  TError = unknown
>(
  id: string,
  params?: GetUrlShortnerIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUrlShortnerId>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary The endpoint handling the shortened url access
 */

export function useGetUrlShortnerId<
  TData = Awaited<ReturnType<typeof getUrlShortnerId>>,
  TError = unknown
>(
  id: string,
  params?: GetUrlShortnerIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUrlShortnerId>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetUrlShortnerIdQueryOptions(id, params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
