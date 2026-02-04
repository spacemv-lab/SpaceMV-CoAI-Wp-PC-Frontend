import axios from 'axios'
import axiosInstance from './axiosConfig'
import { vi } from 'vitest'

// 模拟 localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
}

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
})

// 模拟 console
const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
const mockConsoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})

describe('Axios Config', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    mockConsoleError.mockRestore()
    mockConsoleWarn.mockRestore()
  })

  it('should have correct baseURL', () => {
    expect(axiosInstance.defaults.baseURL).toBe('/')
  })

  it('should have correct timeout', () => {
    expect(axiosInstance.defaults.timeout).toBe(10000)
  })

  it('should add authorization header when token exists', async () => {
    const token = 'test-token'
    mockLocalStorage.getItem.mockReturnValue(token)

    // 创建一个请求拦截器测试
    const requestHandlers = axiosInstance.interceptors.request.handlers as Array<{ fulfilled: Function }>
    const testConfig = await requestHandlers[0].fulfilled({
      method: 'get',
      url: '/test',
      headers: {}
    } as any)

    expect(testConfig.headers?.Authorization).toBe(`Bearer ${token}`)
  })

  it('should not add authorization header when token does not exist', async () => {
    mockLocalStorage.getItem.mockReturnValue(null)

    // 创建一个请求拦截器测试
    const requestHandlers = axiosInstance.interceptors.request.handlers as Array<{ fulfilled: Function }>
    const testConfig = await requestHandlers[0].fulfilled({
      method: 'get',
      url: '/test',
      headers: {}
    } as any)

    expect(testConfig.headers?.Authorization).toBeUndefined()
  })

  it('should not add authorization header when isToken is false', async () => {
    const token = 'test-token'
    mockLocalStorage.getItem.mockReturnValue(token)

    // 创建一个请求拦截器测试
    const requestHandlers = axiosInstance.interceptors.request.handlers as Array<{ fulfilled: Function }>
    const testConfig = await requestHandlers[0].fulfilled({
      method: 'get',
      url: '/test',
      headers: { isToken: false }
    } as any)

    expect(testConfig.headers?.Authorization).toBeUndefined()
  })

  it('should handle get request with params', async () => {
    // 创建一个请求拦截器测试
    const requestHandlers = axiosInstance.interceptors.request.handlers as Array<{ fulfilled: Function }>
    const testConfig = await requestHandlers[0].fulfilled({
      method: 'get',
      url: '/test',
      params: { id: 1, name: 'test' },
      headers: {}
    } as any)

    expect(testConfig.url).toBe('/test?id=1&name=test')
    expect(testConfig.params).toEqual({})
  })

  it('should handle successful response', async () => {
    const mockResponse = {
      data: { code: 200, msg: 'success', data: {} },
      request: { responseType: 'json' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    const result = await responseHandlers[0].fulfilled(mockResponse)
    expect(result).toEqual(mockResponse.data)
  })

  it('should handle blob response', async () => {
    const mockBlob = new Blob()
    const mockResponse = {
      data: mockBlob,
      request: { responseType: 'blob' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    const result = await responseHandlers[0].fulfilled(mockResponse)
    expect(result).toBe(mockBlob)
  })

  it('should handle 401 error', async () => {
    const mockResponse = {
      data: { code: 401, message: 'Unauthorized' },
      request: { responseType: 'json' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    await expect(responseHandlers[0].fulfilled(mockResponse))
      .rejects.toThrow('Unauthorized')
    expect(mockConsoleWarn).toHaveBeenCalledWith('登录状态已过期，请重新登录')
  })

  it('should handle 500 error', async () => {
    const mockResponse = {
      data: { code: 500, message: 'Server Error' },
      request: { responseType: 'json' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    await expect(responseHandlers[0].fulfilled(mockResponse))
      .rejects.toThrow('Server Error')
    expect(mockConsoleError).toHaveBeenCalledWith('系统错误:', 'Server Error')
  })

  it('should handle 601 error', async () => {
    const mockResponse = {
      data: { code: 601, message: 'Warning' },
      request: { responseType: 'json' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    await expect(responseHandlers[0].fulfilled(mockResponse))
      .rejects.toThrow('Warning')
    expect(mockConsoleWarn).toHaveBeenCalledWith('警告:', 'Warning')
  })

  it('should handle other error codes', async () => {
    const mockResponse = {
      data: { code: 400, message: 'Bad Request' },
      request: { responseType: 'json' }
    } as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ fulfilled: Function }>
    await expect(responseHandlers[0].fulfilled(mockResponse))
      .rejects.toThrow('Bad Request')
    expect(mockConsoleError).toHaveBeenCalledWith('接口错误:', 'Bad Request')
  })

  it('should handle network error', async () => {
    const mockError = new Error('Network Error') as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ rejected: Function }>
    await expect(responseHandlers[0].rejected(mockError))
      .rejects.toThrow('Network Error')
    expect(mockConsoleError).toHaveBeenCalledWith('网络请求失败:', 'Network Error')
    expect(mockConsoleError).toHaveBeenCalledWith('后端接口连接异常')
  })

  it('should handle timeout error', async () => {
    const mockError = new Error('timeout of 10000ms exceeded') as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ rejected: Function }>
    await expect(responseHandlers[0].rejected(mockError))
      .rejects.toThrow('timeout of 10000ms exceeded')
    expect(mockConsoleError).toHaveBeenCalledWith('网络请求失败:', 'timeout of 10000ms exceeded')
    expect(mockConsoleError).toHaveBeenCalledWith('系统接口请求超时')
  })

  it('should handle status code error', async () => {
    const mockError = new Error('Request failed with status code 404') as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ rejected: Function }>
    await expect(responseHandlers[0].rejected(mockError))
      .rejects.toThrow('Request failed with status code 404')
    expect(mockConsoleError).toHaveBeenCalledWith('网络请求失败:', 'Request failed with status code 404')
    expect(mockConsoleError).toHaveBeenCalledWith('系统接口404异常')
  })

  it('should handle generic error', async () => {
    const mockError = new Error('Generic Error') as any

    const responseHandlers = axiosInstance.interceptors.response.handlers as Array<{ rejected: Function }>
    await expect(responseHandlers[0].rejected(mockError))
      .rejects.toThrow('Generic Error')
    expect(mockConsoleError).toHaveBeenCalledWith('网络请求失败:', 'Generic Error')
    expect(mockConsoleError).toHaveBeenCalledWith('网络请求失败')
  })
})
