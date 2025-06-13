import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Users, Target, Award, ExternalLink, Search } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('national');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'national', name: '国家重点研发计划', icon: <Award className="w-5 h-5" /> },
    { id: 'nsfc', name: '国家自然科学基金', icon: <Target className="w-5 h-5" /> },
    { id: 'provincial', name: '省部级课题', icon: <Users className="w-5 h-5" /> },
    { id: 'horizontal', name: '横向课题', icon: <DollarSign className="w-5 h-5" /> }
  ];

  const projects = {
    national: [
      {
        title: '新能源汽车动力电池热管理关键技术研究',
        projectNumber: '2023YFB2503000',
        leader: '张教授',
        duration: '2023.01 - 2026.12',
        funding: 2000,
        status: '在研',
        description: '针对新能源汽车动力电池热管理需求，开发高效的热管理系统和控制策略，提升电池安全性和使用寿命。',
        objectives: [
          '建立电池热行为预测模型',
          '开发新型热管理材料',
          '设计智能热控制系统',
          '验证系统性能和可靠性'
        ],
        participants: ['清华大学', '北京理工大学', '比亚迪公司', '宁德时代'],
        achievements: [
          '发表SCI论文8篇',
          '申请发明专利6项',
          '开发原型系统2套'
        ]
      },
      {
        title: '高效热电转换材料与器件产业化关键技术',
        projectNumber: '2022YFB3803000',
        leader: '李教授',
        duration: '2022.06 - 2025.05',
        funding: 1800,
        status: '在研',
        description: '开发高性能热电材料，突破热电器件制造关键技术，推动热电发电技术产业化应用。',
        objectives: [
          '提升热电材料ZT值',
          '优化器件结构设计',
          '建立产业化生产线',
          '开展示范应用'
        ],
        participants: ['清华大学', '中科院上海硅酸盐所', '东方电气集团'],
        achievements: [
          '材料ZT值突破2.0',
          '发表Nature子刊论文2篇',
          '建成中试生产线'
        ]
      }
    ],
    nsfc: [
      {
        title: '微纳尺度界面传热机理及调控方法研究',
        projectNumber: '52376108',
        leader: '张教授',
        duration: '2024.01 - 2027.12',
        funding: 58,
        status: '在研',
        description: '研究微纳尺度界面传热的基本机理，建立理论模型，开发传热调控新方法。',
        objectives: [
          '揭示界面传热机理',
          '建立理论预测模型',
          '开发调控新方法',
          '验证理论和方法'
        ],
        participants: ['清华大学'],
        achievements: [
          '发表SCI论文5篇',
          '培养博士生2名'
        ]
      },
      {
        title: '基于机器学习的换热器智能设计方法',
        projectNumber: '52306087',
        leader: '王副教授',
        duration: '2024.01 - 2026.12',
        funding: 30,
        status: '在研',
        description: '结合机器学习和传热理论，建立换热器智能设计平台，提升设计效率和性能。',
        objectives: [
          '构建设计数据库',
          '开发预测算法',
          '建立设计平台',
          '验证设计方法'
        ],
        participants: ['清华大学'],
        achievements: [
          '建立数据库1000+样本',
          '开发设计软件1套'
        ]
      },
      {
        title: '多相流传热传质耦合机理研究',
        projectNumber: '52176085',
        leader: '李教授',
        duration: '2022.01 - 2025.12',
        funding: 60,
        status: '在研',
        description: '研究多相流中传热传质的耦合机理，建立数值计算方法，指导工程应用。',
        objectives: [
          '建立耦合理论模型',
          '开发数值计算方法',
          '验证模型准确性',
          '指导工程应用'
        ],
        participants: ['清华大学'],
        achievements: [
          '发表SCI论文12篇',
          '获得软件著作权2项'
        ]
      }
    ],
    provincial: [
      {
        title: '北京市新能源热管理技术创新中心建设',
        projectNumber: 'Z231100005923001',
        leader: '张教授',
        duration: '2023.01 - 2025.12',
        funding: 500,
        status: '在研',
        description: '建设新能源热管理技术创新中心，开展关键技术研发和产业化推广。',
        objectives: [
          '建设研发平台',
          '开展技术攻关',
          '培养专业人才',
          '推动产业发展'
        ],
        participants: ['清华大学', '北京理工大学', '相关企业'],
        achievements: [
          '建成实验平台3个',
          '培养人才50余人'
        ]
      },
      {
        title: '教育部重点实验室开放基金项目',
        projectNumber: 'KFKT2023-01',
        leader: '李教授',
        duration: '2023.06 - 2024.12',
        funding: 20,
        status: '结题',
        description: '开展传热强化新技术研究，为实验室发展提供技术支撑。',
        objectives: [
          '开发新型强化技术',
          '验证技术效果',
          '形成技术储备'
        ],
        participants: ['清华大学'],
        achievements: [
          '发表论文3篇',
          '申请专利2项',
          '顺利结题'
        ]
      }
    ],
    horizontal: [
      {
        title: '某航空发动机热管理系统设计',
        projectNumber: 'HX2024-001',
        leader: '张教授',
        duration: '2024.03 - 2025.08',
        funding: 150,
        status: '在研',
        description: '为某型航空发动机设计高效的热管理系统，提升发动机性能和可靠性。',
        objectives: [
          '分析热管理需求',
          '设计热管理方案',
          '验证系统性能',
          '提供技术支持'
        ],
        participants: ['清华大学', '某航空公司'],
        achievements: [
          '完成方案设计',
          '通过中期评审'
        ]
      },
      {
        title: '数据中心冷却系统优化技术开发',
        projectNumber: 'HX2023-005',
        leader: '王副教授',
        duration: '2023.09 - 2024.12',
        funding: 80,
        status: '结题',
        description: '为大型数据中心开发高效的冷却系统，降低能耗和运营成本。',
        objectives: [
          '分析冷却需求',
          '优化系统设计',
          '降低能耗成本',
          '提供解决方案'
        ],
        participants: ['清华大学', '某互联网公司'],
        achievements: [
          '节能30%以上',
          '成功产业化应用',
          '获得用户好评'
        ]
      }
    ]
  };

  const filteredProjects = projects[activeTab]?.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const getStatusColor = (status) => {
    switch (status) {
      case '在研':
        return 'bg-green-100 text-green-700';
      case '结题':
        return 'bg-blue-100 text-blue-700';
      case '申请中':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderProjectCard = (project, index) => {
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
              {project.title}
            </h3>
            <p className="text-purple-600 font-medium mb-1">
              项目编号：{project.projectNumber}
            </p>
            <p className="text-gray-600 mb-2">
              项目负责人：{project.leader}
            </p>
          </div>
          <div className="text-right ml-4">
            <span className={`inline-block px-3 py-1 text-sm rounded-full mb-2 ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <p className="text-sm text-gray-500">
              {project.funding >= 100 ? `${project.funding}万元` : `${project.funding}万元`}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span><strong>执行期间：</strong>{project.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span><strong>资助金额：</strong>{project.funding}万元</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">研究目标</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.objectives.map((objective, idx) => (
              <li key={idx}>{objective}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">参与单位</h4>
          <div className="flex flex-wrap gap-2">
            {project.participants.map((participant, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {participant}
              </span>
            ))}
          </div>
        </div>

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">主要成果</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {project.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            负责人：{project.leader}
          </div>
          <a
            href="#"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
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
            科研项目
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            承担国家重大科研项目和产业合作项目
          </motion.p>
        </div>
      </section>

      {/* 项目统计 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: '在研项目' },
              { number: '5000+', label: '总资助金额(万元)' },
              { number: '10+', label: '合作单位' },
              { number: '30+', label: '项目参与人员' }
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

      {/* 项目展示 */}
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
                  placeholder="搜索项目..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 项目列表 */}
          <div className="space-y-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => renderProjectCard(project, index))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {searchTerm ? '未找到相关项目' : '暂无相关项目'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
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
              合作伙伴
            </h2>
            <p className="text-lg text-gray-600">
              与国内外知名高校、科研院所和企业建立了广泛的合作关系
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              '清华大学',
              '北京理工大学',
              '中科院',
              '比亚迪',
              '宁德时代',
              '东方电气',
              'MIT',
              'Stanford',
              '某航空公司',
              '某互联网公司',
              '华为技术',
              '中石化'
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-purple-600">
                    {partner.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;

