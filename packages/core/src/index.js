/**
 * PawBox 核心库
 * OpenClaw便携版核心模块
 * 
 * 功能：模块注册、配置管理、服务编排
 */

class PawBoxCore {
  constructor() {
    this.modules = new Map();
    this.config = {};
  }

  /**
   * 注册模块
   * @param {string} name - 模块名称
   * @param {object} module - 模块实例
   */
  register(name, module) {
    this.modules.set(name, module);
    console.log(`[PawBox] 模块已注册: ${name}`);
  }

  /**
   * 获取模块
   * @param {string} name - 模块名称
   * @returns {object} 模块实例
   */
  get(name) {
    return this.modules.get(name);
  }

  /**
   * 加载配置
   * @param {object} config - 配置对象
   */
  loadConfig(config) {
    this.config = { ...this.config, ...config };
    console.log('[PawBox] 配置已加载');
  }

  /**
   * 获取所有已注册模块列表
   */
  listModules() {
    return Array.from(this.modules.keys());
  }
}

module.exports = PawBoxCore;
