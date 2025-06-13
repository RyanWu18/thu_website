import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 课题组信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">热质传递与热系统课题组</h3>
            <p className="text-gray-300 text-sm">
              清华大学热质传递与热系统课题组致力于热能工程领域的前沿研究，
              培养高水平的科研人才，推动热能技术的创新发展。
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">清</span>
              </div>
              <div>
                <p className="font-medium">清华大学</p>
                <p className="text-sm text-gray-300">Tsinghua University</p>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">
                  研究团队
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-white transition-colors">
                  研究内容
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-300 hover:text-white transition-colors">
                  研究成果
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  科研项目
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-white transition-colors">
                  人才培养
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-300 hover:text-white transition-colors">
                  数据下载
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">北京市海淀区清华园1号</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">+86-10-62785001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">thermal@tsinghua.edu.cn</span>
              </li>
            </ul>
          </div>

          {/* 相关链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">相关链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.tsinghua.edu.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>清华大学</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.me.tsinghua.edu.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>机械工程系</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nsfc.gov.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>国家自然科学基金委</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.most.gov.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>科技部</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 清华大学热质传递与热系统课题组. 保留所有权利.
          </p>
          <p className="mt-2">
            网站设计与开发：清华大学热质传递与热系统课题组
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

