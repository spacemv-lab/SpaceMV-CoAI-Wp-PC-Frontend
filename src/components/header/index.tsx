import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from '@/components/toast/ToastManager.tsx'
import { useAppDispatch, useAppSelector } from '@/store'
import { setMenuIdx } from '@/store/modules/menuReducer'
import { setCompanyInfo, setLoading, setError } from '@/store/modules/companyReducer'
import { getCompanyInfoConfig, getCompanyInfoByPublishStatus } from '@/api/company'
import styles from './index.module.less'
import { getTopButtons, TopButton, ButtonStatus, ButtonType } from '@/api/topButton'
import { adjustPathForEnvironment } from '@/utils/pathUtils'

interface HeaderProps {
  isPreview?: boolean
}

const MENU_MAP = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '产品一',
    path: '/model',
    children: [
      { name: '产品介绍1', path: '/model#agriculture' },
      { name: '产品介绍2', path: '/model#industry' },
      { name: '产品介绍3', path: '/model#sky' },
      { name: '典型案例', path: '/model#case' }
    ]
  },
  {
    name: '产品二',
    path: '/device',
    children: [
      { name: '应用场景', path: '/device#case' },
      { name: '典型产品', path: '/device#product' }
    ]
  },
  {
    name: '新闻中心',
    path: '/news'
  },
  {
    name: '关于我们',
    path: '/about',
    children: [
      { name: '公司简介', path: '/about#intro' },
      { name: '产品认证', path: '/about#product' },
      { name: '联系我们', path: '/about#contact' }
    ]
  }
]

function Header({ isPreview = false }: HeaderProps) {
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  const menuIdx = useAppSelector((state) => state.menu.selMenuIdx)
  // 从store获取公司信息
  const companyInfo = useAppSelector(state => state.company.companyInfo)
  
  const [buttons, setButtons] = useState<TopButton[]>([])
  const [tooltip, setTooltip] = useState<{show: boolean; text: string; buttonId: string}>({show: false, text: '', buttonId: ''})

  // 检测当前运行环境
  const getCurrentEnvironment = (): 'intranet' | 'extranet' => {
    // 优先通过环境变量检测
    if (import.meta.env.VITE_ENV === 'intranet') return 'intranet'
    if (import.meta.env.VITE_ENV === 'extranet') return 'extranet'
    
    // 默认视为外网
    return 'extranet'
  }

  // 当前环境
  const currentEnvironment = getCurrentEnvironment()

  // 获取公司信息配置（如果还没有数据）
  useEffect(() => {
    if (!companyInfo) {
      dispatch(setLoading(true))
      getCompanyInfoConfig(isPreview)
        .then(response => {
          if (response.code === 200) {
            dispatch(setCompanyInfo(response.data))
          } else {
            dispatch(setError('获取公司信息失败'))
          }
        })
    }
  }, [dispatch, companyInfo, isPreview])

  useEffect(() => {
    getTopButtons(isPreview)
      .then(res => {
        if (res.code === 200) {
          setButtons(res.data)
        } 
      })
  }, [isPreview])

  const handleTooltipShow = (text: string, buttonId: string) => {
    setTooltip({show: true, text, buttonId})
  }

  const handleTooltipHide = () => {
    setTooltip({show: false, text: '', buttonId: ''})
  }

  function handleMenuClick(path: string, index: number) {
    dispatch(setMenuIdx(index))
    // 分离路径和锚点
    const [pathWithoutHash, hash] = path.split('#')
    
    // 获取当前URL的查询参数
    const currentParams = window.location.search
    
    // 使用公共函数根据预览环境调整路径（不包含锚点）
    const targetPathWithoutHash = adjustPathForEnvironment(pathWithoutHash, isPreview)
    
    // 完整目标路径（包含锚点和查询参数）
    let targetPath = targetPathWithoutHash
    if (hash) {
      targetPath = `${targetPath}#${hash}`
    }
    // 添加查询参数（如果存在）
    if (currentParams) {
      targetPath = `${targetPath}${currentParams}`
    }
    
    // 检查是否是当前页面内的锚点导航
    const currentPath = window.location.pathname
    
    if (currentPath === targetPathWithoutHash && hash) {
      // 同一页面内的锚点导航，直接滚动
      const element = document.getElementById(hash)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // 不同页面的导航
      nav(targetPath)
      
      // 如果包含锚点，延迟执行滚动以确保页面加载完成
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 500) // 500ms延迟确保页面加载完成
      }
    }
  }

  function handleBtnClick(status: ButtonStatus, path: string) {
    // 获取当前URL的查询参数
    const currentParams = window.location.search
    
    // 添加查询参数到目标路径
    const targetPath = currentParams ? `${path}${currentParams}` : path
    
    if (status === ButtonStatus.completeNav) nav(targetPath)
    if (status === ButtonStatus.complete) window.open(targetPath)
    if (status === ButtonStatus.completeSelf) location.href = targetPath
    if (status === ButtonStatus.developing) toast.info('正在开发中！')
  }

  return (
    <div className={styles.root}>
      <img 
        className="logo" 
        src={companyInfo ? (getCompanyInfoByPublishStatus(companyInfo)?.logoUrl || '/header/logo.png') : '/header/logo.png'} 
        alt={companyInfo ? (getCompanyInfoByPublishStatus(companyInfo)?.companyName || 'logo') : 'logo'} 
      />
      <div className="flex flex-1 justify-between items-center">
        <div className="menu">
          {MENU_MAP.map((item, index) => (
            <div
              key={index}
              className={classNames('menu-item', { active: menuIdx === index })}
              onClick={() => handleMenuClick(item.path, index)}
            >
              {item.name}
              {item.children && (
                <div className="submenu">
                  {item.children.map((subItem) => (
                    <div
                      key={subItem.path}
                      className="submenu-item"
                      onClick={() => handleMenuClick(subItem.path, index)}
                    >
                      {subItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="industry-btn">
          
          {buttons
            .filter(item => 
              // 按isShow参数结合网络环境过滤：外网只显示isShow为1的按钮，内网显示所有按钮
              currentEnvironment === 'extranet' ? item.isShow === '1' : true
            )
            .map((item) => (
            <div
              className={classNames('btn', {
                'image-btn': item.buttonType === ButtonType.image
              })}
              key={item.buttonId}
              onClick={() => handleBtnClick(item.state, item.jumpUrl)}
              onMouseEnter={() => item.buttonType === ButtonType.image && item.buttonText && handleTooltipShow(item.buttonText, item.buttonId)}
              onMouseLeave={handleTooltipHide}
              style={{
                ...(item.buttonType === ButtonType.text && item.backgroundColor 
                  ? { backgroundColor: item.backgroundColor } 
                  : {})
              }}
            >
              {item.buttonType === ButtonType.text ? (
                item.buttonText
              ) : (
                <>
                  <img 
                    src={item.imageUrl} 
                    alt={item.buttonText || ''} 
                    className="btn-image"
                  />
                  {tooltip.show && tooltip.buttonId === item.buttonId && (
                    <div className="tooltip">
                      {tooltip.text}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header


