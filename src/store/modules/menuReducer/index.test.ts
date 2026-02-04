import menuReducer, { setMenuIdx, MenuState } from './index'

describe('Menu Reducer', () => {
  const initialState: MenuState = {
    selMenuIdx: 0
  }

  it('should return initial state', () => {
    const result = menuReducer(undefined, { type: 'unknown' })
    expect(result).toEqual(initialState)
  })

  it('should handle setMenuIdx action', () => {
    const newIndex = 2
    const action = setMenuIdx(newIndex)
    const result = menuReducer(initialState, action)
    
    expect(result.selMenuIdx).toBe(newIndex)
  })

  it('should handle setMenuIdx with different values', () => {
    // 测试设置为 1
    let action = setMenuIdx(1)
    let result = menuReducer(initialState, action)
    expect(result.selMenuIdx).toBe(1)

    // 测试从 1 设置为 3
    action = setMenuIdx(3)
    result = menuReducer(result, action)
    expect(result.selMenuIdx).toBe(3)

    // 测试设置为 0
    action = setMenuIdx(0)
    result = menuReducer(result, action)
    expect(result.selMenuIdx).toBe(0)
  })
})
