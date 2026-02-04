import {
  getProductInfoConfig,
  getLLMProductBasicInfoByPublishStatus,
  getDeviceProductBasicInfoByPublishStatus,
  getLLMApplicationScenariosByPublishStatus,
  getDeviceApplicationScenariosByPublishStatus,
  getLLMTypicalCaseProductsByPublishStatus,
  getDeviceTypicalCaseProductsByPublishStatus
} from './index'
import axiosInstance from '../../services/axiosConfig'
import { vi } from 'vitest'

// 模拟 axiosInstance
vi.mock('../../services/axiosConfig', () => {
  const mockGet = vi.fn()
  return {
    default: {
      get: mockGet
    }
  }
})

const mockAxiosGet = axiosInstance.get as vi.MockedFunction<typeof axiosInstance.get>

describe('Product API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call display endpoint when not in preview mode', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '1',
        txwxLLMProductBasicInfo: { id: 1, productName: 'LLM Product' },
        txwxDeviceProductBasicInfo: { id: 2, productName: 'Device Product' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    const result = await getProductInfoConfig(false)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/productConfig/display')
    expect(result).toEqual(mockResponse)
  })

  it('should call preview endpoint when in preview mode with type=product', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '0',
        txwxLLMProductBasicInfoTemp: { id: 1, productName: 'LLM Product Temp' },
        txwxDeviceProductBasicInfoTemp: { id: 2, productName: 'Device Product Temp' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    // 模拟 window.location.search
    Object.defineProperty(window, 'location', {
      value: { search: '?type=product' },
      writable: true
    })

    const result = await getProductInfoConfig(true)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/productConfig/preview')
    expect(result).toEqual(mockResponse)
  })

  it('should call display endpoint when in preview mode but no type=product', async () => {
    const mockResponse = {
      code: 200,
      msg: 'success',
      data: {
        isPublish: '1',
        txwxLLMProductBasicInfo: { id: 1, productName: 'LLM Product' }
      }
    }

    mockAxiosGet.mockResolvedValue(mockResponse)

    // 模拟 window.location.search 不包含 type=product
    Object.defineProperty(window, 'location', {
      value: { search: '?type=other' },
      writable: true
    })

    const result = await getProductInfoConfig(true)

    expect(mockAxiosGet).toHaveBeenCalledWith('/crm-website/productConfig/display')
    expect(result).toEqual(mockResponse)
  })

  it('should handle API errors correctly', async () => {
    const errorMessage = 'Network Error'
    mockAxiosGet.mockRejectedValue(new Error(errorMessage))

    await expect(getProductInfoConfig(false)).rejects.toThrow(errorMessage)
  })
})

describe('Product API Helper Functions', () => {
  const mockProductData = {
    isPublish: '1',
    txwxLLMProductBasicInfo: { id: 1, productName: 'LLM Product' },
    txwxDeviceProductBasicInfo: { id: 2, productName: 'Device Product' },
    txwxLLMApplicationScenarios: [{ scenarioId: 1, scenarioName: 'Scenario 1' }],
    txwxDeviceApplicationScenarios: [{ scenarioId: 2, scenarioName: 'Scenario 2' }],
    txwxLLMTypicalCaseProducts: [{ caseProductId: 1, productName: 'Case 1' }],
    txwxDeviceTypicalCaseProducts: [{ caseProductId: 2, productName: 'Case 2' }],
    txwxLLMProductBasicInfoTemp: { id: 3, productName: 'LLM Product Temp' },
    txwxDeviceProductBasicInfoTemp: { id: 4, productName: 'Device Product Temp' },
    txwxLLMApplicationScenariosTemp: [{ scenarioId: 3, scenarioName: 'Scenario 3' }],
    txwxDeviceApplicationScenariosTemp: [{ scenarioId: 4, scenarioName: 'Scenario 4' }],
    txwxLLMTypicalCaseProductsTemp: [{ caseProductId: 3, productName: 'Case 3' }],
    txwxDeviceTypicalCaseProductsTemp: [{ caseProductId: 4, productName: 'Case 4' }]
  }

  it('should return published LLM product basic info when isPublish is 1', () => {
    const result = getLLMProductBasicInfoByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxLLMProductBasicInfo)
  })

  it('should return temp LLM product basic info when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getLLMProductBasicInfoByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxLLMProductBasicInfoTemp)
  })

  it('should return published device product basic info when isPublish is 1', () => {
    const result = getDeviceProductBasicInfoByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxDeviceProductBasicInfo)
  })

  it('should return temp device product basic info when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getDeviceProductBasicInfoByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxDeviceProductBasicInfoTemp)
  })

  it('should return published LLM application scenarios when isPublish is 1', () => {
    const result = getLLMApplicationScenariosByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxLLMApplicationScenarios)
  })

  it('should return temp LLM application scenarios when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getLLMApplicationScenariosByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxLLMApplicationScenariosTemp)
  })

  it('should return published device application scenarios when isPublish is 1', () => {
    const result = getDeviceApplicationScenariosByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxDeviceApplicationScenarios)
  })

  it('should return temp device application scenarios when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getDeviceApplicationScenariosByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxDeviceApplicationScenariosTemp)
  })

  it('should return published LLM typical case products when isPublish is 1', () => {
    const result = getLLMTypicalCaseProductsByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxLLMTypicalCaseProducts)
  })

  it('should return temp LLM typical case products when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getLLMTypicalCaseProductsByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxLLMTypicalCaseProductsTemp)
  })

  it('should return published device typical case products when isPublish is 1', () => {
    const result = getDeviceTypicalCaseProductsByPublishStatus(mockProductData)
    expect(result).toEqual(mockProductData.txwxDeviceTypicalCaseProducts)
  })

  it('should return temp device typical case products when isPublish is 0', () => {
    const tempData = { ...mockProductData, isPublish: '0' }
    const result = getDeviceTypicalCaseProductsByPublishStatus(tempData)
    expect(result).toEqual(tempData.txwxDeviceTypicalCaseProductsTemp)
  })
})
