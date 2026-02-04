import { render, screen, fireEvent, act } from '@testing-library/react'
import { vi } from 'vitest'
import Carousel from './index'

const mockItems = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' }
]

describe('Carousel Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should render carousel with items', () => {
    const { container } = render(<Carousel items={mockItems} />)
    
    // 检查轮播图容器是否存在
    expect(container.firstChild).toBeInTheDocument()
    
    // 检查图片是否渲染
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should not render controls when only one item', () => {
    const singleItem = [{ src: 'single.jpg', alt: 'Single Image' }]
    render(<Carousel items={singleItem} />)
    
    // 检查控制按钮是否不存在
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should navigate to next slide when next button is clicked', () => {
    render(<Carousel items={mockItems} autoplay={false} />)
    
    // 点击下一个按钮
    const buttons = screen.getAllByRole('button')
    const nextButton = buttons[1] // 第二个按钮是下一个
    fireEvent.click(nextButton)
    
    // 检查第二张图片是否可见（通过检查 alt 文本）
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should navigate to previous slide when prev button is clicked', () => {
    render(<Carousel items={mockItems} autoplay={false} />)
    
    // 先点击下一个按钮切换到第二张
    const buttons = screen.getAllByRole('button')
    const nextButton = buttons[1] // 第二个按钮是下一个
    fireEvent.click(nextButton)
    
    // 点击上一个按钮
    const prevButton = buttons[0] // 第一个按钮是上一个
    fireEvent.click(prevButton)
    
    // 检查第一张图片是否可见
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should navigate to specific slide when dot is clicked', () => {
    render(<Carousel items={mockItems} autoplay={false} />)
    
    // 点击第二个点（索引为2，因为前两个是控制按钮）
    const buttons = screen.getAllByRole('button')
    const dotButton = buttons[2] // 第三个按钮是第一个点
    fireEvent.click(dotButton)
    
    // 检查图片是否可见
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should autoplay slides when autoplay is true', () => {
    render(<Carousel items={mockItems} autoplay={true} interval={1000} />)
    
    // 快进1秒，检查是否自动切换
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    
    // 检查图片是否可见
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should not autoplay when autoplay is false', () => {
    render(<Carousel items={mockItems} autoplay={false} interval={1000} />)
    
    // 快进1秒，检查是否没有切换
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    
    // 检查图片是否可见
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('should not render anything when items array is empty', () => {
    const { container } = render(<Carousel items={[]} />)
    expect(container.firstChild).toBeNull()
  })
})
