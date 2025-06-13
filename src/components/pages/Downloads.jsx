import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Database, Code, FileText, Calendar, Users, Search, ExternalLink } from 'lucide-react';

const Downloads = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'overview', name: '数据总览', icon: <Database className="w-5 h-5" /> },
    { id: 'datasets', name: '数据集', icon: <Database className="w-5 h-5" /> },
    { id: 'code', name: '开源代码', icon: <Code className="w-5 h-5" /> },
    { id: 'papers', name: '论文资料', icon: <FileText className="w-5 h-5" /> }
  ];

  const downloadData = {
    datasets: [
      {
        title: '微通道传热实验数据集',
        description: '包含不同雷诺数和几何参数下的微通道传热实验数据，可用于传热模型验证和机器学习训练。',
        size: '125 MB',
        format: 'CSV, Excel',
        lastUpdated: '2024-05-15',
        downloads: 234,
        license: 'CC BY 4.0',
        tags: ['传热', '微通道', '实验数据'],
        files: [
          { name: 'microchannel_data.csv', size: '85 MB' },
          { name: 'metadata.xlsx', size: '2 MB' },
          { name: 'readme.txt', size: '1 KB' }
        ],
        citation: 'Zhang, X. et al. (2024). Microchannel Heat Transfer Dataset. Tsinghua University.',
        doi: '10.5281/zenodo.1234567'
      },
      {
        title: '热电材料性能数据库',
        description: '收集了500多种热电材料的热电性能参数，包括塞贝克系数、电导率、热导率等关键参数。',
        size: '45 MB',
        format: 'JSON, CSV',
        lastUpdated: '2024-04-20',
        downloads: 156,
        license: 'MIT',
        tags: ['热电材料', '材料性能', '数据库'],
        files: [
          { name: 'thermoelectric_materials.json', size: '35 MB' },
          { name: 'properties_summary.csv', size: '8 MB' },
          { name: 'documentation.pdf', size: '2 MB' }
        ],
        citation: 'Li, Y. et al. (2024). Thermoelectric Materials Database. Tsinghua University.',
        doi: '10.5281/zenodo.2345678'
      },
      {
        title: '换热器性能测试数据',
        description: '多种类型换热器在不同工况下的性能测试数据，包括传热系数、压降、效率等参数。',
        size: '78 MB',
        format: 'CSV, MATLAB',
        lastUpdated: '2024-03-10',
        downloads: 89,
        license: 'CC BY-SA 4.0',
        tags: ['换热器', '性能测试', '工程数据'],
        files: [
          { name: 'heat_exchanger_data.csv', size: '65 MB' },
          { name: 'analysis_scripts.m', size: '10 MB' },
          { name: 'test_conditions.xlsx', size: '3 MB' }
        ],
        citation: 'Wang, Z. et al. (2024). Heat Exchanger Performance Dataset. Tsinghua University.',
        doi: '10.5281/zenodo.3456789'
      }
    ],
    code: [
      {
        title: 'ThermalSim - 传热数值模拟工具包',
        description: '基于Python开发的传热数值模拟工具包，支持导热、对流和辐射传热的数值计算。',
        language: 'Python',
        version: 'v2.1.0',
        lastUpdated: '2024-05-20',
        downloads: 512,
        stars: 89,
        license: 'MIT',
        tags: ['数值模拟', 'Python', '传热计算'],
        repository: 'https://github.com/tsinghua-thermal/thermalsim',
        documentation: 'https://thermalsim.readthedocs.io',
        features: [
          '支持多种边界条件',
          '自适应网格细化',
          '并行计算支持',
          '可视化输出'
        ]
      },
      {
        title: 'HeatX-Designer - 换热器设计软件',
        description: '基于机器学习的换热器智能设计软件，可快速生成优化的换热器结构参数。',
        language: 'Python, JavaScript',
        version: 'v1.3.2',
        lastUpdated: '2024-04-15',
        downloads: 298,
        stars: 67,
        license: 'Apache 2.0',
        tags: ['换热器设计', '机器学习', 'Web应用'],
        repository: 'https://github.com/tsinghua-thermal/heatx-designer',
        documentation: 'https://heatx-designer.github.io',
        features: [
          '智能参数优化',
          'Web界面操作',
          '多目标优化',
          '结果可视化'
        ]
      },
      {
        title: 'ThermoProps - 热物性计算库',
        description: '提供各种工质热物性参数计算的C++库，支持水、空气、制冷剂等多种工质。',
        language: 'C++',
        version: 'v3.0.1',
        lastUpdated: '2024-03-25',
        downloads: 445,
        stars: 123,
        license: 'BSD-3-Clause',
        tags: ['热物性', 'C++', '工质属性'],
        repository: 'https://github.com/tsinghua-thermal/thermoprops',
        documentation: 'https://thermoprops.readthedocs.io',
        features: [
          '高精度计算',
          '多种工质支持',
          'C/Python接口',
          '快速计算'
        ]
      }
    ],
    papers: [
      {
        title: '传热学课程讲义',
        description: '清华大学传热学课程完整讲义，包含理论推导、例题解析和习题答案。',
        type: '教学资料',
        size: '15 MB',
        format: 'PDF',
        lastUpdated: '2024-02-20',
        downloads: 1234,
        tags: ['传热学', '教学', '课程讲义'],
        chapters: [
          '传热学基础',
          '导热理论',
          '对流传热',
          '辐射传热',
          '传热强化'
        ]
      },
      {
        title: '热电材料研究综述报告',
        description: '近五年热电材料研究进展的综合报告，包含最新研究动态和发展趋势分析。',
        type: '研究报告',
        size: '8 MB',
        format: 'PDF',
        lastUpdated: '2024-01-15',
        downloads: 567,
        tags: ['热电材料', '综述', '研究报告'],
        chapters: [
          '研究现状',
          '关键技术',
          '发展趋势',
          '应用前景'
        ]
      },
      {
        title: '计算传热学方法手册',
        description: '详细介绍各种数值传热方法的理论基础、实现步骤和应用实例。',
        type: '技术手册',
        size: '12 MB',
        format: 'PDF',
        lastUpdated: '2023-12-10',
        downloads: 789,
        tags: ['计算传热', '数值方法', '技术手册'],
        chapters: [
          '有限差分法',
          '有限元法',
          '有限体积法',
          '边界元法',
          '应用实例'
        ]
      }
    ]
  };

  const overviewStats = [
    { title: '数据集总数', value: '15+', icon: <Database className="w-8 h-8" /> },
    { title: '开源项目', value: '8+', icon: <Code className="w-8 h-8" /> },
    { title: '论文资料', value: '25+', icon: <FileText className="w-8 h-8" /> },
    { title: '总下载量', value: '5000+', icon: <Download className="w-8 h-8" /> }
  ];

  const filteredData = activeTab === 'overview' ? [] : 
    downloadData[activeTab]?.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    ) || [];

  const renderDatasetCard = (dataset, index) => {
    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {dataset.title}
            </h3>
            <p className="text-gray-600 mb-3">{dataset.description}</p>
          </div>
          <div className="text-right ml-4">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              {dataset.size}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <strong>格式：</strong>{dataset.format}
          </div>
          <div>
            <strong>更新时间：</strong>{dataset.lastUpdated}
          </div>
          <div>
            <strong>下载次数：</strong>{dataset.downloads}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">标签：</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {dataset.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">包含文件：</strong>
          <ul className="mt-2 space-y-1">
            {dataset.files.map((file, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex justify-between">
                <span>{file.name}</span>
                <span>{file.size}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4 text-sm text-gray-600">
          <strong>引用格式：</strong>
          <p className="mt-1 italic">{dataset.citation}</p>
          <p className="mt-1">DOI: {dataset.doi}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            许可证：{dataset.license}
          </span>
          <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4 mr-2" />
            下载数据集
          </button>
        </div>
      </motion.div>
    );
  };

  const renderCodeCard = (code, index) => {
    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {code.title}
            </h3>
            <p className="text-gray-600 mb-3">{code.description}</p>
          </div>
          <div className="text-right ml-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
              {code.version}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <strong>语言：</strong>{code.language}
          </div>
          <div>
            <strong>更新时间：</strong>{code.lastUpdated}
          </div>
          <div>
            <strong>⭐ Stars：</strong>{code.stars}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">主要特性：</strong>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
            {code.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">标签：</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {code.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            许可证：{code.license}
          </span>
          <div className="flex space-x-2">
            <a
              href={code.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              <Code className="w-4 h-4 mr-1" />
              源码
            </a>
            <a
              href={code.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              <FileText className="w-4 h-4 mr-1" />
              文档
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderPaperCard = (paper, index) => {
    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {paper.title}
            </h3>
            <p className="text-gray-600 mb-3">{paper.description}</p>
          </div>
          <div className="text-right ml-4">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full mb-2">
              {paper.type}
            </span>
            <p className="text-sm text-gray-500">{paper.size}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <strong>格式：</strong>{paper.format}
          </div>
          <div>
            <strong>更新时间：</strong>{paper.lastUpdated}
          </div>
          <div>
            <strong>下载次数：</strong>{paper.downloads}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">主要内容：</strong>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
            {paper.chapters.map((chapter, idx) => (
              <li key={idx}>{chapter}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">标签：</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {paper.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {paper.format} 格式
          </span>
          <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Download className="w-4 h-4 mr-2" />
            下载资料
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* 页面标题 */}
      <section className="py-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            数据下载
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            提供开源代码和科研数据下载服务
          </motion.p>
        </div>
      </section>

      {/* 数据总览 */}
      {activeTab === 'overview' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                开放数据平台
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                我们致力于建设开放的科研数据平台，促进学术资源共享，
                推动热质传递与热系统领域的科研发展。
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {overviewStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.title}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '高质量数据集',
                  description: '提供经过严格验证的实验和仿真数据，支持科研和教学使用。',
                  icon: <Database className="w-8 h-8" />
                },
                {
                  title: '开源软件工具',
                  description: '开发并维护多个开源软件项目，为研究者提供便利的计算工具。',
                  icon: <Code className="w-8 h-8" />
                },
                {
                  title: '学术资源共享',
                  description: '分享课程讲义、研究报告等学术资源，促进知识传播。',
                  icon: <FileText className="w-8 h-8" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-hover bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 标签导航和搜索 */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap justify-center md:justify-start border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-600 border-b-2 border-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {activeTab !== 'overview' && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索资源..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 内容展示 */}
      {activeTab !== 'overview' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  if (activeTab === 'datasets') return renderDatasetCard(item, index);
                  if (activeTab === 'code') return renderCodeCard(item, index);
                  if (activeTab === 'papers') return renderPaperCard(item, index);
                  return null;
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchTerm ? '未找到相关资源' : '暂无相关资源'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 使用说明 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              使用说明
            </h2>
            <p className="text-lg text-gray-600">
              请遵循相关许可证条款使用我们提供的资源
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '下载使用',
                description: '所有资源均可免费下载使用，请注意查看具体的许可证要求。',
                icon: <Download className="w-6 h-6" />
              },
              {
                title: '引用规范',
                description: '使用我们的数据或代码发表成果时，请按照提供的格式进行引用。',
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: '问题反馈',
                description: '如有任何问题或建议，欢迎通过邮件或GitHub Issues联系我们。',
                icon: <Users className="w-6 h-6" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-purple-600 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Downloads;

