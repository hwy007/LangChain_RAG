/**
 * API连接测试工具
 * 用于在开发时快速测试后端服务是否可用
 */

import { API_CONFIG } from '../config/api.config';

/**
 * 测试后端健康检查接口
 * 注意：健康检查接口通常在 /health，不带 /api 前缀
 */
export async function testHealthCheck(): Promise<boolean> {
  try {
    const baseUrl = API_CONFIG.BASE_URL.replace('/api', '');
    const response = await fetch(`${baseUrl}/health`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ 后端服务健康检查通过:', data);
      return true;
    } else {
      console.error('❌ 后端服务健康检查失败:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ 无法连接到后端服务:', error);
    return false;
  }
}

/**
 * 测试API基础URL是否可访问
 */
export async function testAPIConnection(): Promise<boolean> {
  try {
    console.log('🔍 正在测试API连接:', API_CONFIG.BASE_URL);
    
    // 尝试访问健康检查接口
    const healthOk = await testHealthCheck();
    
    if (healthOk) {
      console.log('✅ 后端服务连接正常');
      console.log('📍 API基础地址:', API_CONFIG.BASE_URL);
      return true;
    } else {
      console.log('⚠️  健康检查失败，但可能是接口未实现');
      console.log('💡 请尝试通过应用程序进行功能测试');
      return false;
    }
  } catch (error) {
    console.error('❌ API连接测试失败:', error);
    console.log('💡 请确保后端服务已启动在:', API_CONFIG.BASE_URL);
    return false;
  }
}

/**
 * 在控制台打印API配置信息
 */
export function printAPIConfig(): void {
  console.log('📋 当前API配置:');
  console.log('  - 基础URL:', API_CONFIG.BASE_URL);
  console.log('  - 超时时间:', API_CONFIG.TIMEOUT, 'ms');
  console.log('  - 端点列表:');
  Object.entries(API_CONFIG.ENDPOINTS).forEach(([key, value]) => {
    console.log(`    • ${key}: ${API_CONFIG.BASE_URL}${value}`);
  });
}

// 如果直接运行此文件，执行测试
if (typeof window !== 'undefined' && window.location.search.includes('test-api')) {
  console.log('🚀 开始API连接测试...');
  printAPIConfig();
  testAPIConnection();
}
