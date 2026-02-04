import { getMainPageContent } from './index'
import axiosInstance from '../../services/axiosConfig'
import { vi, type MockedFunction } from 'vitest'

// 模拟 axiosInstance
vi.mock('../../services/axiosConfig', () => {
  const mockGet = vi.fn()
  return {
    default: {
      get: mockGet
    }
  }
})

const mockAxiosGet = axiosInstance.get as MockedFunction<typeof axiosInstance.get>

describe('MainPage API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call display endpoint when not in preview mode', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '1',
        carouselImageLists: [],
        mainProducts: [],
        typicalCustomer: { imageUrl: '' },
        carouselImageListsTemp: [],
        mainProductsTemp: [],
        typicalCustomerTemp: { imageUrl: '' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    const result = await getMainPageContent(false)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/homepageConfig/display')
    expect(result).toEqual(mockResponse)
  })

  it('should call preview endpoint when in preview mode with type=mainPage', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '0',
        carouselImageLists: [],
        mainProducts: [],
        typicalCustomer: { imageUrl: '' },
        carouselImageListsTemp: [],
        mainProductsTemp: [],
        typicalCustomerTemp: { imageUrl: '' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    // 模拟 window.location.search
    Object.defineProperty(window, 'location', {
      value: { search: '?type=mainPage' },
      writable: true
    })

    const result = await getMainPageContent(true)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/homepageConfig/preview')
    expect(result).toEqual(mockResponse)
  })

  it('should call display endpoint when in preview mode but no type=mainPage', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '1',
        carouselImageLists: [],
        mainProducts: [],
        typicalCustomer: { imageUrl: '' },
        carouselImageListsTemp: [],
        mainProductsTemp: [],
        typicalCustomerTemp: { imageUrl: '' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    // 模拟 window.location.search 不包含 type=mainPage
    Object.defineProperty(window, 'location', {
      value: { search: '?type=other' },
      writable: true
    })

    const result = await getMainPageContent(true)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/homepageConfig/display')
    expect(result).toEqual(mockResponse)
  })

  it('should handle API errors correctly', async () => {
    const errorMessage = 'Network Error'
    mockAxiosGet.mockRejectedValue(new Error(errorMessage))

    await expect(getMainPageContent(false)).rejects.toThrow(errorMessage)
  })
})
