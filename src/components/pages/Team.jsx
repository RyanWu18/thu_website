import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Award } from 'lucide-react';

// 导入团队成员照片
import professor1 from '../../assets/team/professor_1.jpg';
import professor2 from '../../assets/team/professor_2.jpg';

const Team = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  const tabs = [
    { id: 'faculty', name: '全职教师', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'experts', name: '特聘专家', icon: <Award className="w-5 h-5" /> },
    { id: 'adjunct', name: '兼职专家', icon: <ExternalLink className="w-5 h-5" /> },
    { id: 'postdoc', name: '博士后', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'students', name: '博/硕士生', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'alumni', name: '组内毕业生', icon: <Award className="w-5 h-5" /> }
  ];

  const teamData = {
    faculty: [
      {
        name: '张教授',
        title: '教授、博士生导师',
        position: '课题组负责人',
        photo: professor1,
        email: 'zhang@tsinghua.edu.cn',
        phone: '+86-10-62785001',
        office: '机械工程系 301室',
        research: ['传热传质理论', '热系统优化', '新能源热管理'],
        education: [
          '清华大学 工学博士 (2000)',
          'MIT 访问学者 (2005-2006)',
          '清华大学 工学硕士 (1997)'
        ],
        achievements: [
          '国家杰出青年科学基金获得者',
          '教育部长江学者特聘教授',
          '国际传热传质学会会士'
        ]
      },
      {
        name: '李教授',
        title: '副教授、硕士生导师',
        position: '课题组副主任',
        photo: professor2,
        email: 'li@tsinghua.edu.cn',
        phone: '+86-10-62785002',
        office: '机械工程系 302室',
        research: ['计算传热学', '多相流传热', '热电转换'],
        education: [
          '清华大学 工学博士 (2010)',
          'Stanford University 博士后 (2010-2012)',
          '清华大学 工学硕士 (2007)'
        ],
        achievements: [
          '国家优秀青年科学基金获得者',
          '北京市科技新星',
          '清华大学优秀青年教师'
        ]
      }
    ],
    experts: [
      {
        name: '王院士',
        title: '中国科学院院士',
        position: '特聘专家',
        photo: professor1,
        email: 'wang@cas.cn',
        research: ['传热学基础理论', '工程热物理'],
        affiliation: '中国科学院工程热物理研究所'
      },
      {
        name: 'Prof. Smith',
        title: 'Professor',
        position: '国际特聘专家',
        photo: professor2,
        email: 'smith@mit.edu',
        research: ['Heat Transfer Enhancement', 'Thermal Management'],
        affiliation: 'Massachusetts Institute of Technology'
      }
    ],
    adjunct: [
      {
        name: '陈总工',
        title: '高级工程师',
        position: '兼职专家',
        photo: professor1,
        research: ['工业传热设备', '节能技术'],
        affiliation: '中国石化集团'
      }
    ],
    postdoc: [
      {
        name: '刘博士',
        title: '博士后研究员',
        photo: professor2,
        email: 'liu.postdoc@tsinghua.edu.cn',
        research: ['纳米流体传热', '微尺度传热'],
        startYear: '2023'
      }
    ],
    students: [
      {
        name: '赵同学',
        title: '博士研究生',
        year: '2022级',
        research: ['热电材料', '能量转换'],
        supervisor: '张教授'
      },
      {
        name: '钱同学',
        title: '硕士研究生',
        year: '2023级',
        research: ['传热强化', '换热器设计'],
        supervisor: '李教授'
      },
      {
        name: '孙同学',
        title: '博士研究生',
        year: '2021级',
        research: ['多相流传热', '数值模拟'],
        supervisor: '张教授'
      }
    ],
    alumni: [
      {
        name: '周博士',
        title: '博士 (2020)',
        currentPosition: '华为技术有限公司 高级工程师',
        thesis: '微通道传热强化机理研究'
      },
      {
        name: '吴博士',
        title: '博士 (2019)',
        currentPosition: '北京理工大学 副教授',
        thesis: '热电材料界面传热研究'
      }
    ]
  };

  const renderMemberCard = (member, type) => {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="team-card bg-white p-6 shadow-lg"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={member.photo || professor1}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-purple-600 font-medium mb-2">{member.title}</p>
          {member.position && (
            <p className="text-gray-600 mb-4">{member.position}</p>
          )}
          
          {/* 联系信息 */}
          {member.email && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <Mail className="w-4 h-4" />
              <span>{member.email}</span>
            </div>
          )}
          {member.phone && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
              <Phone className="w-4 h-4" />
              <span>{member.phone}</span>
            </div>
          )}
          {member.office && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{member.office}</span>
            </div>
          )}

          {/* 研究方向 */}
          {member.research && (
            <div className="w-full mb-4">
              <h4 className="font-medium text-gray-900 mb-2">研究方向</h4>
              <div className="flex flex-wrap gap-2">
                {member.research.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 其他信息 */}
          {member.affiliation && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>所属单位：</strong>{member.affiliation}
            </p>
          )}
          {member.year && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>年级：</strong>{member.year}
            </p>
          )}
          {member.supervisor && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>导师：</strong>{member.supervisor}
            </p>
          )}
          {member.currentPosition && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>现任职位：</strong>{member.currentPosition}
            </p>
          )}
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
            研究团队
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            汇聚国内外优秀学者，形成多层次人才梯队
          </motion.p>
        </div>
      </section>

      {/* 团队成员内容 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标签导航 */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
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

          {/* 团队成员展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData[activeTab]?.map((member, index) => (
              <div key={index}>
                {renderMemberCard(member, activeTab)}
              </div>
            ))}
          </div>

          {/* 空状态 */}
          {(!teamData[activeTab] || teamData[activeTab].length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">暂无相关人员信息</p>
            </div>
          )}
        </div>
      </section>

      {/* 加入我们 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              加入我们
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              我们欢迎有志于热质传递与热系统研究的优秀人才加入我们的团队。
              无论您是博士后、研究生还是本科生，都能在这里找到适合的发展机会。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:thermal@tsinghua.edu.cn"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                联系我们
              </a>
              <a
                href="/downloads"
                className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                招生信息
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Team;

