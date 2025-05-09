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

import type { GetErrorErrorCodeParams, GetErrorParams } from '../cleanIAM.schemas';

import { customAxiosRequest } from '../../mutator/axios/custom-axios';

export const getError = (params?: GetErrorParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/error`, method: 'GET', params, signal });
};

export const getGetErrorQueryKey = (params?: GetErrorParams) => {
  return [`/error`, ...(params ? [params] : [])] as const;
};

export const getGetErrorQueryOptions = <
  TData = Awaited<ReturnType<typeof getError>>,
  TError = unknown
>(
  params?: GetErrorParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getError>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetErrorQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getError>>> = ({ signal }) =>
    getError(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getError>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetErrorQueryResult = NonNullable<Awaited<ReturnType<typeof getError>>>;
export type GetErrorQueryError = unknown;

export function useGetError<TData = Awaited<ReturnType<typeof getError>>, TError = unknown>(
  params: undefined | GetErrorParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getError>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getError>>,
          TError,
          Awaited<ReturnType<typeof getError>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetError<TData = Awaited<ReturnType<typeof getError>>, TError = unknown>(
  params?: GetErrorParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getError>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getError>>,
          TError,
          Awaited<ReturnType<typeof getError>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetError<TData = Awaited<ReturnType<typeof getError>>, TError = unknown>(
  params?: GetErrorParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getError>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetError<TData = Awaited<ReturnType<typeof getError>>, TError = unknown>(
  params?: GetErrorParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getError>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetErrorQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

export const getErrorErrorCode = (
  errorCode: number,
  params?: GetErrorErrorCodeParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<void>({ url: `/error/${errorCode}`, method: 'GET', params, signal });
};

export const getGetErrorErrorCodeQueryKey = (
  errorCode: number,
  params?: GetErrorErrorCodeParams
) => {
  return [`/error/${errorCode}`, ...(params ? [params] : [])] as const;
};

export const getGetErrorErrorCodeQueryOptions = <
  TData = Awaited<ReturnType<typeof getErrorErrorCode>>,
  TError = unknown
>(
  errorCode: number,
  params?: GetErrorErrorCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getErrorErrorCode>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetErrorErrorCodeQueryKey(errorCode, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getErrorErrorCode>>> = ({ signal }) =>
    getErrorErrorCode(errorCode, params, signal);

  return { queryKey, queryFn, enabled: !!errorCode, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getErrorErrorCode>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetErrorErrorCodeQueryResult = NonNullable<
  Awaited<ReturnType<typeof getErrorErrorCode>>
>;
export type GetErrorErrorCodeQueryError = unknown;

export function useGetErrorErrorCode<
  TData = Awaited<ReturnType<typeof getErrorErrorCode>>,
  TError = unknown
>(
  errorCode: number,
  params: undefined | GetErrorErrorCodeParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getErrorErrorCode>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getErrorErrorCode>>,
          TError,
          Awaited<ReturnType<typeof getErrorErrorCode>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetErrorErrorCode<
  TData = Awaited<ReturnType<typeof getErrorErrorCode>>,
  TError = unknown
>(
  errorCode: number,
  params?: GetErrorErrorCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getErrorErrorCode>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getErrorErrorCode>>,
          TError,
          Awaited<ReturnType<typeof getErrorErrorCode>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetErrorErrorCode<
  TData = Awaited<ReturnType<typeof getErrorErrorCode>>,
  TError = unknown
>(
  errorCode: number,
  params?: GetErrorErrorCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getErrorErrorCode>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

export function useGetErrorErrorCode<
  TData = Awaited<ReturnType<typeof getErrorErrorCode>>,
  TError = unknown
>(
  errorCode: number,
  params?: GetErrorErrorCodeParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getErrorErrorCode>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetErrorErrorCodeQueryOptions(errorCode, params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
