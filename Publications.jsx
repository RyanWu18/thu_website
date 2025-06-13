import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Users, Award, Search } from 'lucide-react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('journals');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'journals', name: '期刊论文', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'books', name: '学术著作', icon: <Award className="w-5 h-5" /> }
  ];

  const publications = {
    journals: [
      {
        title: 'Enhanced Heat Transfer in Microchannels with Nanofluid Flow: A Comprehensive Study',
        authors: ['张教授', 'Li, X.', 'Wang, Y.', '赵同学'],
        journal: 'International Journal of Heat and Mass Transfer',
        year: 2024,
        volume: '218',
        pages: '124567',
        doi: '10.1016/j.ijheatmasstransfer.2024.124567',
        impact: 5.431,
        citations: 15,
        abstract: '本研究通过实验和数值模拟相结合的方法，系统研究了纳米流体在微通道中的强化传热机理。结果表明，适当的纳米颗粒浓度可以显著提高传热系数，为微电子器件的热管理提供了新的解决方案。',
        keywords: ['纳米流体', '微通道', '传热强化', '数值模拟'],
        type: 'SCI一区'
      },
      {
        title: 'Thermoelectric Properties of Novel Bismuth Telluride-based Composites',
        authors: ['李教授', 'Chen, Z.', '钱同学', 'Brown, M.'],
        journal: 'Nature Energy',
        year: 2024,
        volume: '9',
        pages: '234-241',
        doi: '10.1038/s41560-024-01234-5',
        impact: 67.439,
        citations: 42,
        abstract: '开发了一种新型的碲化铋基复合材料，通过界面工程显著提高了热电优值ZT。该材料在300K时的ZT值达到2.1，为热电发电技术的产业化应用奠定了基础。',
        keywords: ['热电材料', '碲化铋', '界面工程', 'ZT值'],
        type: 'SCI一区'
      },
      {
        title: 'Machine Learning-Assisted Design of Heat Exchangers for Enhanced Performance',
        authors: ['王副教授', '孙同学', 'Kumar, A.', '张教授'],
        journal: 'Applied Energy',
        year: 2023,
        volume: '352',
        pages: '121890',
        doi: '10.1016/j.apenergy.2023.121890',
        impact: 11.446,
        citations: 28,
        abstract: '结合机器学习算法和传热理论，建立了换热器性能预测模型，实现了换热器结构的智能化设计。该方法可将换热器效率提升15%以上。',
        keywords: ['机器学习', '换热器设计', '性能优化', '人工智能'],
        type: 'SCI一区'
      },
      {
        title: 'Phase Change Materials for Thermal Energy Storage: A Review of Recent Advances',
        authors: ['李教授', '张教授', 'Smith, J.', '刘博士'],
        journal: 'Renewable and Sustainable Energy Reviews',
        year: 2023,
        volume: '189',
        pages: '113456',
        doi: '10.1016/j.rser.2023.113456',
        impact: 16.799,
        citations: 67,
        abstract: '系统综述了相变材料在热能储存领域的最新进展，分析了不同类型相变材料的优缺点，并展望了未来的发展方向。',
        keywords: ['相变材料', '热能储存', '综述', '可再生能源'],
        type: 'SCI一区'
      },
      {
        title: 'Numerical Investigation of Heat Transfer Enhancement in Tube Banks with Vortex Generators',
        authors: ['赵同学', '张教授', 'Wilson, R.', '李教授'],
        journal: 'International Journal of Thermal Sciences',
        year: 2023,
        volume: '195',
        pages: '108234',
        doi: '10.1016/j.ijthermalsci.2023.108234',
        impact: 4.779,
        citations: 19,
        abstract: '通过数值模拟研究了涡流发生器对管束传热的强化效果，优化了涡流发生器的几何参数，为高效换热器设计提供了理论指导。',
        keywords: ['涡流发生器', '管束传热', '数值模拟', '传热强化'],
        type: 'SCI二区'
      }
    ],
    books: [
      {
        title: '现代传热学理论与应用',
        authors: ['张教授', '李教授'],
        publisher: '清华大学出版社',
        year: 2023,
        isbn: '978-7-302-12345-6',
        pages: 456,
        description: '本书系统介绍了现代传热学的基本理论和最新进展，涵盖了导热、对流和辐射三种传热方式，以及传热强化技术和数值计算方法。',
        chapters: [
          '传热学基础',
          '导热理论与应用',
          '对流传热',
          '辐射传热',
          '传热强化技术',
          '数值传热学',
          '工程应用实例'
        ],
        awards: ['国家级优秀教材二等奖']
      },
      {
        title: '热电材料与器件',
        authors: ['李教授', 'Smith, J.', '王副教授'],
        publisher: 'Springer',
        year: 2022,
        isbn: '978-3-030-12345-7',
        pages: 324,
        description: '全面介绍了热电材料的基本原理、制备方法和器件应用，是热电领域的重要参考书。',
        chapters: [
          '热电效应基础',
          '热电材料分类',
          '材料制备技术',
          '性能表征方法',
          '器件设计与制造',
          '应用案例分析'
        ],
        awards: ['国际热电学会优秀著作奖']
      },
      {
        title: '计算传热学方法与实践',
        authors: ['王副教授', '张教授', '刘博士'],
        publisher: '科学出版社',
        year: 2022,
        isbn: '978-7-03-12345-8',
        pages: 398,
        description: '详细介绍了计算传热学的数值方法、编程实现和工程应用，适合研究生和工程技术人员使用。',
        chapters: [
          '数值方法基础',
          '有限差分法',
          '有限元法',
          '有限体积法',
          '边界条件处理',
          '程序设计与实现',
          '工程应用案例'
        ],
        awards: []
      }
    ]
  };

  const filteredPublications = publications[activeTab]?.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (pub.keywords && pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
  ) || [];

  const renderJournalPaper = (paper, index) => {
    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-hover bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
              {paper.title}
            </h3>
            <p className="text-gray-600 mb-2">
              {paper.authors.join(', ')}
            </p>
            <p className="text-purple-600 font-medium mb-2">
              {paper.journal}, {paper.year}
            </p>
          </div>
          <div className="text-right ml-4">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-2">
              {paper.type}
            </span>
            <p className="text-sm text-gray-500">IF: {paper.impact}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {paper.abstract}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <strong>卷期页码：</strong>Vol. {paper.volume}, {paper.pages}
          </div>
          <div>
            <strong>引用次数：</strong>{paper.citations}
          </div>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">关键词：</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {paper.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            DOI: {paper.doi}
          </div>
          <a
            href={`https://doi.org/${paper.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            查看论文
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>
    );
  };

  const renderBook = (book, index) => {
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-600 mb-2">
              {book.authors.join(', ')}
            </p>
            <p className="text-purple-600 font-medium mb-2">
              {book.publisher}, {book.year}
            </p>
          </div>
          <div className="text-right ml-4">
            <div className="text-sm text-gray-500">
              {book.pages} 页
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            {book.description}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">主要章节</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {book.chapters.map((chapter, idx) => (
              <li key={idx}>{chapter}</li>
            ))}
          </ul>
        </div>

        {book.awards && book.awards.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">获奖情况</h4>
            <div className="flex flex-wrap gap-2">
              {book.awards.map((award, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>
            ISBN: {book.isbn}
          </div>
          <a
            href="#"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            查看详情
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
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
            研究成果
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            在国际顶级期刊发表高水平学术论文
          </motion.p>
        </div>
      </section>

      {/* 成果统计 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: '发表论文' },
              { number: '15+', label: 'SCI一区论文' },
              { number: '500+', label: '总引用次数' },
              { number: '5', label: '学术著作' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 成果展示 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 搜索和标签导航 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
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

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索论文或作者..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 成果列表 */}
          <div className="space-y-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((item, index) => (
                activeTab === 'journals' 
                  ? renderJournalPaper(item, index)
                  : renderBook(item, index)
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm ? '未找到相关成果' : '暂无相关成果'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 学术影响力 */}
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
              学术影响力
            </h2>
            <p className="text-lg text-gray-600">
              我们的研究成果在国际学术界产生了重要影响
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '高影响因子期刊',
                description: '在Nature Energy、Applied Energy等顶级期刊发表论文',
                icon: <Award className="w-8 h-8" />
              },
              {
                title: '国际合作',
                description: '与MIT、Stanford等知名高校开展合作研究',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: '学术声誉',
                description: '多位教师担任国际期刊编委和审稿人',
                icon: <BookOpen className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

export default Publications;

